import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "Thank You: Your Checklist Is On Its Way",
  robots: { index: false },
};

export default function ChecklistThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Thank you"
        title="Your checklist is on its way."
        intro="Check your inbox in the next few minutes. If it does not arrive, look in your spam folder. When you are ready to talk it through, we are here."
        primaryCta={{ label: "Request a Confidential Consultation", href: "/contact-us/" }}
      />
      <TalkToMe />
    </>
  );
}
