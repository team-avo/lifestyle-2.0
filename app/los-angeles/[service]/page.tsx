import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPages, getPageByPath, pathOf } from "@/lib/wp";
import { isWpLosAngelesPage } from "@/data/wp-routes";
import { WpBody } from "@/components/sections/WpBody";
import { CTABand } from "@/components/sections/CTABand";

// The /los-angeles/* local SEO pages, served from WordPress at their live URLs.
export const dynamicParams = false;
export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages
    .map((p) => pathOf(p.link))
    .filter(isWpLosAngelesPage)
    .map((path) => ({ service: path.split("/")[2] }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const page = await getPageByPath(`/los-angeles/${service}/`);
  return page ? { title: page.title, alternates: { canonical: `/los-angeles/${service}/` } } : {};
}

export default async function LosAngelesPage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const page = await getPageByPath(`/los-angeles/${service}/`);
  if (!page) notFound();
  return (
    <>
      <WpBody html={page.content} />
      <CTABand />
    </>
  );
}
