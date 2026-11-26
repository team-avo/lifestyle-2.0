// Header navigation, mirrored 1:1 from the live site nav tree.
export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Signature Services",
    href: "#",
    children: [
      { label: "Family Support", href: "/family-support-services/" },
      { label: "Crisis Interventions", href: "/crisis-interventions/" },
      { label: "Wellness Program", href: "/tailored-wellness-program/" },
      { label: "Ongoing Monitoring", href: "/signature-support-services/" },
    ],
  },
  { label: "Advisory", href: "/advisory/" },
  { label: "About Us", href: "/about/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Blog", href: "/blog/" },
];
