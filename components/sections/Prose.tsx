import { ReactNode } from "react";
import { Section, Eyebrow } from "@/components/primitives/Section";

// A heading + body-copy block. Pass paragraphs as an array, optional bullet list.
export function Prose({
  eyebrow,
  heading,
  paragraphs = [],
  bullets,
  surface = false,
  children,
}: {
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  surface?: boolean;
  children?: ReactNode;
}) {
  return (
    <Section className={surface ? "bg-surface" : ""}>
      <div className="max-w-3xl">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {heading && <h2 className="text-3xl sm:text-4xl text-ink">{heading}</h2>}
        {paragraphs.map((p, i) => (
          <p key={i} className="mt-5 leading-relaxed text-muted">
            {p}
          </p>
        ))}
        {bullets && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-muted">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </Section>
  );
}
