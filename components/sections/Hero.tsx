import { Section, Eyebrow } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { site } from "@/data/site";

export function Hero() {
  return (
    <Section className="pt-20">
      <div className="max-w-3xl">
        <Eyebrow>Confidential. Professional. Trusted.</Eyebrow>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-ink">
          Discreet Support for Complex Challenges.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Crisis intervention and recovery support for Los Angeles families,
          using the Johnson and Invitational models, delivered with the highest
          level of discretion.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href={site.primaryCta.href}>{site.primaryCta.label}</Button>
          <Button href="/advisory/" variant="outline">
            Explore Advisory
          </Button>
        </div>
      </div>
    </Section>
  );
}
