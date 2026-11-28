import type { Metadata } from "next";
import { LeadMagnetPage } from "@/components/sections/LeadMagnetPage";

export const metadata: Metadata = {
  title: "Free Guide: Choosing the Right Treatment Center Wisely",
  description:
    "Seven questions every family should ask before choosing a mental health or addiction treatment center. Free and private.",
};

export default function TreatmentCenterGuidePage() {
  return (
    <LeadMagnetPage
      c={{
        eyebrow: "Free Guide",
        title: "7 Questions Every Family Should Ask Before Choosing a Treatment Center",
        intro: "A free, no-pressure guide to help your family make a confident decision.",
        ctaLabel: "Get the Free Guide",
        formName: "Free Treatment Center Guide",
        submitLabel: "Get My Free Guide",
        overview: {
          heading: "A clearer way to compare treatment centers",
          paragraphs: [
            "The guide gives you seven questions to ask before choosing a mental health or addiction treatment center, focused on quality, safety, and fit rather than marketing. It includes a checklist to use on every call. It is free, and your information stays private.",
          ],
        },
        notAlone: {
          heading: "When the search feels overwhelming",
          paragraphs: [
            "Families are often overwhelmed by similar-sounding websites while deciding under stress. We talk with families in this position every week, and a few focused questions cut through the noise.",
          ],
        },
        inside: {
          heading: "Seven questions that cut through the noise",
          intro: "Continuing care is often overlooked. A good provider should explain its approach, its staff, and its post-discharge plan.",
          items: [
            { label: "Licensing & level of care", title: "Is the center licensed, and for what kind of treatment?", body: "Licensing and level of care tell you what the program is actually allowed to do." },
            { label: "Staff qualifications", title: "Who provides the clinical and medical care?", body: "Ask for credentials, not titles." },
            { label: "Co-occurring conditions", title: "Does the program treat mental health and substance use together?", body: "Treating one side alone frequently does not hold." },
            { label: "True cost", title: "What does the price include?", body: "How do insurance and payment actually work?" },
            { label: "Family involvement", title: "How is the family included?", body: "Families who are part of the process see better follow-through." },
            { label: "Aftercare", title: "What does support look like after the program ends?", body: "The first 90 days after discharge carry the highest risk." },
            { label: "Fit & safety", title: "What happens in a crisis, or if it is not the right match?", body: "Ask about crisis procedure and transfer options." },
          ],
        },
        fit: {
          good: [
            "A parent or family member researching for a loved one.",
            "Comparing centers and unsure how to tell them apart.",
            "Feeling rushed and wanting to slow the decision down.",
          ],
          notRight: ["Someone is in immediate danger.", "A medical or psychiatric emergency is unfolding."],
        },
        formHeading: "Send me the free guide",
        faq: [
          { q: "Is the guide really free?", a: "Yes." },
          { q: "What is inside the guide?", a: "Seven questions to ask any treatment center, plus a one-page checklist." },
          { q: "Will someone call me after I download it?", a: "No. There are no calls and no pressure." },
          { q: "Is my information kept private?", a: "Yes. It is never shared." },
          { q: "Do you work with families outside Los Angeles?", a: "Yes." },
          { q: "How quickly will I get the guide?", a: "Within a few minutes, by email." },
        ],
      }}
    />
  );
}
