"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Band = { max: number; title: string; body: string; next: string[] };

const OPTIONS: [string, number][] = [
  ["Never", 0],
  ["Rarely", 1],
  ["Often", 2],
  ["Frequently", 3],
];

/*
  18-question, 0-3 scored family assessment, ported from the live WP tools.
  Flow (same as live): answer all questions -> name/email gate -> lead posted
  to /api/lead/ -> result shown on the page. Answers themselves never leave the
  browser; `sendScore` controls whether the total + band goes with the lead
  (the live Family Intervention Assessment sends it, the other does not).
*/
export function Assessment({
  questions,
  bands,
  formName,
  sendScore = false,
  storageKey,
  showTally = false,
  printable = false,
}: {
  questions: string[];
  bands: Band[];
  formName: string;
  sendScore?: boolean;
  storageKey?: string;
  showTally?: boolean;
  printable?: boolean;
}) {
  const total = questions.length;
  const [answers, setAnswers] = useState<(number | null)[]>(Array(total).fill(null));
  const [stage, setStage] = useState<"questions" | "gate" | "result">("questions");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const gateRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!storageKey) return;
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? "null");
      if (Array.isArray(saved) && saved.length === total) setAnswers(saved);
    } catch {}
  }, [storageKey, total]);

  function answer(i: number, v: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = v;
      if (storageKey) {
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch {}
      }
      return next;
    });
  }

  const answered = answers.filter((a) => a !== null).length;
  const score = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const band = bands.find((b) => score <= b.max) ?? bands[bands.length - 1];
  const freq = answers.filter((a) => a === 3).length;
  const never = answers.filter((a) => a === 0).length;
  const max = total * 3;

  useEffect(() => {
    const el = stage === "gate" ? gateRef.current : stage === "result" ? resultRef.current : null;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    el?.focus();
  }, [stage]);

  async function submitLead(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const firstName = (data.firstName ?? "").trim();
    const email = (data.email ?? "").trim();
    if (!firstName) return setError("Please enter your first name.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setError("Please enter a valid email address.");
    setError("");
    setSending(true);
    try {
      await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          phone: (data.phone ?? "").trim(),
          formName,
          ...(sendScore ? { score: `${score} of ${max} (${band.title})` } : {}),
        }),
      });
    } catch {
      // Same as live: the result is shown even if the lead could not be sent.
    }
    setSending(false);
    setStage("result");
  }

  function reset() {
    setAnswers(Array(total).fill(null));
    if (storageKey) {
      try {
        localStorage.removeItem(storageKey);
      } catch {}
    }
    setStage("questions");
    document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" });
  }

  const optBtn = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
      active ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-brand"
    }`;
  const field = "w-full rounded-md border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand";

  return (
    <div>
      <ol className="space-y-4">
        {questions.map((q, i) => (
          <li key={i} className="rounded-card border border-line bg-white p-5 sm:p-6">
            <fieldset>
              <legend className="flex gap-3 text-ink">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-surface text-xs font-semibold text-accent">
                  {i + 1}
                </span>
                <span>
                  <span className="block text-xs text-muted">In the past three months, has this been true?</span>
                  <span className="mt-1 block">{q}</span>
                </span>
              </legend>
              <div className="mt-4 flex flex-wrap gap-2 pl-10" role="radiogroup" aria-label={`Question ${i + 1}`}>
                {OPTIONS.map(([label, v]) => (
                  <button
                    key={label}
                    type="button"
                    role="radio"
                    aria-checked={answers[i] === v}
                    className={optBtn(answers[i] === v)}
                    onClick={() => answer(i, v)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          disabled={answered < total}
          onClick={() => setStage(stage === "result" ? "result" : "gate")}
          className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          See My Results
        </button>
        <p className="text-sm text-muted" aria-live="polite">
          {answered} of {total} answered
          {storageKey && " · Your answers save on this device only."}
        </p>
      </div>

      {stage === "gate" && (
        <div ref={gateRef} tabIndex={-1} className="mt-10 scroll-mt-28 rounded-card border border-brand bg-surface p-8 outline-none">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">One step left</p>
          <h3 className="mt-2 text-2xl text-ink">Enter your details to see where things stand</h3>
          <p className="mt-2 text-sm text-muted">
            Your result appears right here. Your answers stay in your browser; your name and
            email come to me so I can follow up if you would like.
          </p>
          <form onSubmit={submitLead} noValidate className="mt-6 grid max-w-md gap-3">
            <input name="firstName" placeholder="First name" autoComplete="given-name" className={field} />
            <input name="email" type="email" placeholder="Email address" autoComplete="email" className={field} />
            <input name="phone" type="tel" placeholder="Phone (optional)" autoComplete="tel" className={field} />
            {error && <p className="text-sm text-red-700">{error}</p>}
            <button
              type="submit"
              disabled={sending}
              className="mt-1 rounded-full bg-sage px-7 py-3 text-sm font-semibold text-white hover:bg-[#8a9e90] disabled:opacity-60"
            >
              {sending ? "One moment..." : "Show My Results"}
            </button>
            <p className="text-xs text-muted">
              Please do not include details about your loved one&apos;s health. See our{" "}
              <Link href="/privacy-policy/" className="underline">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      )}

      {stage === "result" && (
        <div ref={resultRef} tabIndex={-1} className="mt-10 scroll-mt-28 rounded-card border border-brand bg-white p-8 outline-none">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Your result</p>
          <h3 className="mt-2 text-3xl text-ink">{band.title}</h3>
          <p className="mt-2 font-serif text-lg text-teal">
            Your score: {score} out of {max}
          </p>
          {showTally && (
            <p className="mt-1 text-sm text-muted">
              You answered frequently to {freq} question{freq === 1 ? "" : "s"}, and never to {never}.
            </p>
          )}
          <p className="mt-4 leading-relaxed text-muted">{band.body}</p>
          {band.next.length > 0 && (
            <>
              <h4 className="mt-6 text-lg text-ink">What I would suggest next</h4>
              <ul className="mt-3 space-y-2">
                {band.next.map((n) => (
                  <li key={n} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sage" />
                    {n}
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="mt-6 rounded-md bg-surface p-4 text-xs leading-relaxed text-muted">
            This is a frequency count of the answers you gave, not a clinical measure. It does not
            diagnose anything, in you or in anyone else.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact-us/" className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
              Request a Confidential Consultation →
            </Link>
            {printable && (
              <button type="button" onClick={() => window.print()} className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-brand">
                Print my result
              </button>
            )}
            <button type="button" onClick={reset} className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-brand">
              Start over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
