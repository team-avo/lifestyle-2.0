import { PageHero } from "./PageHero";
import { Prose } from "./Prose";
import { Steps, type Step } from "./Steps";
import { FAQ, type QA } from "./FAQ";
import { LeadForm } from "./LeadForm";
import { FitCheck, HelpfulResources } from "./SharedBlocks";
import { TalkToMe } from "./TalkToMe";
import { Section, Eyebrow } from "@/components/primitives/Section";

export type LeadMagnetContent = {
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel: string;
  formName: string;
  submitLabel: string;
  overview: { heading: string; paragraphs: string[] };
  notAlone: { heading: string; paragraphs: string[] };
  inside: { heading: string; intro?: string; items: Step[] };
  fit: { good: string[]; notRight: string[] };
  formHeading: string;
  faq: QA[];
};

export function LeadMagnetPage({ c }: { c: LeadMagnetContent }) {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        intro={c.intro}
        primaryCta={{ label: c.ctaLabel, href: "#lead-form" }}
        secondaryCta={null}
      />
      <Prose surface heading={c.overview.heading} paragraphs={c.overview.paragraphs} />
      <Prose eyebrow="You're not alone" heading={c.notAlone.heading} paragraphs={c.notAlone.paragraphs} />
      <Steps surface eyebrow="Inside" heading={c.inside.heading} intro={c.inside.intro} steps={c.inside.items} />
      <FitCheck good={c.fit.good} notRight={c.fit.notRight} />

      <Prose
        eyebrow="Why us"
        heading="About Lifestyle Interventions"
        paragraphs={[
          "A Los Angeles intervention and recovery advisory service founded by Chris Howard, CADC-III, CCMI-M. We help families plan the conversation, prepare for resistance, and arrange next steps. We are not a treatment center.",
        ]}
      />

      <Section className="bg-surface" containerClassName="">
        <div id="lead-form" className="mx-auto max-w-xl scroll-mt-28">
          <Eyebrow>Free download</Eyebrow>
          <h2 className="text-3xl text-ink">{c.formHeading}</h2>
          <p className="mt-3 text-sm text-muted">Sent shortly by email. No calls, no pressure.</p>
          <div className="mt-8">
            <LeadForm
              variant="magnet"
              formName={c.formName}
              submitLabel={c.submitLabel}
              successTitle="On its way."
              successText="Check your inbox in a few minutes. If it does not arrive, check your spam folder."
            />
          </div>
        </div>
      </Section>

      <FAQ items={c.faq} />
      <TalkToMe heading="Ready to talk?" body="Reach out whenever you are ready. The first conversation is confidential." />
      <HelpfulResources />
    </>
  );
}
