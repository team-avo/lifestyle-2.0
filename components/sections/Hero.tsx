import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { site } from "@/data/site";

// Homepage hero: full-bleed photo with a navy overlay, centered, lime Lora headline.
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={site.heroImage} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-brand/80" />
      <Container className="flex min-h-[560px] flex-col items-center justify-center py-24 text-center">
        <span className="inline-flex overflow-hidden rounded-full border border-white/30 text-xs">
          <span className="bg-sage px-3 py-1 text-white">Lifestyle</span>
          <span className="px-3 py-1 text-white/90">Interventions</span>
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl text-lime sm:text-5xl lg:text-[64px]">
          Discreet Support for Complex Challenges.
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-white/85">
          Lifestyle Interventions provides crisis intervention services for families in Los
          Angeles facing addiction or a mental health emergency. I plan and lead structured
          interventions using the Johnson and Invitational models, help families understand
          their options, and coordinate treatment placement when someone agrees to get help.
        </p>
        <div className="mt-9">
          <Button href={site.primaryCta.href} variant="sage">{site.primaryCta.label}</Button>
        </div>
      </Container>
    </section>
  );
}
