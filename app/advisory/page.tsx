import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Experts in Intervention & Recovery",
  description:
    "Non-clinical advisory and oversight for families and professionals facing complex mental health and substance use challenges.",
};

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Where Care Meets Responsibility."
        title="Lifestyle Interventions Advisory"
        intro="Non-clinical advisory and oversight for families and professionals dealing with complex mental health and substance use challenges."
        primaryCta={{ label: "Contact Us Today", href: "/contact-us/" }}
      />

      <FeatureCards
        surface
        eyebrow="Advisory Services"
        heading="Guidance and structure, not therapy or medical care"
        features={[
          {
            kicker: "01",
            title: "Crisis Consultation & Oversight",
            body: "Experienced oversight when a situation grows complex: assessing the situation, recommending next steps, and managing the moving parts with strategy, coordination, and accountability.",
          },
          {
            kicker: "02",
            title: "Long-Term Coordination",
            body: "Ongoing oversight that ensures continuity of care, aligned communication across providers, and sustainable progress.",
          },
          {
            kicker: "03",
            title: "Treatment Placement Strategy",
            body: "Curated treatment recommendations, with admissions and transition management for the best possible fit.",
          },
        ]}
      />

      <FeatureCards
        eyebrow="Advisory Engagement Framework"
        heading="Choose the level of engagement that fits"
        features={[
          {
            title: "Crisis Engagement",
            body: "Stabilization planning, crisis strategy, safe transitions, and recommendations within 72 hours.",
          },
          {
            title: "Ongoing Advisory",
            body: "Long-term oversight, monthly updates, structured accountability, and defensible reporting.",
          },
          {
            title: "Comprehensive Oversight",
            body: "Crisis plus ongoing advisory, with governance frameworks, annual reviews, and integrated professional coordination.",
          },
        ]}
      />
      <CTABand />
    </>
  );
}
