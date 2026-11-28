"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

// "full"   = Contact Us form (name, email + confirm, phone, message, SMS consent)
// "magnet" = guide/checklist download form (first name, email, optional phone)
export function LeadForm({
  variant = "full",
  formName = "Contact Us",
  submitLabel,
  successTitle = "Thank you.",
  successText = "Your message has been received. We will reach out discreetly.",
}: {
  variant?: "full" | "magnet";
  formName?: string;
  submitLabel?: string;
  successTitle?: string;
  successText?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const label =
    submitLabel ?? (variant === "full" ? "Send Message" : "Send It to Me");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (variant === "full" && data.email !== data.confirmEmail) {
      setStatus("error");
      setError("Email addresses do not match.");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      // Trailing slash matters: trailingSlash:true would 308-redirect "/api/lead".
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formName }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please call us.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-card border border-line bg-surface p-8">
        <h3 className="text-xl text-ink">{successTitle}</h3>
        <p className="mt-2 text-muted">{successText}</p>
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-brand";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {variant === "full" ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="firstName" placeholder="First name" className={field} required />
            <input name="lastName" placeholder="Last name" className={field} required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="email" type="email" placeholder="Email" className={field} required />
            <input name="confirmEmail" type="email" placeholder="Confirm email" className={field} required />
          </div>
          <input name="phone" type="tel" placeholder="Phone" className={field} required />
          <textarea
            name="message"
            placeholder="Please let us know about your situation"
            rows={5}
            className={field}
          />
          <label className="flex gap-3 text-xs leading-relaxed text-muted">
            <input type="checkbox" name="smsTransactional" className="mt-0.5" />
            I agree to receive text messages about appointment reminders, account updates, and
            replies to my questions. Message frequency varies. Message and data rates may apply.
            Reply HELP for help, STOP to opt out.
          </label>
          <label className="flex gap-3 text-xs leading-relaxed text-muted">
            <input type="checkbox" name="smsMarketing" className="mt-0.5" />
            I agree to receive text messages about special offers and new program announcements.
            Message frequency varies. Message and data rates may apply. Reply HELP for help, STOP
            to opt out.
          </label>
        </>
      ) : (
        <>
          <input name="firstName" placeholder="First name" className={field} required />
          <input name="email" type="email" placeholder="Email address" className={field} required />
          <input name="phone" type="tel" placeholder="Phone (optional)" className={field} />
        </>
      )}

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : label}
      </button>
      <p className="text-xs text-muted">
        Your information stays private and is never shared. Please do not include personal
        health details. See our{" "}
        <Link href="/privacy-policy/" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
