import type { MetadataRoute } from "next";
import { getAllPages, getAllPosts, pathOf } from "@/lib/wp";
import { isWpLosAngelesPage, isWpTopLevelPage } from "@/data/wp-routes";

const BASE = "https://lifestyleinterventions.com";

// Hand-built routes under app/.
const STATIC = [
  "/", "/about/", "/advisory/", "/contact-us/", "/for-professionals/", "/for-employers/",
  "/who-we-help/", "/who-we-help/spouses/", "/who-we-help/parents-adult-children/", "/who-we-help/siblings/",
  "/crisis-interventions/", "/family-support-services/", "/tailored-wellness-program/",
  "/signature-support-services/", "/intervention-models/", "/intervention-models/johnson/",
  "/executive-interventions/", "/mental-health-crisis/", "/teen-intervention/",
  "/recovery-mentor-vs-sober-companion/", "/free-treatment-center-guide/",
  "/family-intervention-prep-checklist/", "/discreet-family-guide/", "/family-intervention-assessment/",
  "/do-you-need-an-intervention/", "/when-to-stage-an-intervention/", "/what-to-say-phrase-cards/",
  "/privacy-policy/", "/terms-and-conditions/", "/blog/",
];

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, pages] = await Promise.all([getAllPosts(), getAllPages()]);
  const wpPaths = pages
    .map((p) => pathOf(p.link))
    .filter((p) => isWpTopLevelPage(p) || isWpLosAngelesPage(p))
    .filter((p) => !p.includes("thank-you"));

  return [
    ...STATIC.map((p) => ({ url: `${BASE}${p}` })),
    ...wpPaths.map((p) => ({ url: `${BASE}${p}` })),
    ...posts.map((p) => ({ url: `${BASE}/${p.slug}/`, lastModified: p.date })),
  ];
}
