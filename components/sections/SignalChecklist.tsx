"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SIGNALS = [
  "Direct conversations have been tried several times without lasting change.",
  "More than one person is worried, not just you.",
  "They deny or minimize the problem whenever it is raised.",
  "The family is absorbing the consequences (bills, excuses, cleanup).",
  "The pattern runs over months, not a single incident.",
  "They are unlikely to seek help on their own.",
  "The family disagrees on what to do, and that disagreement is part of the problem.",
  "You could offer something concrete if they said yes today.",
  "There is a window when they are sober, rested, and reachable.",
  "The situation is stable enough to plan, not an emergency tonight.",
];

type Answer = "yes" | "unsure" | "no";
const KEY = "li-when-to-stage";

export function SignalChecklist() {
  const [answers, setAnswers] = useState<(Answer | null)[]>(Array(SIGNALS.length).fill(null));

  // Answers save on this device only, matching the live tool.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setAnswers(JSON.parse(saved));
    } catch {}
  }, []);

  // Functional update: rapid clicks must not overwrite each other via a stale copy.
  function set(i: number, a: Answer) {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = a;
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  const answered = answers.filter(Boolean).length;
  const yes = answers.filter((a) => a === "yes").length;
  const done = answered === SIGNALS.length;

  let result = "";
  if (done) {
    if (yes >= 7) result = "Most signals are present. A prepared family intervention is likely the right tool now. A confidential call can help you plan it.";
    else if (yes >= 4) result = "Several signals are present. An intervention may fit, and a short conversation can help you decide on timing and approach.";
    else result = "Few signals are present right now. Start with one honest, direct conversation, and recheck in a few weeks if you are still worried.";
  }

  const btn = (active: boolean) =>
    `rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
      active ? "border-brand bg-brand text-white" : "border-line bg-surface text-ink hover:border-brand"
    }`;

  return (
    <div id="checklist" className="scroll-mt-28">
      <ol className="space-y-3">
        {SIGNALS.map((s, i) => (
          <li key={i} className="flex flex-col gap-3 rounded-card border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink">
              <span className="mr-2 font-semibold text-accent">{i + 1}.</span>
              {s}
            </p>
            <div className="flex flex-none gap-2">
              <button type="button" className={btn(answers[i] === "yes")} onClick={() => set(i, "yes")}>Yes</button>
              <button type="button" className={btn(answers[i] === "unsure")} onClick={() => set(i, "unsure")}>Not sure</button>
              <button type="button" className={btn(answers[i] === "no")} onClick={() => set(i, "no")}>No</button>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-card border border-brand bg-surface p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {answered} of {SIGNALS.length} answered
        </p>
        {done ? (
          <>
            <h3 className="mt-3 text-2xl text-ink">{yes} of 10 signals present</h3>
            <p className="mt-3 text-muted">{result}</p>
            <Link href="/contact-us/" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
              Request a Confidential Consultation
            </Link>
          </>
        ) : (
          <p className="mt-3 text-muted">Answer all ten to see what this suggests. Your answers save on this device only.</p>
        )}
      </div>
    </div>
  );
}
