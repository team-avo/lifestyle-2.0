import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/primitives/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a confidential consultation with the Lifestyle Interventions team.",
};

export default function ContactPage() {
  return (
    <Section className="pt-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Confidential Access</Eyebrow>
          <h1 className="text-4xl text-ink sm:text-5xl">Start with a Conversation.</h1>
          <p className="mt-5 text-muted">
            Every inquiry is handled with complete discretion. Call us directly or
            send a message and we will respond privately.
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
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
