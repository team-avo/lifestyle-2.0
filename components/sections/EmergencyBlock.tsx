import { Container } from "@/components/primitives/Container";

// Site-wide crisis resources. Appears on service + crisis pages.
export function EmergencyBlock() {
  return (
    <section className="bg-brand-dark py-12 text-white">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          If someone is in immediate danger
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          <p className="text-sm leading-relaxed text-white/80">
            Call <a href="tel:911" className="font-semibold text-white">911</a> for an
            immediate danger to life. Say clearly that it is a mental health crisis.
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            Call or text <a href="tel:988" className="font-semibold text-white">988</a>,
            the Suicide &amp; Crisis Lifeline. Confidential, any hour, no cost.
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            Los Angeles County: the DMH ACCESS line,{" "}
            <a href="tel:8008547771" className="font-semibold text-white">800-854-7771</a>,
            can dispatch a mobile crisis team.
          </p>
        </div>
      </Container>
    </section>
  );
}
