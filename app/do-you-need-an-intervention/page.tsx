import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { Prose } from "@/components/sections/Prose";
import { FitCheck, HelpfulResources } from "@/components/sections/SharedBlocks";
import { TalkToMe } from "@/components/sections/TalkToMe";
import { Assessment } from "@/components/sections/Assessment";
import { Section, Eyebrow } from "@/components/primitives/Section";
import { dnaBands, dnaQuestions } from "@/data/assessments";

export const metadata: Metadata = {
  title: "Do You Need an Intervention?",
  description:
    "A confidential five-minute family assessment that helps you notice patterns and see where things stand.",
};

export default function DoYouNeedPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Assessment"
        title="Do You Need an Intervention?"
        intro="A confidential family assessment that helps you notice patterns. It takes about five minutes, and your answers stay in your browser. I only ask for your name and email at the end."
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
            Think back over the last three months and choose the answer that fits best for each.
          </p>
          <div className="mt-10">
            <Assessment questions={dnaQuestions} bands={dnaBands} formName="Do You Need an Intervention" />
          </div>
        </div>
      </Section>

      <Prose
        surface
        heading="If safety is a concern right now"
        paragraphs={[
          "If you or someone you know is in immediate danger, call 911. The 988 Suicide and Crisis Lifeline is available by call or text, 24 hours a day. The SAMHSA National Helpline offers free, confidential support at 1-800-662-4357.",
        ]}
      />
      <Prose
        heading="If this feels familiar"
        paragraphs={[
          "You don’t need to have all the answers before reaching out. If any of this feels true for your family, I’m glad to talk it through with you. Costs and next steps come up naturally in that first conversation.",
        ]}
      />

      <FAQ
        items={[
          { q: "Is this assessment really confidential?", a: "Yes. Your answers stay in your browser and are never sent anywhere. I only see the name and email you choose to share at the end." },
          { q: "What happens after I get my results?", a: "You’ll see your results right on this page. I may also follow up by email with a few helpful resources." },
          { q: "Will someone call me after I submit the form?", a: "No unwanted calls. I’ll follow up by email, and you can reach out to me whenever you’re ready." },
          { q: "Is my information kept private?", a: "Yes. I never share your information, and I keep the form simple on purpose. Please avoid entering any details about your loved one’s health." },
          { q: "Do you work with families outside Los Angeles?", a: "I’m based in Los Angeles and work with families across Southern California, and nationally when needed." },
          { q: "How is my score calculated?", a: "Each of the 18 questions is worth up to 3 points. I add them up and match your total to one of four ranges, from Early Concern to Crisis Level." },
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
