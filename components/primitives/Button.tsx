import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark focus-visible:outline-brand",
  outline:
    "border border-line text-ink hover:border-brand hover:text-brand bg-surface",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
