import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FAQ } from "@/components/sections/FAQ";
import { Credentials } from "@/components/sections/SharedBlocks";
import { EmergencyBlock } from "@/components/sections/EmergencyBlock";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "For Therapists and Referral Partners",
  description:
    "When to refer a client for a professional intervention, what happens, and how families are prepared.",
};

export default function ForProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Clinicians"
        title="For Therapists and Referral Partners"
        intro="I work with the family around a planned, prepared conversation and coordinate treatment placement so a yes can be acted on immediately. Referrals from clinicians are welcome. I do not diagnose, deliver clinical treatment, or take referral fees."
        primaryCta={{ label: "Contact Us Today", href: "/contact-us/" }}
      />

      <Prose
        surface
        eyebrow="Common referral signals"
        heading="When a referral tends to make sense"
        bullets={[
          "The client is not attending, or attends without engaging.",
          "The family is destabilizing the work faster than sessions can repair it.",
          "Someone needs a structured, prepared conversation outside your scope.",
          "Placement is needed quickly and the family cannot navigate it alone.",
          "The family, not the client, is the group that needs the intervention.",
        ]}
        paragraphs={[
          "If any of these apply, call and describe the situation. I will tell you honestly whether an intervention is the right approach.",
        ]}
      />

      <Prose
        heading="What I do, and what I do not"
        paragraphs={[
          "I assess the situation with the family, decide with them who attends, prepare and rehearse everyone, lead the conversation, and coordinate admission with the provider. The meeting itself is the shortest part.",
          "I do not diagnose, deliver clinical treatment, operate a facility, or take referral fees from the centers where I place people.",
        ]}
      />

      <Prose
        surface
        heading="The two models I work in"
        paragraphs={[
          "I use the Johnson Model, which is more direct, and the Invitational Model, which invites the person in from the start. The choice depends on the family and the person, and is made during planning, sometimes together with the referring clinician.",
        ]}
      />

      <Credentials surface={false} />

      <Prose
        surface
        heading="Working alongside your practice"
        paragraphs={[
          "You remain your client's clinician. My work is a discrete engagement around one conversation and one placement. The referral workflow, including what is shared back and with what consent, is best explained on a call. Call first to describe the case.",
        ]}
      />

      <EmergencyBlock />
      <TalkToMe />

      <FAQ
        items={[
          { q: "Do you take referral fees?", a: "No." },
          { q: "Will you take over my client?", a: "No. The work is a discrete engagement around one conversation and one placement." },
          { q: "What if I am not sure an intervention is right?", a: "Call and describe the situation. I will tell you if something else fits better." },
          { q: "Do you work outside Los Angeles?", a: "Yes. I travel where appropriate and coordinate remotely where not." },
          { q: "How quickly can you respond?", a: "It depends on urgency and availability. If it is time-sensitive, say so on the first call." },
        ]}
      />
    </>
  );
}
