import { Section, Eyebrow } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { FeatureCards } from "./FeatureCards";
import {
  credentials,
  featuredIn,
  laZones,
  helpfulResources,
  longHaul,
} from "@/data/shared";

export function Credentials({ surface = true }: { surface?: boolean }) {
  return (
    <FeatureCards
      eyebrow="Why us"
      heading="Why families and clinicians choose to work with me"
      features={credentials}
      surface={surface}
    />
  );
}

export function FeaturedIn() {
  return (
    <section className="bg-white py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          As featured in
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {featuredIn.map((f) => (
            <a
              key={f.name}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              title={f.name}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.logo} alt={f.name} className="h-9 w-auto max-w-[150px] object-contain" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServiceArea() {
  return (
    <Section>
      <Eyebrow>Service area</Eyebrow>
      <h2 className="text-3xl sm:text-4xl text-ink">Where we work across Greater Los Angeles</h2>
      <p className="mt-4 max-w-2xl text-muted">
        In person across all six zones. Families outside Greater Los Angeles work with us by
        secure video, with in-person visits when possible.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {laZones.map((z) => (
          <div key={z.zone} className="rounded-card border border-line bg-surface p-6">
            <h3 className="text-lg text-ink">{z.zone}</h3>
            <p className="mt-2 text-sm text-muted">{z.areas}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function LongHaul() {
  return (
    <Section className="bg-surface">
      <Eyebrow>The difference</Eyebrow>
      <h2 className="text-3xl sm:text-4xl text-ink">{longHaul.heading}</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-card border border-line bg-bg p-8">
          <p className="font-serif text-4xl text-muted">{longHaul.a.value}</p>
          <p className="mt-2 text-sm text-muted">{longHaul.a.label}</p>
        </div>
        <div className="rounded-card border border-brand bg-bg p-8">
          <p className="font-serif text-4xl text-brand">{longHaul.b.value}</p>
          <p className="mt-2 text-sm text-muted">{longHaul.b.label}</p>
        </div>
      </div>
      <p className="mt-6 max-w-2xl text-muted">{longHaul.body}</p>
    </Section>
  );
}

export function HelpfulResources() {
  return (
    <Section>
      <Eyebrow>Helpful resources</Eyebrow>
      <h2 className="text-3xl text-ink">Trusted resources</h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {helpfulResources.map((r) => (
          <li key={r.name}>
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-card border border-line bg-surface p-5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              {r.name} ↗
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function FitCheck({
  good,
  notRight,
}: {
  good: string[];
  notRight: string[];
}) {
  return (
    <Section className="bg-surface">
      <Eyebrow>Who it's for</Eyebrow>
      <h2 className="text-3xl sm:text-4xl text-ink">Is this the right step for you?</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-card border border-line bg-bg p-8">
          <h3 className="text-lg text-brand">A good fit if you are</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {good.map((g) => (
              <li key={g} className="flex gap-3">
                <span className="text-brand">✓</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-card border border-line bg-bg p-8">
          <h3 className="text-lg text-ink">Not the right step right now if</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {notRight.map((g) => (
              <li key={g} className="flex gap-3">
                <span className="text-accent">!</span>
                {g}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink">
            In a crisis, call <a href="tel:911" className="font-semibold text-brand">911</a> or
            call or text <a href="tel:988" className="font-semibold text-brand">988</a>.
          </p>
        </div>
      </div>
    </Section>
  );
}
