import Link from "next/link";
import { ReactNode } from "react";

// primary/outline sit on light backgrounds; sage/ghost sit on navy or imagery.
type Variant = "primary" | "outline" | "sage" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-ink/20 bg-white text-ink hover:border-ink",
  sage: "bg-sage text-white hover:bg-[#8a9e90]",
  ghost: "border border-white/40 text-white hover:border-white hover:bg-white/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = variant === "primary" || variant === "sage",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${styles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <span aria-hidden>→</span>}
    </>
  );
  // tel:, mailto:, and #anchors are plain links.
  return /^(tel:|mailto:|#|https?:)/.test(href) ? (
    <a href={href} className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}
