"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formName: "Contact Us" }),
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
        <h3 className="text-xl text-ink">Thank you.</h3>
        <p className="mt-2 text-muted">
          Your message has been received. We will reach out discreetly.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-brand";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="firstName" placeholder="First name" className={field} required />
        <input name="lastName" placeholder="Last name" className={field} />
      </div>
      <input name="email" type="email" placeholder="Email" className={field} required />
      <input name="phone" type="tel" placeholder="Phone" className={field} required />
      <textarea name="message" placeholder="How can we help?" rows={5} className={field} />
      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request a Confidential Consultation"}
      </button>
    </form>
  );
}
