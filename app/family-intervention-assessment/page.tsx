import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { FitCheck, HelpfulResources } from "@/components/sections/SharedBlocks";
import { TalkToMe } from "@/components/sections/TalkToMe";
import { Assessment } from "@/components/sections/Assessment";
import { Section, Eyebrow } from "@/components/primitives/Section";
import { carryingBands, carryingQuestions } from "@/data/assessments";

export const metadata: Metadata = {
  title: "Are You Carrying Too Much? A Confidential Family Assessment",
  description:
    "A confidential five-minute assessment to help you see what you have been carrying while someone you love is struggling.",
};

export default function FamilyAssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="A Family Assessment"
        title="Are You Carrying Too Much?"
        intro="When someone you love is struggling, it is easy to take on more and more without noticing. I built this assessment to help you see what you have actually been carrying. It takes about five minutes. Your answers stay in your browser."
        primaryCta={{ label: "Start the assessment", href: "#assessment" }}
      />

      <FitCheck
        good={[
          "A parent, spouse or family member supporting someone who is struggling.",
          "Wondering where support ends and enabling begins.",
          "Tired, and unsure whether that is reasonable.",
          "Thinking about changing something, but not sure what.",
        ]}
        notRight={[
          "Someone is in immediate danger.",
          "There is a medical or psychiatric emergency unfolding.",
          "There is violence, or a threat of violence, in the home.",
        ]}
      />

      <Section>
        <div id="assessment" className="scroll-mt-28">
          <Eyebrow>The assessment</Eyebrow>
          <h2 className="text-3xl sm:text-4xl text-ink">18 questions, about five minutes</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Think back over the last three months. For each one, choose whichever answer fits
            best. There are no right answers, and nothing here is a judgement of you.
          </p>
          <div className="mt-10">
            <Assessment
              questions={carryingQuestions}
              bands={carryingBands}
              formName="Family Intervention Assessment"
              sendScore
              storageKey="li_carrying_v1"
              showTally
              printable
            />
          </div>
        </div>
      </Section>

      <FAQ
        items={[
          { q: "Is this assessment really confidential?", a: "Yes. Your answers are stored in your own browser on your own device. They are not sent to me, and I cannot see them unless you choose to share them." },
          { q: "How is my result calculated?", a: "Each answer is worth a simple number: never is 0, rarely is 1, often is 2, and frequently is 3. Those numbers are added up across the 18 questions, giving a total between 0 and 54, which falls into one of four ranges. It is a straightforward frequency count of things you told me, not a clinical or diagnostic measure, and there is no validated research instrument behind it." },
          { q: "Does a high result mean I have done something wrong?", a: "No. Almost everything on this list is something a loving person does for someone they are worried about. A high total usually means you have been holding a great deal on your own for a long time. It is a description of your situation, not a judgement of you." },
          { q: "What happens after I get my result?", a: "Nothing automatic. You will see your result and some suggestions on the page. You can print it, keep it, or close the page. Whether you contact me is entirely your decision." },
          { q: "Will someone call me after I take it?", a: "Only if you ask. There is no form to complete in order to see your result, and I do not receive your answers." },
          { q: "Is this a diagnosis?", a: "No. This assessment does not diagnose any medical or mental health condition, in you or in anyone else, and it is not a replacement for evaluation by a licensed professional." },
          { q: "Do you work with families outside Los Angeles?", a: "Yes. I am based in Los Angeles and work with families across the United States, travelling where that is the right approach and coordinating remotely where it is not." },
        ]}
      />
      <TalkToMe />
      <HelpfulResources />
    </>
  );
}
