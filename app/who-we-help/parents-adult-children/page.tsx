import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FAQ } from "@/components/sections/FAQ";
import { Credentials } from "@/components/sections/SharedBlocks";
import { EmergencyBlock } from "@/components/sections/EmergencyBlock";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "Help for Parents of an Addicted Adult Child | Los Angeles",
  description:
    "What parents of an adult child can do once they no longer have legal authority: helping versus enabling, and when to bring someone in.",
};

export default function ParentsAdultChildrenPage() {
  return (
    <>
      <PageHero
        eyebrow="Support for Parents"
        title="For Parents of Adult Children"
        intro="Parents of adult children still hold influence over money, housing, access, relationships, and the family's collective position. This page covers what helps, what enables, and when a structured intervention becomes the next step."
        primaryCta={{ label: "Contact Us", href: "/contact-us/" }}
      />

      <Prose
        surface
        heading="The gap nobody prepares you for"
        paragraphs={[
          "Enabling means removing a consequence so no step toward change is required. Helping means supporting a step the person takes themselves. The test: does this make it easier for them to get better, or easier to stay the same?",
          "You still have the instincts you had when your child was seven, but at thirty those instincts are no longer legally available. Parents cannot consent to treatment, access records, or usually compel action.",
        ]}
      />

      <Prose
        heading="The question underneath the question"
        paragraphs={[
          "Parents ask how to get their adult child into treatment. The more useful question is: what does my adult child currently not have to go without? Housing, bills, legal fees, and consequences are often absorbed by the family. That is a natural response, and often exactly what keeps things stable.",
        ]}
      />

      <Prose
        surface
        eyebrow="Helping against enabling"
        heading="The line that decides most cases"
        bullets={[
          "Helping: paying for an assessment they booked, or driving them to it.",
          "Enabling: paying a fine, making an excuse, or replacing what was sold.",
        ]}
      />

      <Prose
        eyebrow="Getting both parents aligned"
        heading="Where most families come undone"
        paragraphs={[
          "If one parent holds a limit and the other quietly funds around it, the limit does not exist. Divorced or separated parents, and parents who disagree about how serious it is, face this most acutely. Agree between yourselves first, and if you cannot agree, get help agreeing before you intervene.",
        ]}
      />

      <Credentials />

      <Prose
        eyebrow="When conversations have run out"
        heading="How to talk about it, and when to bring someone in"
        paragraphs={[
          "Talk when you are sober, rested, and unhurried. Describe rather than diagnose, speak about yourself, ask for something specific, then be quiet and let the answer come.",
          "Most parents reach the end of what they can say alone. A structured family intervention is a planned, prepared meeting where the people closest present a united request for help, with treatment arranged in advance so the person can act the same day. A single parent is easy to dismiss; a prepared family is not.",
        ]}
      />

      <EmergencyBlock />
      <TalkToMe />

      <FAQ
        items={[
          { q: "Can I force my adult child into rehab?", a: "Generally no. California's involuntary-hold provisions are narrow, and substance use alone rarely meets them." },
          { q: "Should I let them live at home?", a: "There is no universal answer, but conditions must be clear, agreed, and enforced." },
          { q: "Is giving money always enabling?", a: "No. Pay the provider directly, not the person." },
          { q: "What if my partner and I disagree?", a: "Resolve that first." },
          { q: "How long do I wait?", a: "Waiting for 'rock bottom' is one of the most damaging ideas families are given." },
        ]}
      />
    </>
  );
}
