# Lifestyle Interventions, Rebuild Architecture

Rebuild of **lifestyleinterventions.com** (currently WordPress + Elementor on Hostinger) into the team standard stack: **Next.js + Node.js**. One shared design system, data-driven content, and a 1:1 URL map so no SEO is lost.

Status: PLAN stage (24 to 26 Nov 2026). Nothing built yet. This doc is the architecture to walk Khush through before we start coding.

---

## 1. Goals

1. **Pixel-faithful replica first.** Match the current look, copy, and page set before improving anything. The client approved a rebuild, not a redesign.
2. **One design system.** Replace Elementor's element-by-element markup with a single token set + component library. Far less code, much faster load.
3. **Zero SEO loss.** 156 URLs are indexed today. Every slug is preserved exactly (same path, same trailing slash) or 301-redirected.
4. **Content stays editable.** The client publishes blog posts and location pages. The rebuild must keep that easy, it cannot become a dev-only site.
5. **Fast build.** Target ~2 days of focused build once the plan is signed off, because 124 of the 156 pages collapse into 2 templates.

---

## 2. Current site snapshot (from live sitemap, 26 Nov 2026)

| Group | Count | Notes |
|---|---|---|
| Core marketing pages | 6 | Home, About, Contact, Advisory, For Professionals, For Employers |
| Audience ("Who We Help") | 4 | Parent, spouses, parents/adult-children, siblings |
| Service / treatment pages | 10 | Crisis, Family Support, Wellness, Monitoring, Intervention Models, Executive, Mental Health, Teen, etc. |
| Lead-capture guides | 8 | Free guide, prep checklist (+ thank-you), assessment, phrase cards, etc. |
| Legal | 2 | Privacy Policy, Terms |
| Blog posts | 76 | Yoast `post-sitemap.xml` |
| Location pages | 48 | 37 state + 5 city `interventionist-*`, 1 Malibu, 5 LA sub-pages |
| Other | 2 | `advisory-version-2` (orphan), `grant-overmire` (person) |
| **Total** | **156** | |

**Key insight:** 76 blog + 48 location = **124 pages (79%)** are repeating templates over data. Only ~30 pages are bespoke layout work.

**Brand/tone:** premium, discreet, "by invitation only," high-profile cases. Design should read understated and confidential, not clinical-rehab. Primary CTA everywhere: "Request a Confidential Consultation" to `/contact-us/`.

---

## 3. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15, App Router** | SSG/ISR per page, best-in-class SEO, file-based routing maps cleanly to the slug set |
| Language | **TypeScript** | Type-safe content models and props |
| Styling | **Tailwind CSS + CSS variables for design tokens** | One token source, utility classes kill the Elementor bloat |
| UI primitives | Hand-built components (Button, Card, Section, etc.) | Small surface, no heavy UI library needed for a marketing site |
| Content | See Section 5 (decision point) | Blog + location data |
| "Node.js" backend | **Next.js Route Handlers** (`app/api/*`) | The only server work is the contact form proxy to GHL. A standalone Express server is unnecessary; a route handler IS the Node backend. Documented as a decision in Section 7. |
| Forms anti-spam | reCAPTCHA v3 (same as live site) | Current site already gates the form |
| Hosting | **Vercel** (team-avo GitHub to Vercel) | Matches the Advertout deploy pattern; native Next.js, ISR, preview deploys |
| DNS | GoDaddy (unchanged) | Only the A/CNAME flip at cutover |

---

## 4. Routing and URL preservation

**Rule: every live URL keeps its exact path, including the trailing slash.** Next config sets `trailingSlash: true` to match WordPress.

```
app/
  page.tsx                         -> /
  about/page.tsx                   -> /about/
  advisory/page.tsx                -> /advisory/
  contact-us/page.tsx              -> /contact-us/
  for-professionals/page.tsx
  for-employers/page.tsx

  who-we-help/page.tsx             -> /who-we-help/
  who-we-help/[audience]/page.tsx  -> /who-we-help/spouses/ etc. (data-driven, 3 slugs)

  (services)/                      -> 10 service pages, each its own route (bespoke-ish layouts)
    crisis-interventions/page.tsx
    family-support-services/page.tsx
    tailored-wellness-program/page.tsx
    signature-support-services/page.tsx
    intervention-models/page.tsx
    intervention-models/johnson/page.tsx
    executive-interventions/page.tsx
    mental-health-crisis/page.tsx
    teen-intervention/page.tsx
    recovery-mentor-vs-sober-companion/page.tsx

  (guides)/                        -> 8 lead-capture pages
  privacy-policy/page.tsx
  terms-and-conditions/page.tsx

  blog/page.tsx                    -> /blog/  (index, paginated)
  blog/[slug]/page.tsx             -> 76 posts via generateStaticParams

  interventionist-[location]/page.tsx   -> 42 state+city pages from one template
  intervention-services-malibu/page.tsx
  los-angeles/[service]/page.tsx        -> 5 LA sub-pages
```

> Note: the live blog posts sit at the **root** (`/how-a-family-intervention-works/`), not under `/blog/`. We mirror that exactly to preserve SEO. `blog/[slug]` above is illustrative; final routing uses a root-level `[slug]` catch segment with a slug manifest so posts stay at the root. Confirm at build.

**Redirects:** `next.config` `redirects()` handles `www` to apex, any legacy slugs, and orphans (`advisory-version-2` to `/advisory/`). A redirect map file is generated by diffing the old sitemap against the new route list, so nothing 404s at cutover.

---

## 5. Content strategy (DECISION NEEDED)

Three content types, three handling strategies.

**A. Static marketing pages (~30).** Built as React components on the design system. Copy lives inline or in a small per-page content object. No CMS needed.

**B. Location pages (48).** One template + a data file:
```
data/locations.ts  ->  [{ slug, state|city, headline, intro, ... }]
```
`generateStaticParams` builds all 48 at build time. Adding a state later = one data entry. This is the biggest single win: 48 hand-built Elementor pages become one component.

**C. Blog posts (76).** This is the real decision. Options:

| Option | How | Pros | Cons |
|---|---|---|---|
| **C1. Headless WordPress** (recommended) | Keep the existing WP as a content source, pull posts via WP REST API at build (ISR) | Client keeps the editor they know; zero content migration; new posts appear with a rebuild/ISR | Keeps a WP install alive (can be locked down, not public) |
| **C2. Migrate to MDX** | Export all 76 posts to MDX files in the repo | Fully self-contained, no WP; fastest runtime | One-time migration effort; client edits = dev edits (bad for a client who blogs) |
| **C3. New headless CMS** (Sanity/Contentful) | Migrate content into a hosted CMS | Clean modern editor | Migration cost + another subscription; overkill now |

**Recommendation: C1 (headless WordPress) for launch**, because the client actively publishes and we must not take the editor away in a 2-day rebuild. Revisit C2/C3 later if they want to kill WP entirely. **This is the main thing to confirm with Khush/client.**

---

## 6. Design system

Extract one token set from the live site, then build on it.

```
styles/tokens.css        (CSS variables: colors, type scale, spacing, radius, shadow)
components/
  primitives/            Button, Link, Container, Section, Heading, Eyebrow, Card
  layout/                Header, Footer, Nav, MobileNav
  sections/              Hero, LogoStrip, ServiceCards, AdvisoryTiers,
                         AboutBlock, InterviewList, CTABand, ContactForm
  blog/                  PostCard, PostBody, PostList, Pagination
```

- **Tokens** are the single source of truth. Light theme only (the site is light), but tokens are defined so a dark pass is trivial if ever wanted.
- **Sections** are the reusable building blocks the homepage is made of (Hero, LogoStrip, ServiceCards, AdvisoryTiers, AboutBlock, InterviewList, CTABand). Every marketing page is composed from these, which is why ~30 bespoke pages are really ~10 section components rearranged.
- Fonts, exact colors, and spacing get measured off the live site during build (computed styles), not eyeballed.

---

## 7. Forms and GHL lead integration

The contact form is the only dynamic piece. It reuses the **already-working GHL pipeline** (see the Lifestyle lead-handling work: webhook to GHL workflow "Website Leads Intake" to pipeline card + SMS + note).

Flow:
```
ContactForm (client) 
  -> POST /api/lead   (Next.js Route Handler = the "Node.js" backend)
      -> validate + reCAPTCHA v3 verify
      -> forward to GHL Inbound Webhook   (server-side; URL in env var, never in client)
  -> success/thank-you
```

Payload shape matches what is live and working today:
`first_name, last_name, full_name, email, phone, message, form_name, source, source_url, created_at, lead_id`.

> DECISION: keep the webhook POST **server-side** in the route handler (recommended, hides the URL and lets us add reCAPTCHA + validation) vs posting the browser straight to GHL. Server-side is the plan.

Lead-capture guide pages (8) reuse the same route handler with a different `form_name`, so every lead still lands in GHL.

---

## 8. SEO and migration checklist

- **Per-page meta** (title, description, OG) ported from the current Yoast values. Scrape current meta into a manifest during build.
- **Trailing slashes** on (`trailingSlash: true`), matches WP.
- **Sitemap** generated by Next (`app/sitemap.ts`) covering all routes; must match or superset the current 156.
- **robots.txt**, canonical tags, JSON-LD schema (Organization + Article on posts + LocalBusiness on location pages).
- **301 redirect map** built by diffing old vs new; verified with a link-check before cutover.
- **Analytics / pixels**: carry over whatever is on the live site (GA, Meta pixel, etc.), audit during build.

---

## 9. Proposed folder structure

```
lifestyle-2.0/
  app/                     routes (Section 4)
    api/lead/route.ts
    sitemap.ts
    robots.ts
  components/              (Section 6)
  data/
    locations.ts           48 location entries
    nav.ts                 header/footer nav
    site.ts                phone, email, legal, social
  lib/
    ghl.ts                 webhook client
    seo.ts                 meta helpers
    wp.ts                  headless WP fetch (if C1)
  styles/
    tokens.css
    globals.css
  content/ or mdx/         only if C2 chosen
  public/                  images, logos, media
  next.config.ts           trailingSlash, redirects, image domains
  ARCHITECTURE.md          this file
```

---

## 10. Hosting and deploy

- Repo: **github.com/team-avo/lifestyle-2.0** (pushes from `myselfabhi`).
- CI/CD: **Vercel**, auto-deploy on push to `main`, preview deploys per PR (same pattern as Advertout).
- Env vars (Vercel project): `GHL_WEBHOOK_URL`, `RECAPTCHA_SECRET`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, and WP API base if C1.
- Cutover: build on Vercel, verify on a preview/staging domain, then flip GoDaddy DNS. Keep WP reachable (locked) if C1.

---

## 11. Build phases and estimate

| Phase | Work | Est. |
|---|---|---|
| 0 | Repo scaffold (Next + TS + Tailwind), tokens extracted, Header/Footer/Nav | 0.25 day |
| 1 | Section components + Homepage, About, Advisory, Contact (+ GHL route) | 0.5 day |
| 2 | Service pages (10) + audience (4) + guides (8) + legal (2) | 0.5 day |
| 3 | Location template + data (48) | 0.25 day |
| 4 | Blog: index + post template + content source (C1/C2) | 0.5 day |
| 5 | SEO (meta, sitemap, redirects, schema), QA, link-check, cutover prep | 0.25 day |
| | **Total** | **~2.25 days** |

---

## 12. Open decisions for Khush / client

1. **Blog content source**: headless WordPress (C1, recommended) vs MDX migration (C2) vs new CMS (C3). Drives whether WP stays alive.
2. **Replica vs light refresh**: confirm it is a faithful rebuild, not a redesign. (Current assumption: faithful.)
3. **Hosting**: Vercel (recommended, matches Advertout) vs the EC2 pattern used for Oswin.
4. **Ethos**: same design system reused for the Ethos rebuild? (Separate thread, noted here only so the design system is built to be shared.)
