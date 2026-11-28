import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { FAQ } from "@/components/sections/FAQ";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "Who I Help: For Family Members and Partners",
  description:
    "Support for spouses, parents of adult children, siblings, clinicians, and employers dealing with a loved one's substance use or mental health crisis.",
};

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Who I Help"
        title="Who I help"
        intro="Most of the people I work with are spouses, parents of adult children, or siblings. Each page below covers what that group commonly reports, what tends to help, and when a structured family intervention becomes the next step."
        primaryCta={{ label: "Contact Us", href: "/contact-us/" }}
      />

      <FeatureCards
        surface
        eyebrow="Audiences"
        heading="Choose the page that fits your situation"
        features={[
          { kicker: "Husband or wife", title: "Spouses & Partners", body: "Practical support for living with a partner's drinking or drug use.", href: "/who-we-help/spouses/", linkLabel: "Read more" },
          { kicker: "Adult son or daughter", title: "Parents of Adult Children", body: "What parents can do once they no longer have legal authority.", href: "/who-we-help/parents-adult-children/", linkLabel: "Read more" },
          { kicker: "Brother or sister", title: "Siblings", body: "What siblings can do, and what they should not take on.", href: "/who-we-help/siblings/", linkLabel: "Read more" },
          { kicker: "For clinicians", title: "Therapists & Referral Partners", body: "When to refer, what happens, and how the family is prepared.", href: "/for-professionals/", linkLabel: "Read more" },
          { kicker: "Workplace", title: "Employers & HR", body: "Guidance when a senior employee's substance use affects the business.", href: "/for-employers/", linkLabel: "Read more" },
          { kicker: "Post-treatment support", title: "Recovery Mentor vs Sober Companion", body: "How to tell the roles apart, and which your family needs.", href: "/recovery-mentor-vs-sober-companion/", linkLabel: "Read more" },
        ]}
      />

      <FAQ
        items={[
          { q: "How do I know which page fits?", a: "Pick the role you hold relative to the person who is struggling." },
          { q: "Which kind of support fits?", a: "It depends on your relationship, what has been tried, and the help you need. A short call makes it clear." },
          { q: "How quickly can we talk?", a: "It depends on urgency and availability. If it is urgent, say so on the first call." },
          { q: "Is this confidential?", a: "Yes. Who is involved on your side is decided with you." },
        ]}
      />
      <TalkToMe />
    </>
  );
}
