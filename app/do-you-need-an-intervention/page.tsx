import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { FitCheck, HelpfulResources } from "@/components/sections/SharedBlocks";
import { TalkToMe } from "@/components/sections/TalkToMe";
import { Section, Eyebrow } from "@/components/primitives/Section";

export const metadata: Metadata = {
  title: "Do You Need an Intervention?",
  description:
    "A confidential five-minute family assessment that helps you notice patterns and see where things stand.",
};

const tiers = [
  { name: "Early Concern", body: "A common early stage. Stay close, and recheck in a few months." },
  { name: "Emerging Pattern", body: "A direct conversation is worth having soon. A confidential call can help." },
  { name: "Significant Concern", body: "Your family may be dealing with more than it can manage alone. Talk through the options, including the Johnson and Invitational models." },
  { name: "Crisis Level", body: "Urgent. Reach out right away, and use safety resources first if there is risk." },
];

export default function DoYouNeedPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Assessment"
        title="Do You Need an Intervention?"
        intro="A confidential family assessment that helps you notice patterns. It takes about five minutes, and your answers stay in your browser. Name and email are asked for only at the end."
        primaryCta={{ label: "Start the Assessment", href: "#assessment" }}
      />

      <FitCheck
        good={[
          "A parent, spouse, or family member who is worried about someone.",
          "Trying to decide whether to speak up.",
          "Wanting a clearer way to talk to the rest of the family.",
        ]}
        notRight={["Someone is in immediate danger.", "An emergency is unfolding."]}
      />

      <Section>
        <div id="assessment" className="scroll-mt-28">
          <Eyebrow>The assessment</Eyebrow>
          <h2 className="text-3xl sm:text-4xl text-ink">18 questions, about five minutes</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Think back over the last three months and choose the answer that fits best. Each
            question is worth up to 3 points, and your total out of 54 matches one of four
            ranges.
          </p>
          {/* TODO(Phase 2): port the 18 questions + scoring from the live tool. */}
          <div className="mt-10 rounded-card border border-dashed border-line bg-surface p-10 text-center">
            <p className="text-sm text-muted">
              The interactive assessment is being ported from the live site.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <Eyebrow>Your results</Eyebrow>
        <h2 className="text-3xl text-ink">The four result ranges</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-card border border-line bg-bg p-6">
              <h3 className="text-lg text-ink">{t.name}</h3>
              <p className="mt-2 text-sm text-muted">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <FAQ
        items={[
          { q: "Is this assessment really confidential?", a: "Yes. Your answers stay in your browser." },
          { q: "What happens after I get my results?", a: "Nothing, unless you choose to reach out." },
          { q: "Will someone call me after I submit?", a: "No." },
          { q: "Do you work with families outside Los Angeles?", a: "Yes." },
          { q: "How is my score calculated?", a: "Each of the 18 questions is worth up to 3 points, and the total is matched to one of four ranges." },
        ]}
      />
      <TalkToMe heading="You don't have to figure this out alone." />
      <HelpfulResources />
      <Section>
        <p className="max-w-3xl text-xs text-muted">
          This assessment does not diagnose and does not replace a licensed evaluation.
        </p>
      </Section>
    </>
  );
}
