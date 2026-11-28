import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { CTABand } from "@/components/sections/CTABand";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Prose } from "@/components/sections/Prose";
import { FeaturedIn } from "@/components/sections/SharedBlocks";
import { Section, Eyebrow } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";

const interviews = [
  { title: "From Adversity to an Ethos of Resilience", show: "Against All Odds Podcast", length: "1:30:20" },
  { title: "The Amazing Chris Howard, He Saved Our Son's Life", show: "Chef Jeffrey Saad", length: "41:33" },
  { title: "Ep 5: Chris Howard", show: "Recovery Refined", length: "1:11:58" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedIn />
      <ServiceCards />

      <FeatureCards
        eyebrow="Advisory"
        heading="Where Care Meets Responsibility"
        intro="Non-clinical advisory and oversight for families and professionals facing complex mental health and substance use challenges."
        features={[
          { kicker: "01", title: "Treatment Placement", body: "Curated treatment recommendations, with admissions and transition management for the best fit." },
          { kicker: "02", title: "Crisis Consultation & Oversight", body: "Experienced strategy, coordination, and accountability when a situation grows complex." },
          { kicker: "03", title: "Long-Term Care Coordination", body: "Ongoing oversight for continuity of care, aligned communication, and sustainable progress." },
        ]}
      />

      <FeatureCards
        eyebrow="Advisory Engagement Framework"
        heading="Three levels of engagement"
        surface
        features={[
          { title: "Crisis Engagement", body: "Stabilization planning, crisis strategy, safe transitions, and recommendations within 72 hours." },
          { title: "Ongoing Advisory", body: "Long-term oversight, monthly updates, structured accountability, and defensible reporting." },
          { title: "Comprehensive Oversight", body: "Crisis plus ongoing advisory, with governance frameworks, annual reviews, and integrated coordination." },
        ]}
      />

      <Prose
        eyebrow="Tailored Wellness Programs"
        heading="Individualized Care. Lasting Results."
        paragraphs={[
          "A private, individually structured wellness service. Schedule, focus, location, intensity, and team are all built around one person, with lifestyle mentoring, clinical provider matching, and case coordination in one plan.",
        ]}
      >
        <div className="mt-8">
          <Button href="/tailored-wellness-program/" variant="outline">Explore the Wellness Program</Button>
        </div>
      </Prose>

      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Confidential. Professional. Trusted.</Eyebrow>
            <h2 className="text-3xl sm:text-4xl text-ink">Who We Are</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Lifestyle Interventions is a Los Angeles intervention and recovery support
              service led by founder Chris Howard, CADC-III, CCMI-M. We are not a treatment
              facility. We plan interventions, mentor people in recovery, and coordinate
              placement alongside treatment providers.
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl text-ink">How We Work</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Calls are answered personally. We stay involved from crisis to treatment to
              ongoing recovery, we are honest about what will and will not help, and
              discretion is non-negotiable on every case.
            </p>
            <div className="mt-8">
              <Button href="/about/" variant="outline">About Us</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Intervention &amp; Recovery</Eyebrow>
        <h2 className="text-3xl sm:text-4xl text-ink">Interviews with Chris Howard</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {interviews.map((i) => (
            <div key={i.title} className="rounded-card border border-line bg-surface p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">{i.show}</p>
              <h3 className="mt-3 text-lg text-ink">{i.title}</h3>
              <p className="mt-4 text-sm text-muted">{i.length}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
