import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FAQ } from "@/components/sections/FAQ";
import { FitCheck } from "@/components/sections/SharedBlocks";
import { SignalChecklist } from "@/components/sections/SignalChecklist";
import { TalkToMe } from "@/components/sections/TalkToMe";
import { Section, Eyebrow } from "@/components/primitives/Section";

export const metadata: Metadata = {
  title: "When to Stage an Intervention: A 10-Signal Checklist",
  description:
    "Ten signals, and what they mean for your family. A three-minute checklist on whether an intervention is the right tool now.",
};

export default function WhenToStagePage() {
  return (
    <>
      <PageHero
        eyebrow="A Family Checklist"
        title="When to Stage an Intervention"
        intro="Ten signals, and what they mean for your family. This checklist asks whether an intervention is the right tool for your family now. It takes about three minutes."
        primaryCta={{ label: "Start the checklist", href: "#checklist" }}
      />

      <FitCheck
        good={[
          "Wondering whether it is too early or too late.",
          "Weighing whether a formal intervention is overkill.",
          "Hearing different opinions from family members.",
          "Wanting something concrete for the conversation.",
        ]}
        notRight={[
          "Someone is in immediate danger.",
          "An emergency is unfolding.",
          "There is violence or a threat of violence in the home.",
        ]}
      />

      <Section>
        <Eyebrow>The checklist</Eyebrow>
        <h2 className="text-3xl sm:text-4xl text-ink">Ten signals, about three minutes</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Answer only what you are reasonably sure about. &ldquo;Not sure&rdquo; is a fine answer.
        </p>
        <div className="mt-10">
          <SignalChecklist />
        </div>
      </Section>

      <Prose
        surface
        heading="When an intervention is not the right step"
        bullets={[
          "Immediate danger or a medical or psychiatric emergency: call 911.",
          "Violence, a threat, or a weapon: leave and get help.",
          "The person is a minor: different options apply.",
          "They are already asking for help: help them get it.",
          "Nobody but you sees a problem yet: start with one other person.",
          "There has been no honest, direct conversation yet: start there.",
        ]}
      />

      <FAQ
        items={[
          { q: "How is this different from the 18-question assessment?", a: "The assessment measures what has been happening. This checklist measures family readiness. Doing both is recommended." },
          { q: "How is my result calculated?", a: "It is a count of the signals you marked yes." },
          { q: "What if I score low but I am still worried?", a: "Trust that. A short call costs nothing." },
          { q: "Is this confidential?", a: "Yes. Your answers save on this device only." },
          { q: "Will someone call me after I use this?", a: "No." },
        ]}
      />

      <Section className="bg-surface">
        <Eyebrow>More assessments</Eyebrow>
        <div className="mt-4 flex flex-wrap gap-6 text-sm font-semibold">
          <Link href="/do-you-need-an-intervention/" className="text-brand">Do You Need an Intervention? →</Link>
          <Link href="/family-intervention-assessment/" className="text-brand">Are You Carrying Too Much? →</Link>
        </div>
      </Section>
      <TalkToMe heading="Not sure what your result means?" body="About twenty minutes on the phone is better than another month of wondering." />
    </>
  );
}
