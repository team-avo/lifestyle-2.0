// Headless WordPress client (architecture option C1).
// Blog posts and the WP-served pages (locations etc.) come from the live WP
// REST API. The client keeps publishing in WordPress; pages revalidate hourly.
//
// Load-bearing design note: the WP host is shared hosting and returns HTTP 500
// when hit with many parallel requests (a per-page fetch design fired ~250 of
// them during `next build`). So content is pulled in a few BULK requests
// (all posts in one call, all served pages in one call), memoized per process
// with a TTL, and requests are retried. A request that still fails THROWS, so
// the build fails loudly (or ISR keeps the last good page) instead of quietly
// publishing a 404.

import { isWpLosAngelesPage, isWpTopLevelPage } from "@/data/wp-routes";

const API = process.env.WP_API_BASE ?? "https://lifestyleinterventions.com/wp-json/wp/v2";
const SITE = "https://lifestyleinterventions.com";
const TTL_MS = 60 * 60 * 1000; // matches the routes' `revalidate = 3600`

export type WpListItem = { id: number; slug: string; link: string; title: string; date?: string; excerpt?: string };
export type WpDoc = WpListItem & { content: string };

type Raw = {
  id: number;
  slug: string;
  link: string;
  date?: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content?: { rendered: string };
};

// ---- helpers ---------------------------------------------------------------

const ENTITIES: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…",
  ndash: "–", mdash: "—", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“",
};

export function decode(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n.toLowerCase()] ?? m);
}

export function stripTags(html: string): string {
  return decode(html.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

/** "https://lifestyleinterventions.com/los-angeles/interventionist/" -> "/los-angeles/interventionist/" */
export function pathOf(link: string): string {
  try {
    return new URL(link).pathname;
  } catch {
    return link.replace(SITE, "");
  }
}

/** Point links that go to the live site at the same path on this site. */
function relinkInternal(html: string): string {
  return html.replace(
    /href="https?:\/\/(www\.)?lifestyleinterventions\.com(\/(?!wp-content)[^"]*)"/g,
    'href="$2"'
  );
}

function toItem(r: Raw): WpListItem {
  return {
    id: r.id,
    slug: r.slug,
    link: r.link,
    title: decode(r.title.rendered),
    date: r.date,
    excerpt: r.excerpt ? stripTags(r.excerpt.rendered) : undefined,
  };
}

function toDoc(r: Raw): WpDoc {
  return { ...toItem(r), content: relinkInternal(r.content?.rendered ?? "") };
}

/** Memoize an async loader per process, refreshed after TTL. Failures are not cached. */
function memo<T>(load: () => Promise<T>): () => Promise<T> {
  let cached: { at: number; value: Promise<T> } | null = null;
  return () => {
    if (!cached || Date.now() - cached.at > TTL_MS) {
      const value = load();
      cached = { at: Date.now(), value };
      value.catch(() => {
        cached = null;
      });
    }
    return cached.value;
  };
}

// No Next data-cache options here on purpose: the bundles exceed its 2MB
// per-entry limit. The memo above does the reuse; route `revalidate` does ISR.
async function getJson<T>(url: string): Promise<{ data: T; totalPages: number }> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const totalPages = Number(res.headers.get("x-wp-totalpages") ?? "1");
        return { data: (await res.json()) as T, totalPages };
      }
      lastErr = new Error(`HTTP ${res.status}`);
    } catch (err) {
      lastErr = err;
    }
    console.warn(`WP fetch attempt ${attempt} failed (${String(lastErr)}): ${url}`);
    await new Promise((r) => setTimeout(r, 750 * attempt * attempt));
  }
  throw new Error(`WP fetch failed after retries: ${url} (${String(lastErr)})`);
}

async function fetchAll(type: "posts" | "pages", query: string): Promise<Raw[]> {
  const out: Raw[] = [];
  for (let page = 1; page <= 20; page++) {
    const r = await getJson<Raw[]>(`${API}/${type}?per_page=100&page=${page}&${query}`);
    out.push(...r.data);
    if (page >= r.totalPages) break;
  }
  return out;
}

// ---- bundles (a handful of requests per build worker) ----------------------

const postsBundle = memo(() =>
  fetchAll("posts", "_fields=id,slug,link,date,title,excerpt,content")
);

const pagesIndex = memo(() => fetchAll("pages", "_fields=id,slug,link,title"));

/** Content for only the pages this site serves from WP (~50 of WP's 90). */
const servedPagesBundle = memo(async () => {
  const index = await pagesIndex();
  const ids = index
    .filter((p) => {
      const path = pathOf(p.link);
      return isWpTopLevelPage(path) || isWpLosAngelesPage(path);
    })
    .map((p) => p.id);
  if (ids.length === 0) return [];
  return fetchAll("pages", `include=${ids.join(",")}&_fields=id,slug,link,title,content`);
});

// ---- public API ------------------------------------------------------------

export async function getAllPosts(): Promise<WpListItem[]> {
  const posts = (await postsBundle()).map(toItem);
  return posts.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export async function getPost(slug: string): Promise<WpDoc | null> {
  const raw = (await postsBundle()).find((p) => p.slug === slug);
  return raw ? toDoc(raw) : null;
}

export async function getAllPages(): Promise<WpListItem[]> {
  return (await pagesIndex()).map(toItem);
}

/** A WP-served page by its exact public path, e.g. "/los-angeles/interventionist/". */
export async function getPageByPath(path: string): Promise<WpDoc | null> {
  const raw = (await servedPagesBundle()).find((p) => pathOf(p.link) === path);
  return raw ? toDoc(raw) : null;
}
