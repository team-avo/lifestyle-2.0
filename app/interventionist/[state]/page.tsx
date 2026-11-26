import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import { Hero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, Eyebrow } from "@/components/primitives/Section";

/*
  DEMO of the programmatic location template: one component over data, all
  pages built at compile time from data/locations.ts.

  NOTE on URL: production preserves the live flat slug /interventionist-california/.
  That final mapping is done in Phase 3 via a root-level slug manifest (shared
  with blog posts, which also live at the root). This nested /interventionist/[state]/
  route is the skeleton demo so the build stays clean without a greedy root
  catch-all. See ARCHITECTURE.md Section 4.
*/

export function generateStaticParams() {
  return locations.map((l) => ({ state: l.slug }));
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const loc = locations.find((l) => l.slug === state);
  if (!loc) notFound();

  return (
    <>
      <Hero />
      <Section>
        <Eyebrow>Interventionist, {loc.name}</Eyebrow>
        <h2 className="max-w-3xl text-3xl text-ink sm:text-4xl">
          Crisis Intervention Support in {loc.name}
        </h2>
        <p className="mt-5 max-w-2xl text-muted">{loc.intro}</p>
      </Section>
      <CTABand />
    </>
  );
}
