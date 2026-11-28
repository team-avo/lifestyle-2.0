import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { site } from "@/data/site";

export function CTABand({
  heading = "Start with a Conversation",
  body = "Crisis intervention and recovery support in Los Angeles, handled with complete confidentiality.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand py-20">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-lime sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-white/80">{body}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href={site.primaryCta.href} variant="sage">{site.primaryCta.label}</Button>
          <Button href={site.phoneHref} variant="ghost">Call {site.phoneDisplay}</Button>
        </div>
      </Container>
    </section>
  );
}
