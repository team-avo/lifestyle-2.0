// Location pages are generated from this data by one template
// (app/interventionist-[location]/page.tsx). Adding a state or city later
// is a single entry here, not a new page. Seeded with a few; the full 42
// state/city set gets filled during Phase 3.
export type Location = {
  slug: string; // becomes /interventionist-<slug>/
  name: string; // "California", "Beverly Hills"
  kind: "state" | "city";
  intro: string;
};

export const locations: Location[] = [
  {
    slug: "california",
    name: "California",
    kind: "state",
    intro:
      "Discreet crisis intervention and recovery support for families across California.",
  },
  {
    slug: "new-york",
    name: "New York",
    kind: "state",
    intro:
      "Confidential interventionist services for families throughout New York.",
  },
  {
    slug: "beverly-hills",
    name: "Beverly Hills",
    kind: "city",
    intro:
      "Private, high-discretion intervention support for Beverly Hills families.",
  },
];

export const locationSlugs = locations.map((l) => l.slug);
