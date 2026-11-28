import type { Band } from "@/components/sections/Assessment";

// Questions, scoring, and result copy copied verbatim from the live WordPress
// tools (Nov 2026). Each answer: Never 0, Rarely 1, Often 2, Frequently 3.

// /do-you-need-an-intervention/  ("Do You Need an Intervention?")
export const dnaQuestions = [
  "Substance use or mental health behavior interferes with work, school, or household responsibilities.",
  "Mood, personality, or close relationships have changed since the behavior began.",
  "Your loved one denies or minimizes concerns that you or others raise.",
  "The behavior has led to financial strain, missed bills, or unexplained spending.",
  "Your loved one has missed important family events or commitments because of the behavior.",
  "Safety incidents have occurred, including accidents, injuries, or other risky situations.",
  "Legal issues have come up in connection with the behavior, such as arrests or citations.",
  "Your loved one is pulling away from family or close friends.",
  "Conversations about the behavior lead to conflict or defensiveness.",
  "Your loved one has tried to stop or cut back without lasting success.",
  "You feel worried about your loved one's immediate safety.",
  "The behavior is affecting the wellbeing or daily routine of other family members.",
  "You have noticed physical changes, such as weight, appearance, or sleep patterns.",
  "Friends or extended family have expressed concern about your loved one.",
  "Your loved one combines substances or behaviors in ways that feel risky.",
  "You feel unsure how to help or where to turn next.",
  "Your family has put off addressing the situation, hoping it would improve.",
  "The overall situation feels like it is getting worse rather than better.",
];

export const dnaBands: Band[] = [
  {
    max: 13,
    title: "Early Concern",
    body: "This is often where families first start to notice something’s off. Many people see small changes long before things feel urgent.",
    next: ["Stay close, keep talking, and check back in with this assessment in a few months."],
  },
  {
    max: 27,
    title: "Emerging Pattern",
    body: "A few warning signs showing up together usually means it’s worth having a direct conversation soon.",
    next: ["I’d suggest a confidential conversation with me about what you’re seeing and what your options are."],
  },
  {
    max: 40,
    title: "Significant Concern",
    body: "This pattern usually tells me a family is dealing with more than they can manage alone.",
    next: ["Let’s talk. I can walk you through what an intervention looks like, including the Johnson Model and the Invitational Model."],
  },
  {
    max: 54,
    title: "Crisis Level",
    body: "This level of pattern often means the situation has become urgent.",
    next: ["Reach out to me as soon as you can. If there’s any risk to safety right now, use the resources below first."],
  },
];

// /family-intervention-assessment/  ("Are You Carrying Too Much?")
export const carryingQuestions = [
  "You have paid a bill or a debt that was their responsibility.",
  "You have made an excuse for them to an employer, a school or another family member.",
  "You have changed or cancelled your own plans to manage a situation involving them.",
  "You have lost sleep worrying about them.",
  "You have checked their phone, bag, room or messages.",
  "You have avoided raising a concern because you feared their reaction.",
  "You have given money while suspecting how it would be used.",
  "You have cleaned up a mess, practical or otherwise, that they created.",
  "You have taken on a responsibility that used to be theirs.",
  "You have kept the situation from other people close to you.",
  "You have found yourself negotiating a limit you had already set.",
  "You have felt relief only when you knew exactly where they were.",
  "You have argued with another family member about how to handle it.",
  "You have set a limit and then not held it.",
  "You have felt that things stay calm only while you manage them.",
  "You have put your own health, appointments or plans to one side.",
  "You have felt resentful, and then felt guilty for feeling resentful.",
  "You have wondered whether the help you give is making things worse.",
];

export const carryingBands: Band[] = [
  {
    max: 13,
    title: "You are carrying less than most families I speak with",
    body: "Some of these will still be familiar, and that is normal. Nothing here suggests the situation has taken over your daily life. This is a good moment to decide what you would not be willing to take on, before you are asked.",
    next: [
      "Read about the difference between helping and rescuing, and keep it in mind.",
      "Agree with anyone else close to the situation what you will and will not do.",
      "Keep your own routine intact. It is easier to protect than to rebuild.",
    ],
  },
  {
    max: 27,
    title: "You are carrying a fair amount",
    body: "There is a pattern here. You are absorbing a number of things regularly, and some of them are probably no longer noticed by anyone else. That tends to grow quietly rather than stay level.",
    next: [
      "Pick the one thing you do most automatically and change only that.",
      "Say it plainly and kindly, in advance, rather than in the middle of an argument.",
      "Make sure anyone else close to the situation agrees, or the change will not hold.",
    ],
  },
  {
    max: 40,
    title: "You are carrying a great deal",
    body: "Most of the things on this list are now part of your normal week. In my experience this is the point where families stop noticing how much has shifted onto them, and where the person they are worried about stops feeling the weight of their own situation.",
    next: [
      "Change one thing, not everything. A single limit that holds beats five that collapse.",
      "Decide now what you will say when it is tested, because it will be tested.",
      "Get support for yourself. Al-Anon and Nar-Anon meet across Los Angeles and are open to parents, partners and siblings.",
      "Consider talking to someone about whether a planned conversation would help.",
    ],
  },
  {
    max: 54,
    title: "You are carrying more than most people can sustain",
    body: "This is a heavy result, and I want to be careful about how I say it. It does not mean you have done anything wrong. Almost everything on that list is something a loving person does. It does mean you have been holding a great deal on your own, probably for a long time, and that is not something anyone keeps up indefinitely.",
    next: [
      "Start with your own support before you change anything else.",
      "Change one thing. Trying to change everything at once is the most common reason it fails.",
      "If the family disagrees about how to handle this, treat that as the first problem to solve.",
      "This is the point at which many families I work with find a planned conversation more useful than another private effort.",
    ],
  },
];
