import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FAQ } from "@/components/sections/FAQ";
import { Credentials } from "@/components/sections/SharedBlocks";
import { EmergencyBlock } from "@/components/sections/EmergencyBlock";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "Interventions for Executives and Professionals",
  description:
    "Discreet intervention services for executives, professionals, and high-profile families, planned around privacy and professional exposure.",
};

export default function ExecutiveInterventionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Discretion-first"
        title="Interventions for Executives and Professionals"
        intro="Discreet intervention services for executives, professionals, and high-profile families, planned around privacy, schedule, and professional exposure."
        primaryCta={{ label: "Contact Us", href: "/contact-us/" }}
      />

      <Prose
        surface
        eyebrow="The question executives ask first"
        heading="Not what happens. Who finds out."
        paragraphs={[
          "For someone with a board seat, a professional license, a public profile, or a business that depends on reputation, visibility is a safety concern. I plan for it from the first call.",
        ]}
      />

      <Prose
        eyebrow="What changes"
        heading="What changes when the person is a professional"
        bullets={[
          "The window is narrower: less free time, and sober windows may be early morning or while traveling.",
          "The circle is wider: assistants, drivers, colleagues, and household staff.",
          "There is more to lose from a clumsy attempt.",
          "Treatment location matters more: a local program may risk recognition.",
          "Written records matter.",
        ]}
      />

      <Prose
        surface
        eyebrow="What stays the same"
        heading="Discretion changes the logistics, not the work"
        paragraphs={[
          "Four things stay constant: preparation, a family speaking with one voice, treatment arranged in advance so a yes can be acted on the same day, and a clear next step if the answer is no.",
        ]}
      />

      <Prose
        eyebrow="High functioning is the usual pattern here"
        heading="If you are waiting for a visible collapse, you may be waiting years"
        paragraphs={[
          "Most executives are still performing at work. High-functioning substance use concentrates the damage where others cannot see it, which is exactly why families wait.",
        ]}
      />

      <Credentials />

      <Prose
        eyebrow="How I plan around privacy"
        heading="What can be contained, and what cannot"
        paragraphs={[
          "Every conversation is confidential. Planning covers who must be involved, where and when, travel, treatment options outside the professional circle, and what is documented. I am honest that total invisibility cannot be promised.",
        ]}
      >
        <p className="mt-5 text-muted">
          When the concern comes from a colleague or employer, see{" "}
          <Link href="/for-employers/" className="font-semibold text-brand">For Employers and HR</Link>.
        </p>
      </Prose>

      <EmergencyBlock />
      <TalkToMe />

      <FAQ
        items={[
          { q: "Can this be arranged without colleagues knowing?", a: "Much can be contained with planning, and I will be specific about the limits." },
          { q: "Can treatment be outside Los Angeles?", a: "Yes, and it is often better for professional families." },
          { q: "What about a professional license?", a: "Reporting obligations vary by profession and jurisdiction. Please consult your own counsel or licensing body." },
          { q: "Do you sign confidentiality agreements?", a: "We discuss this on the first call." },
          { q: "How quickly can this be arranged?", a: "Say so on the first call if it is urgent; availability varies." },
          { q: "Is it different from a standard intervention?", a: "The method is the same. The privacy planning is more involved." },
        ]}
      />
    </>
  );
}
