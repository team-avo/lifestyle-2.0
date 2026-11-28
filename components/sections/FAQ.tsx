import { Section, Eyebrow } from "@/components/primitives/Section";

export type QA = { q: string; a: string };

export function FAQ({
  heading = "Frequently Asked Questions",
  items,
  surface = false,
}: {
  heading?: string;
  items: QA[];
  surface?: boolean;
}) {
  return (
    <Section className={surface ? "bg-surface" : ""}>
      <Eyebrow>Common Questions</Eyebrow>
      <h2 className="text-3xl sm:text-4xl text-ink">{heading}</h2>
      <div className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
        {items.map((it) => (
          <details key={it.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink">
              {it.q}
              <span className="text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{it.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
