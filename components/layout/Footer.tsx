import Link from "next/link";
import { nav } from "@/data/nav";
import { site } from "@/data/site";
import { Container } from "@/components/primitives/Container";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-lg text-white">Lifestyle Interventions</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {site.footerBlurb}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {site.vip.heading}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {site.vip.blurb}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>{site.copyright}</p>
          <div className="flex gap-5">
            {site.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
