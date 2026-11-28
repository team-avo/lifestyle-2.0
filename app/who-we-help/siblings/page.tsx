import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FAQ } from "@/components/sections/FAQ";
import { Credentials } from "@/components/sections/SharedBlocks";
import { EmergencyBlock } from "@/components/sections/EmergencyBlock";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "Support for Siblings of an Addict",
  description:
    "What siblings of someone with an addiction carry, what they can reasonably do, and what they should not take on.",
};

export default function SiblingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Support for Siblings"
        title="For Siblings"
        intro="Siblings often become the quietly functional ones while the family focuses elsewhere. This page covers what siblings carry, what they can reasonably do, and what they should not take on."
        primaryCta={{ label: "Contact Us", href: "/contact-us/" }}
      />

      <Prose
        surface
        eyebrow="The pattern I see"
        heading="Nobody asks the brother how he is doing"
        paragraphs={[
          "Parentification is when a child, or later an adult sibling, absorbs the parenting or emergency-handling role the situation leaves open. It is easy to slide into and hard to notice.",
          "Parents are in crisis, one child is the focus, and the others become quietly functional and unattended.",
        ]}
      />

      <Prose
        eyebrow="What siblings carry"
        heading="The attention gap, the roles that harden, the fear"
        bullets={[
          "Family resources go where the emergency is, and siblings learn not to add to the load.",
          "One child becomes the achiever who causes no trouble; another becomes invisible.",
          "Guilt runs both ways: for being all right, and for being angry at someone unwell.",
          "Fear about your own risk is common, especially with a family history.",
          "Grief for someone who is still alive is real, and rarely named.",
        ]}
      />

      <Credentials />

      <Prose
        eyebrow="The anger nobody permits"
        heading="Anger, and what siblings can reasonably do"
        paragraphs={[
          "Siblings are often furious and feel they have no right to be, over missed birthdays, ruined holidays, and absent parents. Anger and love can coexist.",
          "You may take part in an intervention if you choose, and siblings are often the most credible voice because they are peers. Say what you have experienced, set your own limits, and refuse the go-between role. Do not take responsibility for the outcome, become a second parent, or compensate by being the easy child. Protecting your own household is not disloyalty.",
        ]}
      />

      <EmergencyBlock />
      <TalkToMe />

      <FAQ
        items={[
          { q: "Should I take part in my sibling's intervention?", a: "It is worth considering, and it should be your choice." },
          { q: "Is it normal to feel angry?", a: "Yes." },
          { q: "My parents expect me to manage my sibling. What do I do?", a: "Say clearly what you will and will not take on." },
          { q: "Am I more likely to develop an addiction?", a: "Family history is one recognized risk factor among several. Speak to a professional if you are concerned." },
          { q: "Is there support for siblings?", a: "Yes. Al-Anon and Nar-Anon are open to siblings." },
        ]}
      />
    </>
  );
}
