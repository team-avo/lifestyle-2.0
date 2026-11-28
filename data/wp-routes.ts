// Which WordPress pages are served straight from WP (headless) at their live URL.
// Everything else on the site is a hand-built page under app/.

/** Top-level WP pages rendered by app/[slug]/page.tsx, besides the blog posts. */
export function isWpTopLevelPage(path: string): boolean {
  return (
    /^\/interventionist-[a-z0-9-]+\/$/.test(path) || // 42 state + city location pages
    [
      "/intervention-services-malibu/",
      "/grant-overmire/",
      "/free-guide-thank-you/",
      "/treatment-guide-thank-you/",
    ].includes(path)
  );
}

/** Nested WP pages rendered by app/los-angeles/[service]/page.tsx. */
export function isWpLosAngelesPage(path: string): boolean {
  return /^\/los-angeles\/[a-z0-9-]+\/$/.test(path);
}
