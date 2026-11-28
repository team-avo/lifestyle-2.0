import Link from "next/link";
import { PageHero } from "./PageHero";
import { Prose } from "./Prose";
import { FeatureCards, type Feature } from "./FeatureCards";
import { Steps, type Step } from "./Steps";
import { StatCards, type Stat } from "./StatCards";
import { FAQ, type QA } from "./FAQ";
import { EmergencyBlock } from "./EmergencyBlock";
import { CTABand } from "./CTABand";
import { FeaturedIn, LongHaul, ServiceArea } from "./SharedBlocks";
import { Section, Eyebrow } from "@/components/primitives/Section";
import { site } from "@/data/site";

// Long-form LA service page used by Crisis Interventions + Family Support.
export type ServiceLandingContent = {
  eyebrow: string;
  title: string;
  intro: string;
  whatIs: { heading: string; paragraphs: string[] };
  whenToCall: { heading: string; items: string[] };
  process: { heading: string; steps: Step[] };
  whoFor: { heading: string; cards: Feature[] };
  whyUs: Stat[];
  faqHeading: string;
  faq: QA[];
  related: { label: string; href: string }[];
  resource?: { label: string; href: string };
};

export function ServiceLanding({ c }: { c: ServiceLandingContent }) {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        intro={c.intro}
        secondaryCta={{ label: `Call ${site.phoneDisplay}`, href: site.phoneHref }}
      />
      <FeaturedIn />
      <Prose heading={c.whatIs.heading} paragraphs={c.whatIs.paragraphs} />

      <Section className="bg-surface">
        <div className="max-w-3xl">
          <Eyebrow>Your interventionist</Eyebrow>
          <h2 className="text-3xl text-ink sm:text-4xl">Chris Howard</h2>
          <p className="mt-4 text-muted">
            Founder of Lifestyle Interventions. Based in Los Angeles, supporting families
            nationwide.
          </p>
          <Link href="/about/" className="mt-6 inline-block text-sm font-semibold text-brand">
            Meet your interventionist →
          </Link>
        </div>
      </Section>

      <Prose eyebrow="When to call" heading={c.whenToCall.heading} bullets={c.whenToCall.items} />
      <Steps surface eyebrow="The process" heading={c.process.heading} steps={c.process.steps} />
      <FeatureCards eyebrow="Who we serve" heading={c.whoFor.heading} features={c.whoFor.cards} columns={2} />
      <StatCards eyebrow="Why us" heading="Why Los Angeles families choose Lifestyle Interventions" stats={c.whyUs} />
      <LongHaul />
      <ServiceArea />

      <Prose
        surface
        eyebrow="What to expect"
        heading="What to expect when you call"
        paragraphs={[
          "The first call is confidential, with no obligation and no enrollment. We ask about the person, where they are, what has been tried, and what your family hopes for. Every call ends with a clear next step.",
        ]}
      >
        {c.resource && (
          <Link href={c.resource.href} className="mt-6 inline-block text-sm font-semibold text-brand">
            {c.resource.label} →
          </Link>
        )}
      </Prose>

      <EmergencyBlock />
      <FAQ heading={c.faqHeading} items={c.faq} />

      <Section className="bg-surface">
        <Eyebrow>Related services</Eyebrow>
        <div className="mt-4 flex flex-wrap gap-3">
          {c.related.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="rounded-full border border-line bg-bg px-5 py-2.5 text-sm text-ink hover:border-brand hover:text-brand"
            >
              {r.label}
            </Link>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
