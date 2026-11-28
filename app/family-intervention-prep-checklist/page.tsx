import type { Metadata } from "next";
import { LeadMagnetPage } from "@/components/sections/LeadMagnetPage";

export const metadata: Metadata = {
  title: "8 Things Every Family Should Prepare Before an Intervention",
  description:
    "A free, practical checklist of eight things to settle before a family intervention.",
};

export default function PrepChecklistPage() {
  return (
    <LeadMagnetPage
      c={{
        eyebrow: "Free Checklist",
        title: "8 Things Every Family Should Prepare Before an Intervention",
        intro: "A free, practical checklist for walking into the conversation prepared.",
        ctaLabel: "Get the Free Checklist",
        formName: "Family Intervention Prep Checklist",
        submitLabel: "Get My Free Checklist",
        overview: {
          heading: "A calmer way to walk into the conversation",
          paragraphs: [
            "The checklist covers eight things to settle before an intervention: who is in the room, what each person says, and what happens if your loved one says yes. It is free, and your information stays private.",
          ],
        },
        notAlone: {
          heading: "When you have already run out of ideas",
          paragraphs: [
            "Most families plan an intervention after years of failed attempts. The earlier conversations were not wrong; they were unprepared and one-on-one. A united family is harder to dismiss than one worried parent.",
          ],
        },
        inside: {
          heading: "Eight things to sort out before the day",
          intro: "Preparation matters as much as the intervention itself, and it is what frightened families skip.",
          items: [
            { title: "Who is in the room", body: "Who your loved one trusts, and who is too close to help right now." },
            { title: "What each person says", body: "One agreed statement per person, settled before anyone sits down." },
            { title: "The option on the table", body: "A real next step arranged in advance, so a yes does not become a week of calls." },
            { title: "Timing and place", body: "When they are most receptive, and where nobody feels cornered." },
            { title: "If they say no", body: "A calm plan for a no." },
            { title: "What changes either way", body: "The boundaries the family is ready to hold." },
            { title: "The day after", body: "Who handles what once the conversation ends." },
            { title: "If things escalate", body: "A safety plan and numbers to call if anyone is in danger." },
          ],
        },
        fit: {
          good: [
            "A parent, spouse, or sibling seriously considering an intervention.",
            "Sure something must change, but unsure how to start.",
            "Wanting the family aligned first.",
          ],
          notRight: ["Someone is in immediate danger.", "A medical or psychiatric emergency is happening."],
        },
        formHeading: "Send me the free checklist",
        faq: [
          { q: "Is the checklist really free?", a: "Yes." },
          { q: "What is inside it?", a: "Eight things to prepare, with a one-page printable version." },
          { q: "Will someone call me after I download it?", a: "No." },
          { q: "Do we need a professional to do an intervention?", a: "It is strongly recommended. Preparation is where a professional adds the most." },
          { q: "What if our family cannot agree on whether it is time?", a: "That disagreement is common, and it is worth resolving before anything else." },
          { q: "Do you work with families outside Los Angeles?", a: "Yes." },
          { q: "Is my information kept private?", a: "Yes." },
        ],
      }}
    />
  );
}
