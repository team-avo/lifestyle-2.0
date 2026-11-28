import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TalkToMe } from "@/components/sections/TalkToMe";
import { HelpfulResources } from "@/components/sections/SharedBlocks";
import { Section, Eyebrow } from "@/components/primitives/Section";

export const metadata: Metadata = {
  title: "Are You Carrying Too Much? A Family Assessment",
  description:
    "A short, confidential assessment for family members carrying the weight of a loved one's substance use or mental health crisis.",
};

export default function FamilyAssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Family Assessment"
        title="Are You Carrying Too Much?"
        intro="A short, confidential assessment for the family member holding everything together while a loved one struggles."
        primaryCta={{ label: "Start the Assessment", href: "#assessment" }}
      />
      <Section>
        <div id="assessment" className="scroll-mt-28">
          <Eyebrow>The assessment</Eyebrow>
          {/* TODO(Phase 2): port questions + scoring from the live tool. */}
          <div className="mt-6 rounded-card border border-dashed border-line bg-surface p-10 text-center">
            <p className="text-sm text-muted">
              The interactive assessment is being ported from the live site.
            </p>
          </div>
        </div>
      </Section>
      <TalkToMe />
      <HelpfulResources />
    </>
  );
}
