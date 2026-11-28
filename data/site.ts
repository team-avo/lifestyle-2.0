// Global site facts, pulled from the live lifestyleinterventions.com.
// Images are hotlinked from the live WordPress uploads for now; they get copied
// into /public at cutover.
const WP = "https://lifestyleinterventions.com/wp-content/uploads";

export const site = {
  name: "Lifestyle Interventions",
  phoneDisplay: "866-826-0985",
  phoneHref: "tel:8668260985",
  email: "info@lifestyleinterventions.com",
  logo: `${WP}/2025/12/2110f36c4b87b17063f0bc027b7d9ea6dd9ecea9-1024x431.png.webp`,
  heroImage: `${WP}/2025/12/5dfbc255d3bd015cd7b759ebfc8bb187a816dc27.jpg.webp`,
  primaryCta: {
    label: "Request a Confidential Consultation",
    href: "/contact-us/",
  },
  vip: {
    heading: "VIP Access",
    blurb:
      "By invitation only. High-profile cases require the highest level of discretion.",
  },
  footerBlurb:
    "Crisis intervention services for individuals and their loved ones facing mental health emergencies, from an experienced team of mental health professionals.",
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-and-conditions/" },
  ],
  copyright: "© 2026 Lifestyle Interventions. All rights reserved.",
} as const;
