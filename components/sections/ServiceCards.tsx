import Link from "next/link";
import { Section, Eyebrow } from "@/components/primitives/Section";

const services = [
  {
    title: "Crisis Interventions",
    body: "Immediate, structured intervention when a family reaches a breaking point.",
    href: "/crisis-interventions/",
  },
  {
    title: "Wellness Programs",
    body: "Individualized, ongoing care designed around lasting results.",
    href: "/tailored-wellness-program/",
  },
  {
    title: "Ongoing Monitoring",
    body: "Discreet long-term oversight and accountability after intervention.",
    href: "/signature-support-services/",
  },
];

export function ServiceCards() {
  return (
    <Section className="bg-surface">
      <Eyebrow>Signature Services</Eyebrow>
      <h2 className="text-3xl sm:text-4xl text-ink">Stability Through Structure.</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group rounded-card border border-line bg-bg p-8 transition-shadow hover:shadow-card"
          >
            <h3 className="text-xl text-ink">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
            <span className="mt-6 inline-block text-sm font-semibold text-brand group-hover:text-accent">
              Explore More →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
