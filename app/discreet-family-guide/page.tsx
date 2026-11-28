import type { Metadata } from "next";
import { LeadMagnetPage } from "@/components/sections/LeadMagnetPage";

export const metadata: Metadata = {
  title: "The Discreet Family's Guide to Getting Help Privately",
  description:
    "A calm, confidential guide for families protecting their privacy while helping a loved one.",
};

export default function DiscreetFamilyGuidePage() {
  return (
    <LeadMagnetPage
      c={{
        eyebrow: "Private Guide",
        title: "The Discreet Family's Guide to Getting Help Privately",
        intro: "A calm, confidential guide for families protecting their privacy while helping a loved one. By Chris Howard, founder of Lifestyle Interventions.",
        ctaLabel: "Get the Guide",
        formName: "Discreet Family Guide",
        submitLabel: "Get My Guide",
        overview: {
          heading: "Getting help does not have to become public",
          paragraphs: [
            "A discreet intervention is a professionally guided family conversation, planned to keep the circle of people who know as small as possible. The guide covers who needs to know, work and public visibility, questions to ask private programs, and records and consent. Safety always comes before privacy.",
          ],
        },
        notAlone: {
          heading: "When privacy is part of the decision",
          paragraphs: [
            "Families worry about work, public profiles, small communities, and household staff. The guide does not promise nothing will leak. It helps you keep the circle small and choose private options deliberately.",
          ],
        },
        inside: {
          heading: "Seven decisions that protect your family's privacy",
          items: [
            { title: "Who needs to know", body: "The smallest circle that must be involved, and who can wait." },
            { title: "Work and professional life", body: "What to tell an employer, partners, or a board, and when." },
            { title: "Public visibility", body: "Social media, press, and neighbors." },
            { title: "Private treatment options", body: "What 'private' means at a program, and what to ask." },
            { title: "Records and consent", body: "Who may speak with whom, and what has been signed." },
            { title: "Travel and logistics", body: "Getting your loved one to care quietly and safely." },
            { title: "Staff and extended family", body: "Informing households, assistants, and relatives without over-sharing." },
          ],
        },
        fit: {
          good: [
            "A family member keeping a crisis confidential.",
            "An executive, owner, or professional whose role makes visibility a concern.",
            "Looking for private treatment and unsure what to ask.",
          ],
          notRight: ["Someone is in immediate danger.", "An emergency is unfolding."],
        },
        formHeading: "Send me the guide",
        faq: [
          { q: "What does discreet mean for an intervention?", a: "Planning to keep the circle of people who know as small as possible." },
          { q: "Can I keep an intervention confidential from my loved one's employer?", a: "Often, with planning. The guide covers what to consider." },
          { q: "Does rehab tell your employer?", a: "Treatment records are protected by federal privacy rules, including HIPAA and 42 CFR Part 2." },
          { q: "Do you work with high-profile or executive families?", a: "Yes, regularly, and we never discuss clients or share names." },
          { q: "Do you travel for an intervention?", a: "Yes, when needed." },
          { q: "Is this guide a substitute for professional advice?", a: "No. It is general information, not legal or clinical advice." },
        ],
      }}
    />
  );
}
