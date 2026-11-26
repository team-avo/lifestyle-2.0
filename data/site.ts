// Global site facts, pulled from the live lifestyleinterventions.com footer.
export const site = {
  name: "Lifestyle Interventions",
  phoneDisplay: "866-826-0985",
  phoneHref: "tel:8668260985",
  email: "info@lifestyleinterventions.com",
  primaryCta: {
    label: "Request a Confidential Consultation",
    href: "/contact-us/",
  },
  vip: {
    heading: "Confidential Access",
    blurb:
      "By invitation only. High-profile cases require the highest level of discretion.",
  },
  footerBlurb:
    "A discreet crisis intervention and recovery support team serving high-profile families with the highest level of confidentiality.",
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-and-conditions/" },
  ],
  copyright: "© Lifestyle Interventions. All rights reserved.",
} as const;
