import type { Metadata } from "next";
import { ServiceLanding } from "@/components/sections/ServiceLanding";

export const metadata: Metadata = {
  title: "Crisis Intervention Services Los Angeles",
  description:
    "Professional crisis intervention for Los Angeles families facing a loved one's substance use, mental health, or behavioral emergency.",
};

export default function CrisisInterventionsPage() {
  return (
    <ServiceLanding
      c={{
        eyebrow: "Crisis Intervention · Los Angeles",
        title: "Crisis Interventions in Los Angeles",
        intro:
          "Professional crisis intervention for LA families facing a loved one's substance use, mental health, or behavioral emergency. Safe, structured, and on your side when time is already running.",
        whatIs: {
          heading: "What is a crisis intervention?",
          paragraphs: [
            "A professional accountability practice for people in long-term recovery. It is not therapy and it is not peer sponsorship. It sits alongside therapy, twelve-step fellowships, and treatment programs.",
            "We hold people accountable for the daily mechanics of recovery: sleep, exercise, meetings, and family conversations. We are based in Los Angeles and serve families across the United States.",
          ],
        },
        whenToCall: {
          heading: "When Los Angeles families call us",
          items: [
            "A treatment program is ending.",
            "A long stretch of recovery has gotten harder.",
            "A young adult in early recovery needs a working life.",
            "The family has carried accountability alone for too long.",
            "A professional or public figure needs privacy.",
            "Insurance has ended and the person is not ready for no support.",
          ],
        },
        process: {
          heading: "What crisis intervention looks like in practice",
          steps: [
            { label: "First call", title: "Initial assessment", body: "Free and no obligation. We cover the person, the family system, history, and goals." },
            { label: "Week 1", title: "Engagement plan", body: "A written, shared plan covering meeting frequency, the first 90 days, the family's role, and coordination with therapists and peer support." },
            { label: "Months 1 to 3", title: "Regular cadence", body: "Weekly or twice weekly, in person across Greater LA or by secure video. Each session covers the week, current focus, accountability targets, and a family check-in." },
            { label: "Months 3 to 12", title: "Tapering", body: "Weekly, then biweekly, then monthly check-ins. Crisis support stays open." },
            { label: "Year 1 and beyond", title: "Long-term availability", body: "No fixed end date. Periodic check-ins are common." },
          ],
        },
        whoFor: {
          heading: "Who crisis intervention is for",
          cards: [
            { title: "After treatment ends", body: "Post-residential or IOP, or insurance ended early. The first 90 days are the highest-risk relapse window.", href: "/contact-us/", linkLabel: "Talk through your situation" },
            { title: "Long-term recovery, hard stretch", body: "Months or years sober, but a job loss, relationship change, bereavement, or accumulated pressure has shifted things.", href: "/contact-us/", linkLabel: "Confidential consultation" },
            { title: "Young adult building a sober life", body: "In their twenties, some treatment behind them, trying to work, study, and date without substances.", href: "/contact-us/", linkLabel: "Talk through your situation" },
            { title: "Family needing third-party support", body: "A family exhausted by years of managing use, ready for professional support.", href: "/family-support-services/", linkLabel: "Family support services" },
          ],
        },
        whyUs: [
          { value: "16+", title: "Years of practice", body: "Founder Chris Howard holds CADC-III, CCMI-M, and a B.A. in Psychology from UCLA." },
          { value: "LA", title: "Based, not a call center", body: "West LA base, in person across LA County. You reach the people who will work with your family." },
          { value: "100%", title: "Discretion, non-negotiable", body: "Applies to every case, without exception." },
        ],
        faqHeading: "Common Questions About Crisis Intervention in Los Angeles",
        faq: [
          { q: "Is this the same as therapy?", a: "No. It is complementary, and we coordinate with a therapist within the client's consent." },
          { q: "Is this the same as an AA sponsor?", a: "No. A sponsor is a peer relationship; this is a professional one." },
          { q: "How long does it last?", a: "There is no fixed length. Often 3 to 6 months of intensive work, then a taper." },
          { q: "How often do we meet?", a: "Usually weekly or twice weekly, in person when possible, otherwise by video." },
          { q: "Do you coordinate with a therapist or doctor?", a: "Yes, with consent." },
          { q: "Does insurance cover it?", a: "Generally no. It is paid by the client or family, and fees are discussed at the consultation." },
          { q: "Do you only work in Los Angeles?", a: "No. Out-of-area clients work with us by secure video." },
          { q: "How do I get started?", a: "Call us or request a confidential consultation." },
        ],
        related: [
          { label: "Crisis Intervention Specialist in LA", href: "/los-angeles/crisis-intervention-specialist/" },
          { label: "Family Support Services in LA", href: "/family-support-services/" },
          { label: "Family Intervention in LA", href: "/los-angeles/family-intervention/" },
          { label: "Interventionist in LA", href: "/los-angeles/interventionist/" },
        ],
      }}
    />
  );
}
