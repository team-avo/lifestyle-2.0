import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/primitives/Container";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Crisis Interventions", href: "/crisis-interventions/" },
  { label: "Family Support", href: "/family-support-services/" },
  { label: "Wellness Program", href: "/tailored-wellness-program/" },
  { label: "Advisory", href: "/advisory/" },
  { label: "Who We Help", href: "/who-we-help/" },
  { label: "About Us", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact-us/" },
];

export function Footer() {
  return (
    <footer className="bg-brand text-white/75">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.logo} alt="Lifestyle Interventions" className="h-10 w-auto" />
          <p className="mt-5 text-sm leading-relaxed text-white/65">{site.footerBlurb}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage">Support</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm lg:grid-cols-1">
            {footerNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-lime">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage">{site.vip.heading}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/65">{site.vip.blurb}</p>
          <Link href="/contact-us/" className="mt-4 inline-block text-sm font-semibold text-lime">
            Confidential Access →
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-lime">{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-lime">{site.email}</a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>{site.copyright}</p>
          <div className="flex gap-5">
            {site.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">{l.label}</Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
