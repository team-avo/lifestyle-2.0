import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </p>
  );
}
