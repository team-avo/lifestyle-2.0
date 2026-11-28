import type { Metadata } from "next";
import { ServiceLanding } from "@/components/sections/ServiceLanding";

export const metadata: Metadata = {
  title: "Family Support & Crisis Intervention Services",
  description:
    "Professional coaching, education, and accountability for the families of people struggling with substance use, mental health, or recovery.",
};

export default function FamilySupportPage() {
  return (
    <ServiceLanding
      c={{
        eyebrow: "Family Support · Los Angeles",
        title: "Family Support Services in Los Angeles",
        intro:
          "Support for the family of someone struggling with substance use, mental health, or recovery. The family carries the load too.",
        whatIs: {
          heading: "What are family support services?",
          paragraphs: [
            "Professional coaching, education, and accountability for family members. We work with the family as a system. This is not family therapy or couples counseling.",
            "Families carry an invisible load: worry, shifted routines, avoided conversations, and survival patterns. We have supported Los Angeles families with that load for over a decade.",
          ],
        },
        whenToCall: {
          heading: "Common family situations we work with",
          items: [
            "A parent managing an adult child in active use or cycling through treatment.",
            "A spouse rebuilding after a partner returns from treatment.",
            "An adult child who is now the responsible one for a parent.",
            "A sibling who has quietly carried the logistics and emotional weight.",
            "A family in shock after an overdose, hospitalization, admission, or intervention.",
            "A family grieving a loss to addiction while supporting others.",
          ],
        },
        process: {
          heading: "What family support looks like in practice",
          steps: [
            { label: "First call", title: "Initial family inventory", body: "Free and no obligation." },
            { label: "Week 1", title: "Engagement plan", body: "Who participates, in what formats, and at what cadence." },
            { label: "Months 1 to 3", title: "Regular cadence", body: "Weekly or twice weekly, in person or by video." },
            { label: "As needed", title: "Whole-family sessions", body: "Periodic longer sessions with the family together." },
            { label: "Year 1 and beyond", title: "Long-term availability", body: "A taper to monthly or quarterly check-ins." },
          ],
        },
        whoFor: {
          heading: "Who family support is for",
          cards: [
            { title: "Parents of an adult child in active use", body: "When you no longer have legal authority but still carry the worry.", href: "/who-we-help/parents-adult-children/", linkLabel: "Talk through your situation" },
            { title: "Spouses rebuilding in early recovery", body: "When a partner comes home from treatment and everything has to be relearned.", href: "/who-we-help/spouses/", linkLabel: "Talk through your situation" },
            { title: "Adult children of a parent in active use", body: "When the roles have reversed and you are the responsible one.", href: "/contact-us/", linkLabel: "Talk through your situation" },
            { title: "Families in shock after a recent crisis", body: "After an overdose, hospitalization, or admission, when nobody knows what comes next.", href: "/contact-us/", linkLabel: "Talk through your situation" },
          ],
        },
        whyUs: [
          { value: "16+", title: "Years of practice", body: "Family-side work with hundreds of Los Angeles families." },
          { value: "Pro", title: "Credentialed practitioner", body: "CADC-III (Sober College), CCMI-M (Breining Institute), B.A. in Psychology from UCLA." },
          { value: "100%", title: "Discretion, non-negotiable", body: "Applies to every family, without exception." },
        ],
        faqHeading: "Common Questions About Family Support Services in Los Angeles",
        faq: [
          { q: "Is this the same as family therapy?", a: "No. Therapy is clinical; this is coaching, education, and accountability." },
          { q: "Do all family members need to be involved?", a: "No. The configuration is flexible." },
          { q: "What if my loved one is not in recovery yet?", a: "Family support is useful at every stage." },
          { q: "How is this different from Al-Anon or Nar-Anon?", a: "Those are peer fellowships; this is a professional practitioner. Families often use both." },
          { q: "Do you work with adult children of alcoholics or addicts?", a: "Yes. It is a significant share of our work." },
          { q: "How long does it last?", a: "There is no fixed length. Usually 3 to 6 months intensive, then a taper." },
          { q: "Can you help a family that lost someone to addiction?", a: "Yes, and we coordinate with grief professionals." },
          { q: "How do I get started?", a: "Call us or request a confidential consultation." },
        ],
        resource: { label: "Free guide: 7 questions to ask before choosing a treatment center", href: "/free-treatment-center-guide/" },
        related: [
          { label: "Crisis Intervention Specialist in LA", href: "/los-angeles/crisis-intervention-specialist/" },
          { label: "Recovery Mentoring in LA", href: "/los-angeles/recovery-mentoring/" },
          { label: "Family Intervention in LA", href: "/los-angeles/family-intervention/" },
          { label: "Interventionist in LA", href: "/los-angeles/interventionist/" },
        ],
      }}
    />
  );
}
