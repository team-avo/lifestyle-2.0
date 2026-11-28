import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Steps } from "@/components/sections/Steps";
import { FAQ } from "@/components/sections/FAQ";
import { FeaturedIn } from "@/components/sections/SharedBlocks";
import { CTABand } from "@/components/sections/CTABand";
import { Section, Eyebrow } from "@/components/primitives/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Story | Compassionate Intervention & Recovery Care",
  description:
    "Lifestyle Interventions helps families facing substance use crises, mental health emergencies, and behavioral health challenges find a path forward.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Lifestyle Interventions"
        intro="We help families facing substance use crises, mental health emergencies, and behavioral health challenges find a path forward."
        primaryCta={{ label: "Contact Us Today", href: site.phoneHref }}
      />
      <FeaturedIn />

      <Prose
        eyebrow="Our Mission"
        heading="A guide through the uncertainty"
        paragraphs={[
          "Lifestyle Interventions is a Los Angeles intervention and recovery support service, not a treatment facility. I lead a team doing crisis intervention, recovery mentoring, and treatment coordination, working alongside treatment providers.",
          "Most families who call have already tried everything on their own. My role is to meet them in that uncertainty and guide them through professional intervention, treatment placement, or ongoing mentoring. I am based in Los Angeles, serve families nationally, and stay involved for as long as I am needed.",
        ]}
      />

      <Prose
        surface
        eyebrow="Founder"
        heading="Meet Chris Howard, CADC-III, CCMI-M"
        paragraphs={[
          "Chris holds the CADC-III (Sober College) and CCMI-M (Breining Institute) credentials and a B.A. in Psychology from UCLA. He has spent 16+ years in behavioral health and has guided hundreds of families through crisis interventions.",
          "He founded Lifestyle Interventions on a simple belief: a well-prepared, professionally guided intervention can change a life. He serves Southern California and families across the United States.",
        ]}
      />

      <Prose
        eyebrow="Our Story"
        heading="This Work Is Personal"
        paragraphs={[
          "Chris has been in recovery since 2009. His own recovery led him to work with mentors and clinicians, and eventually to found this company. The work centers on long-term change rather than quick fixes.",
        ]}
      />

      <Prose
        surface
        eyebrow="A Related Practice"
        heading="Ethos Recovery"
        paragraphs={[
          "Chris also founded Ethos Recovery, a separate structured sober-living community for men in Los Angeles. Ethos provides the long-term living environment; Lifestyle Interventions provides family-facing intervention and coordination.",
        ]}
      />

      <FeatureCards
        eyebrow="Who I Serve"
        heading="The families and professionals I work with"
        columns={4}
        features={[
          { title: "Families in crisis", body: "Parents, partners, and siblings watching a loved one struggle with addiction or mental health." },
          { title: "Young adults not launching", body: "Not in school or work, or stuck in patterns involving substance use, anxiety, or untreated mental health." },
          { title: "Professionals & high-profile individuals", body: "Executives, public figures, and high-net-worth clients who need complete discretion." },
          { title: "Clinicians referring out", body: "Therapists who need an intervention specialist for a client who is not engaging." },
        ]}
      />

      <Steps
        surface
        eyebrow="How I Work"
        heading="What you can expect from me"
        steps={[
          { title: "I respond", body: "Calls are answered personally, never routed to an answering service. I will go in person when needed." },
          { title: "I stay involved", body: "Follow-up and check-ins through the move from crisis, to treatment, to ongoing recovery." },
          { title: "I am honest", body: "I will not tell families what they want to hear, and I recommend other approaches when they serve better." },
          { title: "I come from experience", body: "My own lived experience shapes how I listen and how I show up." },
        ]}
      />

      <Section>
        <Eyebrow>Our Philosophy</Eyebrow>
        <h2 className="max-w-3xl text-3xl sm:text-4xl text-ink">
          Recovery is not measured in 30-day blocks.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-card border border-line bg-surface p-8">
            <h3 className="text-lg text-muted">The acute-care model</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>30-day inpatient programs</li>
              <li>Short, structured episodes of care</li>
              <li>Discharge when the program ends</li>
              <li>A clear place in the system, but not the whole picture</li>
            </ul>
          </div>
          <div className="rounded-card border border-brand bg-surface p-8">
            <h3 className="text-lg text-brand">How we work</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Long-arc engagement with families</li>
              <li>Mentoring that holds people accountable for weeks and months</li>
              <li>Steady, honest contact that rebuilds trust</li>
              <li>Family conversations that lead to acceptance of treatment</li>
            </ul>
          </div>
        </div>
        <blockquote className="mt-10 max-w-3xl border-l-2 border-accent pl-6 font-serif text-2xl text-ink">
          Accountability is at the center of how we work.
        </blockquote>
        <p className="mt-4 max-w-3xl text-muted">
          Accountability is structure, not pressure or punishment. People recover when someone
          steady stays close and tells the truth.
        </p>
      </Section>

      <FeatureCards
        surface
        eyebrow="What We Believe"
        heading="Our principles"
        features={[
          { title: "Recovery is possible", body: "We hold that belief for each family until they can hold it themselves." },
          { title: "Families deserve support too", body: "The whole family is affected, so we work with the whole family." },
          { title: "Confidentiality is non-negotiable", body: "We never discuss cases and never share names." },
          { title: "The right help matters", body: "Programs differ, so we understand each person before recommending anything." },
          { title: "One conversation can change everything", body: "We make the first call as easy as possible, without judgment, at your pace." },
        ]}
      />

      <FAQ
        heading="Frequently Asked Questions About Lifestyle Interventions"
        items={[
          { q: "Who founded Lifestyle Interventions?", a: "Chris Howard, CADC-III and CCMI-M, with 16+ years of experience in behavioral health." },
          { q: "Is Lifestyle Interventions a treatment center?", a: "No. We are an intervention and recovery support service. We plan interventions, provide mentoring, and coordinate placement with treatment providers." },
          { q: "What credentials does the team hold?", a: "The founder holds the CADC-III and CCMI-M, among the highest-level credentials in the field." },
          { q: "What areas do you serve?", a: "We are based in West Los Angeles and serve LA County and Southern California, and families nationally when needed." },
          { q: "How long have you been operating?", a: "Over a decade." },
          { q: "What is the first step?", a: `A phone call at ${site.phoneDisplay}, any time. The first conversation is confidential and covers your options and cost.` },
        ]}
      />
      <CTABand />
    </>
  );
}
