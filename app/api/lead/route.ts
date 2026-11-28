import { NextRequest, NextResponse } from "next/server";
import { forwardLeadToGHL } from "@/lib/ghl";

// The "Node.js backend": the only server-side work on the site is accepting a
// lead, verifying reCAPTCHA, and forwarding to GHL. One route handler covers it.

async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET;
  // In dev / before keys are set, skip verification so the form is testable.
  if (!secret) return true;
  if (!token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success: boolean; score?: number };
    return data.success && (data.score === undefined || data.score >= 0.5);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const formName = String(body.formName ?? "Contact Us").trim();
  // Optional assessment result line (only the Family Intervention Assessment
  // sends one, matching the live site). Prepended to the message for GHL.
  const score = String(body.score ?? "").trim().slice(0, 120);
  const rawMessage = String(body.message ?? "").trim();
  const message = [score && `Assessment result: ${score}`, rawMessage].filter(Boolean).join("\n");

  // Phone is optional: guide and assessment forms only ask for name + email.
  // (The Contact Us form still requires phone in the browser.)
  if (!firstName || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "First name and a valid email are required." },
      { status: 422 }
    );
  }

  const human = await verifyRecaptcha(body.recaptchaToken as string | undefined);
  if (!human) {
    return NextResponse.json(
      { ok: false, error: "reCAPTCHA verification failed." },
      { status: 403 }
    );
  }

  const ok = await forwardLeadToGHL({
    firstName,
    lastName,
    email,
    phone,
    message,
    formName,
    sourceUrl: req.headers.get("referer") ?? "",
  });

  if (!ok) {
    return NextResponse.json(
      { ok: false, error: "Could not submit right now. Please call us." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
