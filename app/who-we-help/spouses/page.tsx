import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FAQ } from "@/components/sections/FAQ";
import { Credentials } from "@/components/sections/SharedBlocks";
import { EmergencyBlock } from "@/components/sections/EmergencyBlock";
import { TalkToMe } from "@/components/sections/TalkToMe";

export const metadata: Metadata = {
  title: "Help for the Spouse of an Alcoholic or Addict | Los Angeles",
  description:
    "Practical support for husbands, wives, and partners living with a partner's drinking or drug use.",
};

export default function SpousesPage() {
  return (
    <>
      <PageHero
        eyebrow="Support for Partners"
        title="For Spouses and Partners"
        intro="I work with husbands and wives of people who drink or use drugs. This page covers what partners most often report, what helps, what makes it worse, and when a structured family intervention is the next step."
        primaryCta={{ label: "Contact Us", href: "/contact-us/" }}
      />

      <Prose
        surface
        eyebrow="Why partners wait longer"
        heading="Why partners wait longer than anyone else"
        paragraphs={[
          "A high-functioning alcoholic is someone whose drinking causes real harm at home while work and outward presentation look fine. Partners often feel the problem reflects on the marriage and say nothing. Waiting for a visible collapse may mean waiting a long time.",
        ]}
      />

      <Prose
        heading="What I hear most often from husbands and wives"
        bullets={[
          "Managing appearances for two people.",
          "Watching the level in the bottle and saying nothing.",
          "No longer inviting people over.",
          "Being the only one who knows how bad it is.",
          "Wondering whether you are the problem.",
        ]}
        paragraphs={["None of this means the marriage is over. It means one person is holding the situation up, and that is not sustainable."]}
      />

      <Prose
        surface
        eyebrow="What tends to make it worse"
        heading="Habits that keep the situation stable"
        bullets={[
          "Pouring alcohol away moves the drinking out of sight rather than reducing it.",
          "Ultimatums that are not enforced teach that limits can be waited out.",
          "Arguing while they are intoxicated rarely lands.",
          "Covering for them, with calls to employers or excuses to family, removes a consequence.",
          "Counting drinks turns you into a supervisor.",
        ]}
      />

      <Prose
        eyebrow="What tends to help"
        heading="Small choices that change the pressure"
        bullets={[
          "Choose a sober morning over an evening.",
          "Describe what you saw rather than applying a label.",
          "Ask for something specific: an assessment with a named person on a named day, rather than 'get help'.",
          "If there are children, their safety comes first. Any violence or threat means leave and get help.",
          "Get support for yourself: Al-Anon, a therapist, or one friend who knows the truth.",
        ]}
      />

      <Credentials />

      <Prose
        eyebrow="The safety point nobody mentions"
        heading="Do not let a heavy drinker stop suddenly and alone"
        paragraphs={[
          "Alcohol withdrawal can be medically dangerous and sometimes life-threatening. Detox should be medically supervised, so talk to a doctor or treatment center before the person stops.",
          "Most spouses reach a point where they have said all they can. A structured family intervention, a planned meeting where the people closest present a united request for help, is the sensible next step. A lone spouse is easy to dismiss; a prepared group is much harder to dismiss.",
        ]}
      />

      <EmergencyBlock />
      <TalkToMe />

      <FAQ
        items={[
          { q: "Can I make my spouse stop drinking?", a: "No. You can change what surrounds the drinking." },
          { q: "Should I threaten to leave?", a: "Only if you mean it." },
          { q: "They are functioning fine at work. Is it still a problem?", a: "It can be. Functioning describes output, not the relationship with alcohol." },
          { q: "Is paying the bills enabling?", a: "It depends on what the payment protects." },
          { q: "Should I stage an intervention myself?", a: "Not without guidance. A spouse has the most to lose if it goes badly." },
          { q: "What if they refuse?", a: "Refusal is common and rarely final. Consistency afterward matters." },
        ]}
      />
    </>
  );
}
