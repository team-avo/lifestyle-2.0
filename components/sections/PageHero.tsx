import { ReactNode } from "react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { site } from "@/data/site";

// Inner-page hero: navy band, centered, white Lora headline (matches live service pages).
export function PageHero({
  eyebrow,
  title,
  intro,
  primaryCta = site.primaryCta,
  secondaryCta = { label: `Call ${site.phoneDisplay}`, href: site.phoneHref },
  confidential = true,
  children,
}: {
  confidential?: boolean;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  primaryCta?: { label: string; href: string } | null;
  secondaryCta?: { label: string; href: string } | null;
  children?: ReactNode;
}) {
  return (
    <section className="bg-brand">
      <Container className="flex flex-col items-center py-20 text-center sm:py-24">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">{eyebrow}</p>
        )}
        <h1 className="mt-4 max-w-4xl text-4xl text-white sm:text-5xl">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-2xl leading-relaxed text-white/80">{intro}</p>
        )}
        {confidential && (
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
            Confidential
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {primaryCta && <Button href={primaryCta.href} variant="sage">{primaryCta.label}</Button>}
            {secondaryCta && <Button href={secondaryCta.href} variant="ghost">{secondaryCta.label}</Button>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
