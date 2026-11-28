import Link from "next/link";
import { Section, Eyebrow } from "@/components/primitives/Section";

export type Feature = {
  kicker?: string;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
};

export function FeatureCards({
  eyebrow,
  heading,
  intro,
  features,
  columns = 3,
  surface = false,
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  surface?: boolean;
}) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <Section className={surface ? "bg-surface" : ""}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {heading && <h2 className="max-w-3xl text-3xl sm:text-4xl text-ink">{heading}</h2>}
      {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
      <div className={`mt-12 grid gap-6 ${cols}`}>
        {features.map((f) => {
          const inner = (
            <>
              {f.kicker && (
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {f.kicker}
                </span>
              )}
              <h3 className="mt-2 text-xl text-ink">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
              {f.href && f.linkLabel && (
                <span className="mt-6 inline-block text-sm font-semibold text-brand group-hover:text-accent">
                  {f.linkLabel} →
                </span>
              )}
            </>
          );
          const cls = `group rounded-card border border-line p-8 ${surface ? "bg-bg" : "bg-surface"} ${f.href ? "transition-shadow hover:shadow-card" : ""}`;
          return f.href ? (
            <Link key={f.title} href={f.href} className={cls}>
              {inner}
            </Link>
          ) : (
            <div key={f.title} className={cls}>
              {inner}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
