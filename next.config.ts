import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Match the current WordPress site: every URL has a trailing slash.
  trailingSlash: true,
  reactStrictMode: true,

  // Legacy / orphan URL redirects. Expanded at cutover from the old-vs-new
  // sitemap diff so nothing 404s. Seeded with the known orphan.
  async redirects() {
    return [
      // Unlinked draft page on the live site; folded into the real Advisory page.
      { source: "/advisory-version-2", destination: "/advisory/", permanent: true },
      // Live site already 301s this one.
      { source: "/los-angeles/family-support-services", destination: "/family-support-services/", permanent: true },
    ];
  },
};

export default nextConfig;
