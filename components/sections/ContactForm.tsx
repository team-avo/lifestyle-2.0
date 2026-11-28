"use client";

import { LeadForm } from "./LeadForm";

// Backwards-compatible wrapper: the full Contact Us form.
export function ContactForm() {
  return <LeadForm variant="full" formName="Contact Us" />;
}
