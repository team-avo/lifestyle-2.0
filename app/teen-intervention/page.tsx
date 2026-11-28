import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FAQ } from "@/components/sections/FAQ";
import { Credentials } from "@/components/sections/SharedBlocks";
import { EmergencyBlock } from "@/components/sections/EmergencyBlock";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "Teen and Young Adult Intervention",
  description:
    "Help for parents of a teen or young adult who is using substances or in crisis: what changes under 18, and what to do over 18.",
};

export default function TeenInterventionPage() {
  return (
    <>
      <PageHero
        eyebrow="Teen & Young Adult"
        title="Teen and Young Adult Intervention"
        intro="Help for parents of a teen or young adult who is using substances or in crisis: what changes under 18, and what to do over 18."
        primaryCta={{ label: "Contact Us", href: "/contact-us/" }}
      />

      <Prose
        surface
        eyebrow="If your child is under eighteen"
        heading="You have legal authority, and that is the main practical difference"
        paragraphs={[
          "Parents can arrange an assessment and consent to treatment without the teen's agreement. California's section 5585 covers involuntary psychiatric holds for minors, with criteria similar to the adult 5150.",
          "Acting on that authority beats waiting. Authority gets the appointment, but it does not get the teen's cooperation, and cooperation is what makes treatment hold.",
        ]}
      />

      <Prose
        eyebrow="If your child is over eighteen"
        heading="The legal picture reverses"
        paragraphs={[
          "Parents can no longer consent to treatment, access records, or usually compel an adult to do anything. They still control money, housing, access, relationship, and the family's collective position, though most families use these levers inconsistently.",
        ]}
      >
        <Link href="/who-we-help/parents-adult-children/" className="mt-5 inline-block text-sm font-semibold text-brand">
          For Parents of Adult Children →
        </Link>
      </Prose>

      <Prose
        surface
        eyebrow="The specific problem with young adults"
        heading="Legally independent, still financially dependent"
        paragraphs={[
          "Roughly ages 18 to 25 is where families most often lose their grip: the family keeps paying while having no say. The useful work is deciding what you fund and on what conditions, not trying to regain authority.",
        ]}
      />

      <Prose
        eyebrow="What I would not do"
        heading="Three things to avoid"
        bullets={[
          "Do not send a teen to a program you have not thoroughly vetted. Ask about licensing, accreditation, staff credentials, and crisis procedure.",
          "Do not involve the whole extended family. A large gathering feels like humiliation to a teen, and humiliation produces secrecy.",
          "Do not make it about school performance. It is usually a parent's first concern and the least persuasive thing for the teen.",
        ]}
      />

      <Credentials />

      <Prose
        eyebrow="What tends to work"
        heading="Fewer people, specific observations, concrete asks"
        bullets={[
          "Fewer people in the room.",
          "A sober, unhurried moment.",
          "Describe specific things you have seen rather than labels.",
          "Ask for something concrete, such as one appointment, not a commitment to change.",
        ]}
        paragraphs={["Then stay quiet and let the answer come. A small ask works better than a sweeping one."]}
      />

      <EmergencyBlock />
      <TalkToMe />

      <FAQ
        items={[
          { q: "Can I force my teenager into treatment?", a: "Under 18 you can generally consent on their behalf, but a child who feels ambushed will dig in." },
          { q: "What changes when they turn eighteen?", a: "Almost everything legally. You can no longer consent or access records, but you keep money, housing, access, and relationship leverage." },
          { q: "Should the whole family be in the room?", a: "Usually not for a teen. Fewer people works better." },
          { q: "What is a 5585 hold?", a: "The California provision for involuntary psychiatric holds for minors, with criteria similar to the adult 5150." },
          { q: "My child is 19 and lives at home. What are my options?", a: "You have no legal authority, but you control housing and money, which is usually where the conversation starts." },
          { q: "How do I choose a program for a teen?", a: "Ask about licensing, accreditation, staff credentials, and crisis procedure. Be wary of heavy marketing to worried parents." },
        ]}
      />
    </>
  );
}
