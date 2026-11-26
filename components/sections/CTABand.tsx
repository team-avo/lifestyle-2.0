import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { site } from "@/data/site";

export function CTABand() {
  return (
    <section className="bg-brand py-20 text-white">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-white sm:text-4xl">Start with a Conversation.</h2>
          <p className="mt-4 text-white/80">
            Crisis intervention and recovery support in Los Angeles, handled with
            complete confidentiality.
          </p>
        </div>
        <Button
          href={site.primaryCta.href}
          variant="outline"
          className="border-white/40 bg-transparent text-white hover:border-white hover:text-white"
        >
          {site.primaryCta.label}
        </Button>
      </Container>
    </section>
  );
}
