import { Section } from "@/components/primitives/Section";

// NOTE: legal body text here mirrors the live policy's sections. Before launch,
// paste the exact live wording into each section (legal text must be verbatim).
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro?: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <Section className="pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl text-ink sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-muted">Last Updated: {updated}</p>
        {intro && <p className="mt-8 leading-relaxed text-muted">{intro}</p>}
        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl text-ink">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
}
