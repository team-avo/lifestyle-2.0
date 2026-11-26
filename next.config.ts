import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Match the current WordPress site: every URL has a trailing slash.
  trailingSlash: true,
  reactStrictMode: true,

  // Legacy / orphan URL redirects. Expanded at cutover from the old-vs-new
  // sitemap diff so nothing 404s. Seeded with the known orphan.
  async redirects() {
    return [
      {
        source: "/advisory-version-2",
        destination: "/advisory/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
