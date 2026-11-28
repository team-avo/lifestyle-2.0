import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { FAQ } from "@/components/sections/FAQ";
import { Credentials } from "@/components/sections/SharedBlocks";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "Recovery Mentor or Sober Companion: Which Does Your Family Need?",
  description:
    "What a recovery mentor, sober companion, sponsor, and therapist each are, and when each fits after treatment.",
};

export default function MentorVsCompanionPage() {
  return (
    <>
      <PageHero
        eyebrow="Post-treatment support"
        title="Recovery Mentor or Sober Companion?"
        intro="Families hear several labels: recovery mentor, sober companion, sponsor, therapist. They mean different things. Here is what each is, and when each fits."
        primaryCta={{ label: "Contact Us", href: "/contact-us/" }}
      />

      <FeatureCards
        surface
        heading="The four roles families get confused between"
        columns={4}
        features={[
          { title: "Therapist", body: "A licensed clinician treating someone who has agreed to attend." },
          { title: "Sponsor", body: "An unpaid peer in a mutual support fellowship." },
          { title: "Recovery mentor", body: "Structured, practical support after treatment ends." },
          { title: "Sober companion", body: "Closer presence for a defined, higher-risk window, such as a return home, a trip, or an event." },
        ]}
      />

      <Prose
        heading="How to work out which fits"
        paragraphs={["The useful test is risk and structure, not the label. Ask:"]}
        bullets={[
          "How high is the risk in the coming weeks?",
          "Is the problem knowing what to do, or doing it unwatched?",
          "Is there a defined window, or an ongoing need?",
          "What clinical care is already in place?",
        ]}
      >
        <p className="mt-5 text-muted">
          The answer may be a mentor, a companion, both in sequence, or neither.
        </p>
      </Prose>

      <Credentials />

      <Prose
        heading="What neither one replaces"
        paragraphs={[
          "Neither replaces clinical treatment or guarantees an outcome. Both sit alongside clinical care and family support, and the right answer often involves more than one, in sequence.",
        ]}
      />

      <Prose
        surface
        heading="How to decide, in one call"
        paragraphs={[
          "The first call is a confidential conversation about home life and what support would help. It ends with a clear recommendation.",
        ]}
      />

      <TalkToMe />

      <FAQ
        items={[
          { q: "Is a recovery mentor the same as a sponsor?", a: "No. A sponsor is an unpaid fellowship peer; a mentor is a paid, structured role." },
          { q: "Do I need one if they have a therapist?", a: "Possibly. A therapist works in sessions; a mentor works in the gaps between them." },
          { q: "How long does support usually last?", a: "It varies. We will talk it through on a call." },
          { q: "Can you arrange this after treatment elsewhere?", a: "Yes. Mentoring often begins after a program run by someone else." },
          { q: "Which one fits our situation?", a: "It depends on risk, structure, and existing care. A first call is the fastest way to decide." },
        ]}
      />
    </>
  );
}
