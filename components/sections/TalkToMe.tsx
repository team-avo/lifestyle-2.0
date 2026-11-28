import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { site } from "@/data/site";

export function TalkToMe({
  heading = "Talk with me in confidence",
  body = "Every conversation is confidential, with no obligation. Call or email and we will talk through your situation.",
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
          <Button href={site.phoneHref} variant="sage">Call {site.phoneDisplay}</Button>
          <Button href={`mailto:${site.email}`} variant="ghost">Email me</Button>
        </div>
      </Container>
    </section>
  );
}
