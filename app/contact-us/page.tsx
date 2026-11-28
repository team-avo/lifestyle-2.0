import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/primitives/Section";
import { LeadForm } from "@/components/sections/LeadForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Intervention & Recovery Support Team",
  description:
    "Request a confidential consultation with the Lifestyle Interventions team.",
};

export default function ContactPage() {
  return (
    <Section className="pt-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Let&apos;s Start Talking</Eyebrow>
          <h1 className="text-4xl text-ink sm:text-5xl">Contact Us</h1>
          <h2 className="mt-6 text-2xl text-ink">Get in Touch. We&apos;re Here for You.</h2>
          <p className="mt-4 text-muted">
            Our team is available for any inquiries or support you may need. Every
            conversation is handled with complete discretion, and we look forward to
            hearing from you.
          </p>
          <div className="mt-8 space-y-2 text-sm">
            <p>
              <span className="text-muted">Phone: </span>
              <a href={site.phoneHref} className="font-semibold text-brand">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="text-muted">Email: </span>
              <a href={`mailto:${site.email}`} className="font-semibold text-brand">
                {site.email}
              </a>
            </p>
          </div>
        </div>
        <div>
          <LeadForm variant="full" formName="Contact Us" />
        </div>
      </div>
    </Section>
  );
}
