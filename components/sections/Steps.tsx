import { Section, Eyebrow } from "@/components/primitives/Section";

export type Step = { label?: string; title: string; body: string };

export function Steps({
  eyebrow,
  heading,
  intro,
  steps,
  surface = false,
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  steps: Step[];
  surface?: boolean;
}) {
  return (
    <Section className={surface ? "bg-surface" : ""}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {heading && <h2 className="max-w-3xl text-3xl sm:text-4xl text-ink">{heading}</h2>}
      {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
      <ol className="mt-12 space-y-px overflow-hidden rounded-card border border-line">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className={`flex gap-5 p-6 sm:p-8 ${surface ? "bg-bg" : "bg-surface"}`}
          >
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              {s.label && (
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {s.label}
                </span>
              )}
              <h3 className="text-lg text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
