// GoHighLevel lead forwarding.
// Posts to the existing, working "Website Leads Intake" inbound webhook that
// already creates the pipeline card + SMS + opportunity note. The webhook URL
// is server-only (env var), never exposed to the browser.

export type LeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  formName: string;
  sourceUrl: string;
};

export async function forwardLeadToGHL(lead: LeadInput): Promise<boolean> {
  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) {
    console.error("GHL_WEBHOOK_URL is not set");
    return false;
  }

  // Payload shape matches what is live and working today.
  const payload = {
    first_name: lead.firstName,
    last_name: lead.lastName,
    full_name: `${lead.firstName} ${lead.lastName}`.trim(),
    email: lead.email,
    phone: lead.phone,
    message: lead.message,
    form_name: lead.formName,
    source: "website",
    source_url: lead.sourceUrl,
    created_at: new Date().toISOString(),
    lead_id: crypto.randomUUID(),
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch (err) {
    console.error("GHL forward failed", err);
    return false;
  }
}
