# Lifestyle Interventions, Rebuild (lifestyle-2.0)

Rebuild of lifestyleinterventions.com in Next.js 15 + TypeScript + Tailwind.
See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full plan.

## Status

Phase 0 skeleton: design tokens, layout (Header / Footer / Nav), a few homepage
sections, the programmatic location template, a working contact form, and the
`/api/lead` GHL route. Content (76 blog posts, 48 location pages, remaining
marketing pages) is not built yet.

## Run

```bash
npm install
cp .env.example .env.local   # fill GHL_WEBHOOK_URL to send real leads
npm run dev                  # http://localhost:3000
```

Without `GHL_WEBHOOK_URL`, the contact form validates and reCAPTCHA is skipped,
but no lead is forwarded (it returns a 502). Set it to the "Website Leads Intake"
inbound webhook to go end-to-end.

## Layout

```
app/            routes (trailingSlash:true to match WordPress)
  api/lead/     Node backend: validate + reCAPTCHA + forward to GHL
components/
  primitives/   Button, Container, Section
  layout/       Header, Footer
  sections/     Hero, ServiceCards, CTABand, ContactForm
data/           site, nav, locations (data-driven pages)
lib/ghl.ts      GHL webhook client
styles tokens   app/globals.css (:root CSS variables)
```

Deploys to Vercel from `main`. Pushes come from the `myselfabhi` account.
