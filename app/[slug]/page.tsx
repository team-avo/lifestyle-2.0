import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPages, getAllPosts, getPageByPath, getPost, pathOf } from "@/lib/wp";
import { isWpTopLevelPage } from "@/data/wp-routes";
import { WpBody } from "@/components/sections/WpBody";
import { CTABand } from "@/components/sections/CTABand";
import { Container } from "@/components/primitives/Container";

/*
  Root-level slugs from WordPress, at their exact live URLs:
  - all blog posts (they live at the root, e.g. /detaching-with-love/)
  - the 42 interventionist-{state|city} location pages, Malibu, and a few one-off pages
  Hand-built routes under app/ (e.g. /about/) take precedence over this one.
*/

export const dynamicParams = false;
export const revalidate = 3600;

export async function generateStaticParams() {
  const [posts, pages] = await Promise.all([getAllPosts(), getAllPages()]);
  const pageSlugs = pages.filter((p) => isWpTopLevelPage(pathOf(p.link))).map((p) => p.slug);
  return [...posts.map((p) => p.slug), ...pageSlugs].map((slug) => ({ slug }));
}

async function load(slug: string) {
  const post = await getPost(slug);
  if (post) return { kind: "post" as const, doc: post };
  const page = await getPageByPath(`/${slug}/`);
  if (page) return { kind: "page" as const, doc: page };
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const found = await load(slug);
  if (!found) return {};
  return {
    title: found.doc.title,
    description: found.doc.excerpt,
    alternates: { canonical: `/${slug}/` },
  };
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = await load(slug);
  if (!found) notFound();

  if (found.kind === "page") {
    // Location pages carry their own hero + sections from WordPress.
    return (
      <>
        <WpBody html={found.doc.content} />
        <CTABand />
      </>
    );
  }

  const post = found.doc;
  const date = post.date
    ? new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : null;

  return (
    <>
      <section className="bg-brand">
        <Container className="flex flex-col items-center py-20 text-center">
          <Link href="/blog/" className="text-xs font-semibold uppercase tracking-[0.2em] text-sage hover:text-lime">
            ← Blog
          </Link>
          <h1 className="mt-4 max-w-4xl text-4xl text-white sm:text-5xl">{post.title}</h1>
          {date && <p className="mt-5 text-sm text-white/60">{date}</p>}
        </Container>
      </section>
      <article className="py-12">
        <Container>
          <WpBody html={post.content} />
        </Container>
      </article>
      <CTABand />
    </>
  );
}
