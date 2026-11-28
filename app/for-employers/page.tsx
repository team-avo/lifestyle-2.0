import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FAQ } from "@/components/sections/FAQ";
import { Credentials } from "@/components/sections/SharedBlocks";
import { EmergencyBlock } from "@/components/sections/EmergencyBlock";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "Workplace Intervention Services for Employers | Los Angeles",
  description:
    "Discreet workplace intervention for employers and HR when a senior employee's substance use affects the business.",
};

export default function ForEmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Employers & HR"
        title="For Employers and HR"
        intro="I work with employers, and with the family where appropriate, to plan a structured conversation with a senior employee whose substance use is affecting the business, and coordinate treatment placement so a next step is ready. This runs alongside your HR and legal process, not in place of it."
        primaryCta={{ label: "Contact Us Today", href: "/contact-us/" }}
      />

      <Prose
        surface
        heading="The position employers usually find themselves in"
        paragraphs={[
          "A workplace intervention is a planned, prepared conversation with a person whose substance use affects their work, paired with a coordinated route into treatment so a yes can be acted on the same day.",
          "Usually performance has slipped in a way that is noticeable but hard to document, colleagues are covering, and by the time HR is formally involved the options have narrowed to process.",
        ]}
      />

      <Prose
        heading="Discretion, which is usually the first question"
        paragraphs={[
          "Senior people carry professional exposure, and that concern is legitimate. Arrangements can limit involvement to only those who need to be involved. Conversations are confidential; what happens inside the organization is governed by its own policies.",
        ]}
      />

      <Prose
        surface
        heading="What this is, and what this is not"
        paragraphs={[
          "This is not a disciplinary process, a fitness-for-duty evaluation, or a legal assessment, and it is not a substitute for your employment counsel. I do not diagnose or deliver clinical treatment. Employment law, ADA, FMLA, and fitness for duty belong with your counsel.",
        ]}
      />

      <Credentials surface={false} />

      <Prose
        surface
        heading="What to expect when you call"
        paragraphs={[
          "The first call is confidential. I ask about the person, the role, the pattern, and what the organization has already tried. By the end, you should know whether an intervention fits, what it would look like, and what to line up with counsel.",
        ]}
      />

      <EmergencyBlock />
      <TalkToMe />

      <FAQ
        items={[
          { q: "Can an employer require treatment?", a: "That is a legal question for your counsel. I can explain what an intervention can practically do." },
          { q: "Does the family have to be involved?", a: "Not always. Colleagues may be in the room instead. This is decided during planning." },
          { q: "What if they refuse?", a: "Refusal is common and rarely final. What the organization does consistently afterward matters most." },
          { q: "Is this confidential?", a: "Our conversations are confidential. Your organization's own policies govern what happens internally." },
          { q: "Do you work outside Los Angeles?", a: "Yes. I travel when appropriate and coordinate remotely otherwise." },
        ]}
      />
    </>
  );
}
