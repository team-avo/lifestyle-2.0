import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { Steps } from "@/components/sections/Steps";
import { FAQ } from "@/components/sections/FAQ";
import { FitCheck } from "@/components/sections/SharedBlocks";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "The Johnson Model: 7 Steps of a Real Intervention Plan",
  description:
    "How the Johnson Model of intervention works, who it suits, and its tradeoffs, explained by Lifestyle Interventions in Los Angeles.",
};

export default function JohnsonModelPage() {
  return (
    <>
      <PageHero
        eyebrow="Intervention Models"
        title="The Johnson Model of Intervention: How It Works"
        intro="A direct intervention approach developed by Vernon Johnson in the 1960s, the original and most familiar model, explained by Lifestyle Interventions in Los Angeles."
      />

      <Prose
        surface
        eyebrow="Our approach"
        heading="A clearer way to think about the Johnson Model"
        paragraphs={[
          "Done well, the Johnson Model is a structured, family-led conversation that pairs honest reflection with care. It is far more thoughtful than television portrayals suggest. This guide covers how it works, who it suits, and its tradeoffs.",
        ]}
      />

      <Prose
        eyebrow="You are not alone"
        heading="When you are weighing how to approach an intervention"
        paragraphs={[
          "Gentler approaches may have failed, time may feel short, and family unity may be uncertain. There is a structured way to decide whether this model fits your family.",
        ]}
      />

      <Steps
        surface
        eyebrow="Inside the model"
        heading="Seven steps of a Johnson Model intervention"
        intro="The family prepares together before one meeting. The meeting is brief; the preparation is what makes it work."
        steps={[
          { title: "Build the team", body: "A professional interventionist helps identify trusted family and friends who can speak with credibility and care." },
          { title: "Plan and prepare", body: "The team meets the interventionist to learn about addiction, rehearse, and prepare emotionally." },
          { title: "Write impact statements", body: "Each participant describes specific effects of the substance use, framed around concern rather than anger." },
          { title: "Arrange treatment", body: "Options are secured before the meeting so the person can enter care immediately if they agree." },
          { title: "Hold the meeting", body: "The team shares statements, guided by the interventionist. The tone stays firm but caring." },
          { title: "Present consequences", body: "The family states its boundaries if the person declines, then offers the prepared treatment path." },
          { title: "Follow through", body: "If the person agrees, they move into treatment without delay, and the family keeps supporting recovery." },
        ]}
      />

      <FitCheck
        good={[
          "You have tried gentler approaches and denial has not moved.",
          "The situation calls for a clear, immediate decision point.",
          "The family can stay caring and consistent under pressure.",
          "You plan to work with a trained interventionist.",
        ]}
        notRight={[
          "Someone is in immediate danger.",
          "Relationships are fragile and a surprise could cause lasting harm.",
          "The family is divided.",
          "You prefer a transparent, invitational approach.",
        ]}
      />

      <Prose
        eyebrow="Why us"
        heading="About Lifestyle Interventions"
        paragraphs={[
          "A Los Angeles team supporting families through mental health and substance use crises, founded by Chris Howard. Family involvement is central to how we work, so you can decide with clarity, on your own timing.",
        ]}
      />

      <FAQ
        items={[
          { q: "What is the Johnson Model?", a: "A direct, structured intervention where family and close friends, guided by a professional, present an immediate path into treatment." },
          { q: "Who created it?", a: "Dr. Vernon Johnson, an Episcopal priest, in the 1960s. He described it in his 1973 book I'll Quit Tomorrow." },
          { q: "Is it a surprise?", a: "Usually. It is planned without the person's prior knowledge to break through denial, which is why some families prefer invitational models." },
          { q: "Is it confrontational?", a: "It is direct but designed to be led by care rather than blame." },
          { q: "What if the person refuses?", a: "The family states the consequences prepared in advance, and the path into treatment remains open." },
          { q: "How is it different from the Invitational Model?", a: "Johnson is a single planned meeting, often a surprise. Invitational includes the person from the start." },
          { q: "Do we need a professional?", a: "A trained interventionist is strongly recommended to plan, prepare the family, and lead the meeting." },
          { q: "How do we get started in Los Angeles?", a: "Call 866-826-0985 or submit a request through the contact page." },
        ]}
      />
      <CTABand />
    </>
  );
}
