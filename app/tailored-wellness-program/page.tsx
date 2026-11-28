import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Steps } from "@/components/sections/Steps";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FAQ } from "@/components/sections/FAQ";
import { FitCheck } from "@/components/sections/SharedBlocks";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Trauma & Addiction Recovery Program in Los Angeles | Tailored Wellness",
  description:
    "A private, individually structured wellness program: lifestyle mentoring, clinical provider matching, and case coordination in one plan.",
};

export default function TailoredWellnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Personalized Wellness"
        title="Tailored Wellness Program"
        intro="A private, individually structured wellness service. Schedule, focus, location, intensity, and team are customized, and all work is one-on-one."
        primaryCta={{ label: "Contact Us Today", href: "/contact-us/" }}
      />

      <FeatureCards
        surface
        eyebrow="How it works"
        heading="How the Tailored Wellness Program works"
        intro="A coordination and mentoring layer around recovery, not a clinical treatment program. When clinical care is needed, we match licensed providers."
        features={[
          { kicker: "01", title: "Lifestyle Mentoring", body: "Daily routines, accountability, practical life skills, and real-world guidance." },
          { kicker: "02", title: "Clinical Provider Matching", body: "Licensed professionals suited to your needs, introduced when clinical care is part of the plan." },
          { kicker: "03", title: "Case Coordination", body: "Mentors, providers, and family aligned on one plan, with a single point of contact." },
        ]}
      />

      <FeatureCards
        eyebrow="Tailored Wellness Program (TWP)"
        heading="A client-centered alternative to PHP, IOP, and OP"
        intro="Delivered at three levels of support."
        features={[
          { kicker: "CWS", title: "Comprehensive Wellness Support", body: "Higher-frequency mentoring, tailored clinical matching, and ongoing case coordination, for a more immersive experience." },
          { kicker: "IWS", title: "Intensive Wellness Support", body: "A moderate, flexible mentoring cadence with the same matching and coordination, for balancing recovery with daily responsibilities." },
          { kicker: "ILS", title: "Integrative Longevity Support", body: "Fully customizable and designed with each family, for long-term wellness." },
        ]}
      />

      <Prose
        surface
        eyebrow="How we tailor"
        heading="How we tailor your program"
        bullets={[
          "Assess: sleep, schedule, environment, supports, communication patterns, and friction points.",
          "Plan: focus areas, contact methods, milestones, team, and escalation paths. You see the plan before work starts.",
          "Review: regular check-ins, with the level and focus adjusted as you progress.",
        ]}
      />

      <Prose
        heading="What every program includes"
        bullets={[
          "Lifestyle mentoring: routines, accountability, and daily-life skills.",
          "Clinical provider matching: licensed clinicians when they are part of the plan.",
          "Case coordination: a single point of contact.",
          "Family communication: updates at a level the family is comfortable with.",
          "Progress reviews: regular check-ins and plan adjustments.",
        ]}
      />

      <Prose
        surface
        eyebrow="Sample week"
        heading="What a week can look like"
        paragraphs={[
          "An example only: two to five touchpoints a week, in person or remote. Clinician appointments stay in the week and are supported, not replaced. Brief routine check-ins, plus coordination touchpoints, including family if you choose.",
        ]}
      />

      <FitCheck
        good={[
          "You want flexibility rather than a fixed program schedule.",
          "You need coordination among multiple providers.",
          "You are transitioning down from a higher level of care.",
          "Your family wants a single point of contact.",
        ]}
        notRight={[
          "There is an active emergency (call 911 first).",
          "The person refuses to engage (Crisis Interventions is the best first step).",
          "Only standalone clinical treatment is needed.",
        ]}
      />

      <ComparisonTable
        eyebrow="Comparison"
        heading="Tailored Wellness vs. Standard Outpatient"
        colA="Tailored Wellness Program"
        colB="Outpatient Treatment"
        rows={[
          { label: "Provider", a: "Dedicated lifestyle mentor and small team", b: "Licensed psychologist, LMFT, LCSW, or psychiatrist" },
          { label: "Focus", a: "Daily living, accountability, provider coordination", b: "Diagnosis, clinical treatment, trauma, emotional regulation" },
          { label: "Setting", a: "Home, community, in person, video, or mixed", b: "Clinical office, typically 50-minute sessions" },
          { label: "Approach", a: "Personalized and plan-based", b: "Evidence-based (CBT, DBT, EMDR, MI)" },
          { label: "Frequency", a: "Daily to weekly, flexible", b: "Typically weekly or biweekly, fixed" },
          { label: "Best for", a: "Post-treatment transitions and lifestyle restructuring", b: "Diagnosed conditions, trauma, co-occurring disorders" },
          { label: "Insurance", a: "Typically private pay", b: "Often covered" },
        ]}
      />

      <Steps
        surface
        eyebrow="Getting started"
        heading="What to expect when you reach out"
        intro="Steps vary by family. We typically respond within a day or two."
        steps={[
          { title: "Consultation", body: "Call or submit a request, and we help you decide whether the program fits." },
          { title: "Personalized assessment", body: "We review goals, circumstances, and clinical involvement, then recommend a starting level." },
          { title: "Provider matching and plan design", body: "We match licensed providers as needed and design the plan around mentoring frequency and coordination." },
          { title: "Active support begins", body: "Mentoring and coordination start on schedule." },
          { title: "Ongoing review and adjustment", body: "Regular reviews, with the level and focus adjusted over time." },
        ]}
      />

      <FAQ
        items={[
          { q: "What is the Tailored Wellness Program?", a: "A personalized recovery support model at three levels, combining mentoring, provider matching, and coordination." },
          { q: "Is it clinical treatment?", a: "No. Clinical care comes from matched licensed providers." },
          { q: "How is it different from PHP, IOP, or outpatient?", a: "It is flexible and personalized rather than built on fixed schedules." },
          { q: "What are the three levels?", a: "CWS, IWS, and ILS, which differ in mentoring frequency and customization." },
          { q: "What is lifestyle mentoring?", a: "Real-world guidance on routines, accountability, and life skills. It is not diagnosis or therapy." },
          { q: "Do you coordinate with my therapist or doctor?", a: "Yes. Coordination is core to the program." },
          { q: "Do you serve clients outside Los Angeles?", a: "We are based in LA, and some elements can be coordinated flexibly." },
          { q: "How do we get started?", a: "Call us or submit a request through the contact page." },
        ]}
      />

      <Prose
        surface
        paragraphs={["Based in Los Angeles? See our dedicated local page."]}
      >
        <Link href="/los-angeles/recovery-mentoring/" className="mt-2 inline-block text-sm font-semibold text-brand">
          Recovery Mentoring in Los Angeles →
        </Link>
      </Prose>
      <CTABand />
    </>
  );
}
