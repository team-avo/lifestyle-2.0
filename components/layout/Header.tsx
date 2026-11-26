"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/data/nav";
import { site } from "@/data/site";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-tight text-ink">
          Lifestyle <span className="text-brand">Interventions</span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-60 translate-y-1 rounded-card border border-line bg-surface p-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-ink/80 hover:bg-bg hover:text-brand"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href={site.primaryCta.href}>{site.primaryCta.label}</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden rounded-md border border-line px-3 py-2 text-sm"
        >
          Menu
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-surface xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block py-1.5 pl-4 text-sm text-ink/70"
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Button href={site.primaryCta.href} className="mt-3">
              {site.primaryCta.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
