import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Intervention Models Explained: Johnson vs Invitational",
  description:
    "A guide for families considering an intervention: the main intervention models and how to choose between them.",
};

export default function InterventionModelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar Guide"
        title="Intervention Models: A Guide to How Family Interventions Work"
        intro="For families considering an intervention: the main models, how they differ, and how to choose."
      />

      <Prose
        surface
        eyebrow="Intervention Models"
        heading="What are intervention models?"
        paragraphs={[
          "An intervention model is a structured method for guiding a loved one toward treatment. Models differ in how direct they are, whether the person knows in advance, and how involved the family is. There is no single best model.",
        ]}
      />

      <Prose
        eyebrow="Why it matters"
        heading="Why the right model matters"
        paragraphs={[
          "Every model shares the same goal: acceptance of treatment. Confrontational approaches can break through denial but can harm trust. Invitational approaches are gentler but can move more slowly. A trained interventionist helps you weigh that tradeoff.",
        ]}
      />

      <FeatureCards
        surface
        eyebrow="The models"
        heading="The main intervention models"
        columns={2}
        features={[
          {
            kicker: "01",
            title: "The Johnson Model",
            body: "The original and most familiar approach, developed by Dr. Vernon Johnson in the 1960s. A direct, planned conversation, usually without the person's prior knowledge. Best when denial is strong and time is short.",
            href: "/intervention-models/johnson/",
            linkLabel: "Read the Johnson Model guide",
          },
          {
            kicker: "02",
            title: "Invitational Intervention",
            body: "Non-confrontational. The person is invited from the start, and the process relies on honesty, care, and existing relationships.",
          },
        ]}
      />

      <ComparisonTable
        eyebrow="At a glance"
        heading="Intervention models at a glance"
        intro="This compares approach and structure, not success rates."
        colA="Johnson"
        colB="Invitational"
        rows={[
          { label: "Approach", a: "Direct, confrontational", b: "Non-confrontational" },
          { label: "Awareness", a: "Usually a surprise", b: "Invited from the start" },
          { label: "Structure", a: "Single planned meeting", b: "Flexible, relationship-based" },
          { label: "Best use", a: "Strong denial, urgent cases", b: "Families wanting to avoid confrontation" },
        ]}
      />

      <Prose
        surface
        eyebrow="Choosing"
        heading="How to choose the right intervention model"
        bullets={[
          "How strong is the denial?",
          "How urgent is the situation?",
          "How stable are the relationships involved?",
          "Would an invitational approach better protect trust?",
        ]}
        paragraphs={[
          "There is no formula. Talk it through with a professional; many interventionists blend models.",
        ]}
      />

      <Prose
        eyebrow="Before placement"
        heading="Ask the right questions about treatment, too"
        paragraphs={[
          "Choosing the treatment center matters as much as choosing the model. Our free family guide covers the questions to ask.",
        ]}
      >
        <div className="mt-6">
          <Button href="/free-treatment-center-guide/" variant="outline">Get the Free Guide</Button>
        </div>
      </Prose>

      <Prose
        surface
        eyebrow="Why us"
        heading="Planning an intervention in Los Angeles?"
        paragraphs={[
          "We help families understand the models and plan the conversation, alongside our Crisis Interventions and Family Support Services.",
        ]}
      >
        <div className="mt-4 flex gap-6 text-sm font-semibold">
          <Link href="/crisis-interventions/" className="text-brand">Crisis Interventions →</Link>
          <Link href="/family-support-services/" className="text-brand">Family Support Services →</Link>
        </div>
      </Prose>

      <FAQ
        items={[
          { q: "What are the main intervention models?", a: "The Johnson Model (direct, usually without prior knowledge) and the Invitational Model (non-confrontational, involving the person from the start)." },
          { q: "How do they differ?", a: "A single planned confrontation versus involvement from the beginning." },
          { q: "Is a confrontational intervention a good idea?", a: "It can help when denial is strong and time is short, though families can find it hard to follow through." },
          { q: "Do I need a professional?", a: "Strongly recommended for any model." },
          { q: "Can models be combined?", a: "Yes." },
          { q: "What happens after they agree?", a: "They enter treatment. Choosing the center matters, and our free guide can help." },
          { q: "How do we get started?", a: "Call us or submit a request." },
        ]}
      />
      <CTABand />
    </>
  );
}
