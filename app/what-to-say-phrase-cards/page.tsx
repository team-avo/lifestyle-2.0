import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { EmergencyBlock } from "@/components/sections/EmergencyBlock";
import { TalkToMe } from "@/components/sections/TalkToMe";
import { Section, Eyebrow } from "@/components/primitives/Section";

export const metadata: Metadata = {
  title: "What to Say Phrase Cards: For Families in Crisis",
  description:
    "Phrase cards for families: what to say, and what not to say, when talking to a loved one about substance use or a mental health crisis.",
};

const moments = [
  {
    group: "When the conversation starts",
    cards: [
      { title: "Opening the subject at all", say: "Can I tell you what I have noticed?", avoid: "We need to talk.", note: "Naming your intention first lowers the temperature." },
      { title: "They deny there is a problem", say: "I am describing what I saw, not asking you to agree.", avoid: "Labels, or a list of evidence.", note: "Aim for acceptance of a next step, not a label." },
      { title: "They get angry", say: "I will not shout. Let's come back to this.", avoid: "Calm down.", note: "Leaving calmly keeps the door open." },
    ],
  },
  {
    group: "When they push back",
    cards: [
      { title: "They will handle it alone", say: "What does that look like this week?", avoid: "You have said that before.", note: "Agree in advance on what happens if it does not hold." },
      { title: "They ask for money", say: "I will not give cash, but I will pay for treatment directly.", avoid: "This is the last time (unless it is).", note: "Refuse, and fund the solution, in the same breath." },
      { title: "They threaten to cut contact", say: "The door stays open.", avoid: "Fine, go then.", note: "Do not reverse the limit to keep them." },
    ],
  },
  {
    group: "The harder moments",
    cards: [
      { title: "They are ashamed, or crying", say: "This is not who you are.", avoid: "Shaming, or rushing to reassure.", note: "Separate the person from the behavior." },
      { title: "They blame you or the family", say: "Some of that is fair. Can we come back to the rest?", avoid: "A point-by-point defense.", note: "Accept a part, defer the rest." },
      { title: "They talk about not wanting to be here", say: "I am staying with you. Let's call 988 together.", avoid: "Promising to keep it a secret.", note: "Take it seriously every time. Call 911 if they are in immediate danger." },
    ],
  },
];

const helps = [
  "I love you and that is not changing.",
  "I am not here to have a fight.",
  "Here is what I noticed.",
  "I am not going to argue about the word.",
  "The answer is no, and I love you.",
  "I will help you get there.",
  "I am not going anywhere.",
  "I am going to stop now and come back to this.",
];

const hurts = [
  "Calm down.",
  "You are in denial.",
  "After everything I have done for you.",
  "This is the last time. (unless it is)",
  "Look what you are doing to this family.",
  "You are just like your father.",
  "Everyone has noticed.",
  "I promise I will not tell anyone.",
];

export default function PhraseCardsPage() {
  return (
    <>
      <EmergencyBlock />
      <PageHero
        eyebrow="Phrase Cards"
        title="What to Say, and What Not to Say"
        intro="Phrase cards for families, meant to be scanned quickly before a hard conversation."
        primaryCta={{ label: "Jump to the short version", href: "#short-version" }}
      />

      <Prose
        surface
        heading="Three rules that matter more than any phrase"
        bullets={[
          "Not while they are intoxicated. Wait for a sober window.",
          "Describe, do not diagnose. Say 'you did not remember Thursday', not a label.",
          "Say less than you want to. One clear point lands; five become an argument.",
        ]}
        paragraphs={["One thing to let go of: there is no perfect sentence. Speaking imperfectly beats waiting."]}
      />

      {moments.map((m) => (
        <Section key={m.group}>
          <Eyebrow>{m.group}</Eyebrow>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {m.cards.map((c) => (
              <div key={c.title} className="rounded-card border border-line bg-surface p-7">
                <h3 className="text-lg text-ink">{c.title}</h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand">Say something like</p>
                <p className="mt-1 font-serif text-ink">&ldquo;{c.say}&rdquo;</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent">Try not to say</p>
                <p className="mt-1 text-sm text-muted">{c.avoid}</p>
                <p className="mt-4 border-t border-line pt-4 text-sm text-muted">{c.note}</p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section className="bg-surface">
        <div id="short-version" className="scroll-mt-28">
          <Eyebrow>The short version</Eyebrow>
          <h2 className="text-3xl sm:text-4xl text-ink">If you only remember one thing</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-card border border-brand bg-bg p-8">
              <h3 className="text-lg text-brand">Phrases that nearly always help</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                {helps.map((h) => <li key={h}>&ldquo;{h}&rdquo;</li>)}
              </ul>
            </div>
            <div className="rounded-card border border-line bg-bg p-8">
              <h3 className="text-lg text-ink">Phrases that nearly always hurt</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {hurts.map((h) => <li key={h}>&ldquo;{h}&rdquo;</li>)}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-muted">
            Wait for a sober moment, say one thing, not five, and leave the door open.
          </p>
        </div>
      </Section>

      <Prose
        heading="After the conversation"
        paragraphs={[
          "Write down what was said and what was agreed, and tell one other family member. Expect to feel worse before you feel better. If it went badly, a refusal is not the end; consistency afterward matters most.",
        ]}
      />

      <TalkToMe
        heading="If the conversation keeps going the same way"
        body="Chris Howard, CADC-III, CCMI-M, plans prepared conversations with treatment arranged in advance."
      />
      <Section>
        <p className="max-w-3xl text-xs text-muted">
          Educational information only. Not medical, legal, or clinical advice, and no outcome is
          promised.
        </p>
      </Section>
    </>
  );
}
