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
    <header className="sticky top-0 z-50 bg-brand">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Lifestyle Interventions home" className="flex-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.logo} alt="Lifestyle Interventions" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative py-6">
              <Link
                href={item.href}
                className="text-sm font-semibold text-white/90 transition-colors hover:text-lime"
              >
                {item.label}
                {item.children && <span className="ml-1 text-xs">▾</span>}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-60 translate-y-1 rounded-card bg-white p-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-ink hover:bg-surface"
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
          <Button href={site.primaryCta.href} variant="sage">{site.primaryCta.label}</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/30 px-4 py-2 text-sm text-white xl:hidden"
        >
          Menu
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-brand xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href === "#" ? item.children?.[0].href ?? "/" : item.href}
                  className="block py-2 text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block py-1.5 pl-4 text-sm text-white/70"
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="mt-3">
              <Button href={site.primaryCta.href} variant="sage">{site.primaryCta.label}</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
