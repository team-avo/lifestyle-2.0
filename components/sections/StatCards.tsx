import { Section, Eyebrow } from "@/components/primitives/Section";

export type Stat = { value: string; title: string; body: string };

export function StatCards({
  eyebrow,
  heading,
  stats,
  surface = true,
}: {
  eyebrow?: string;
  heading?: string;
  stats: Stat[];
  surface?: boolean;
}) {
  return (
    <Section className={surface ? "bg-surface" : ""}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {heading && <h2 className="max-w-3xl text-3xl sm:text-4xl text-ink">{heading}</h2>}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.title} className={`rounded-card border border-line p-8 ${surface ? "bg-bg" : "bg-surface"}`}>
            <p className="font-serif text-4xl text-brand">{s.value}</p>
            <h3 className="mt-3 text-lg text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
