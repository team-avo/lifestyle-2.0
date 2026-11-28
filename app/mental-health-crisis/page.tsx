import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FAQ } from "@/components/sections/FAQ";
import { Credentials } from "@/components/sections/SharedBlocks";
import { EmergencyBlock } from "@/components/sections/EmergencyBlock";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "Mental Health Crisis Support for Families",
  description:
    "What to do when a family member is in a mental health crisis in Los Angeles: who to call, what a 5150 hold is, and when a structured intervention helps.",
};

export default function MentalHealthCrisisPage() {
  return (
    <>
      <PageHero
        eyebrow="Crisis Support"
        title="Mental Health Crisis Support for Families"
        intro="What to do when a family member is in a mental health crisis in Los Angeles: who to call, what a 5150 hold is, and when a structured intervention helps."
        primaryCta={{ label: "Contact Us", href: "/contact-us/" }}
      />

      <Prose
        surface
        eyebrow="If this is happening right now"
        heading="Who to call, in order"
        bullets={[
          "Immediate danger to life: call 911. Say it is a mental health crisis, and describe what you have seen rather than what you fear.",
          "Not immediately life-threatening: call or text 988, the Suicide and Crisis Lifeline. Confidential, any hour, no cost.",
          "Los Angeles County: the DMH ACCESS line, 800-854-7771, can dispatch a mobile crisis team, often a better fit than a patrol response.",
        ]}
      />

      <Prose
        eyebrow="What families get wrong about holds"
        heading="Three things that surprise almost every family"
        bullets={[
          "A 5150 is a 72-hour involuntary psychiatric hold under California law, for someone who is a danger to self, a danger to others, or gravely disabled due to a mental health disorder.",
          "Families cannot place one themselves. Only peace officers, designated county mental health professionals, and certain approved facility staff can.",
          "Substance use alone usually does not qualify, because the criteria require a mental health disorder. And a hold is an evaluation, not a treatment plan.",
        ]}
      />

      <Prose
        surface
        eyebrow="When it is both"
        heading="Mental health and substance use together"
        paragraphs={[
          "Many families face a mental health condition and substance use at the same time. They often get bounced between services, and treating one side alone frequently does not hold.",
        ]}
      />

      <Prose
        eyebrow="What a structured intervention does here"
        heading="Interventions work on patterns, not on emergencies"
        paragraphs={[
          "An intervention applies to mental health too: a planned, prepared conversation where those closest present a united request for help. The details change with psychosis, mania, or severe depression, and timing matters more.",
          "For acute psychosis, active suicidality, or a medical emergency, a family meeting is the wrong tool. Use 911, 988, or a mobile crisis team first. The planned conversation comes later, if the pattern needs to change.",
        ]}
      />

      <Credentials />
      <EmergencyBlock />
      <TalkToMe />

      <FAQ
        items={[
          { q: "What is a 5150 hold?", a: "A 72-hour involuntary psychiatric hold under California law, for someone who is a danger to self, a danger to others, or gravely disabled due to a mental health disorder." },
          { q: "Can I have my family member placed on a hold?", a: "Not directly. You can request an evaluation and describe what you have observed; the responding professional decides." },
          { q: "Can a hold force someone into addiction treatment?", a: "No. It is a psychiatric provision, and substance use alone rarely meets the criteria." },
          { q: "What if they refuse help but are not in danger?", a: "This is the most common situation, and where a planned conversation usually fits. Legal options in California are narrow." },
          { q: "Do you work with mental health crises, not just addiction?", a: "Yes. We work with families facing substance use, alcohol concerns, and mental health struggles." },
          { q: "What is the ACCESS line?", a: "The LA County Department of Mental Health line, 800-854-7771, which can dispatch a mobile crisis team." },
        ]}
      />
    </>
  );
}
