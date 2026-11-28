// Content blocks that repeat across many pages on the live site.

export const credentials = [
  {
    kicker: "CADC-III",
    title: "Credentialed",
    body: "Certified Alcohol and Drug Counselor III (Sober College), one of the highest-level counseling credentials in California.",
  },
  {
    kicker: "CCMI-M",
    title: "Intervention-specific",
    body: "Certified Case Manager Interventionist (Breining Institute), the intervention-methodology credential. The strongest practitioners hold both.",
  },
  {
    kicker: "2 Models",
    title: "Matched to your family",
    body: "Works in both the Johnson Model and the Invitational Model, and recommends the one that fits your family.",
  },
];

// Logos + links copied from the live homepage strip (hotlinked until cutover).
const U = "https://lifestyleinterventions.com/wp-content/uploads";
export const featuredIn = [
  { name: "The Addicted Mind Podcast", logo: `${U}/2026/05/logo_1_transparent-1.png.webp`, href: "https://theaddictedmind.com/163-healing-as-a-family-with-chris-howard/" },
  { name: "The Circle with Jeffrey Saad", logo: `${U}/2026/05/WhatsApp-Image-2026-05-29-at-17.37.14.jpeg.webp`, href: "https://jeffreysaad.com/the-amazing-chris-howard-he-saved-our-sons-life/" },
  { name: "Amazon Music", logo: `${U}/2026/05/amazon_music_logo_solid_RGB_BLK.png.webp`, href: "https://music.amazon.com/podcasts/2a383c6c-0c14-4970-9a3f-b4c944123c63/episodes/a80277b8-61f8-404b-bf24-dad0e19dd9a8" },
  { name: "iHeartRadio", logo: `${U}/2026/05/iheartradio-logo-internet-radio-pandora-advertising-radio-thumbnail.jpg.webp`, href: "https://www.iheart.com/podcast/1333-the-unbroken-with-sam-dav-288803192/episode/63-family-support-meeting-special-308208195/" },
  { name: "YouTube", logo: `${U}/2026/05/YouTube_Logo_2017.svg_.webp`, href: "https://www.youtube.com/watch?v=gDr6ItIKPnM" },
  { name: "Psychology Today", logo: `${U}/2026/05/Psychology-Today-Logo-Vector.svg-.png.webp`, href: "https://www.psychologytoday.com/us/therapists/chris-howard-los-angeles-ca/793755" },
  { name: "VoyageLA", logo: `${U}/2026/05/logo1.png.webp`, href: "https://voyagela.com/interview/meet-chris-howard-of-los-angeles/" },
  { name: "AlcoholFree.com", logo: `${U}/2026/05/afc_logo_2026-scaled.webp`, href: "https://www.alcoholfree.com/listen/podcasts/episode/163-healing-as-a-family-with-chris-howard" },
  { name: "PragerU", logo: `${U}/2026/08/PragerU_logo.png.webp`, href: "https://www.prageru.com/videos/improving-a-conscious-connection-how-prayer-and-meditation-overcomes-anxiety" },
];

export const laZones = [
  { zone: "West LA", areas: "Sawtelle, Brentwood, Pacific Palisades, Santa Monica" },
  { zone: "Beverly Hills", areas: "West Hollywood, Hollywood Hills, Bel Air" },
  { zone: "Hancock Park", areas: "Mid-Wilshire, Larchmont, Silver Lake" },
  { zone: "San Fernando Valley", areas: "Sherman Oaks, Studio City, Encino, Tarzana, Calabasas" },
  { zone: "Pasadena", areas: "San Marino, Glendale, La Cañada Flintridge" },
  { zone: "South Bay", areas: "Manhattan Beach, Hermosa Beach, Palos Verdes" },
];

export const helpfulResources = [
  { name: "SAMHSA National Helpline", href: "https://www.samhsa.gov/find-help/national-helpline" },
  { name: "988 Suicide & Crisis Lifeline", href: "https://988lifeline.org/" },
  { name: "NIMH: Find Help", href: "https://www.nimh.nih.gov/health/find-help" },
  { name: "NIDA: Treatment", href: "https://nida.nih.gov/research-topics/treatment" },
  { name: "FindTreatment.gov", href: "https://findtreatment.gov/" },
  { name: "California DHCS Provider Search", href: "https://www.dhcs.ca.gov/services/Pages/ProviderSearch.aspx" },
];

export const longHaul = {
  heading: "Built for the long haul",
  a: { value: "30 days", label: "The typical acute treatment window" },
  b: { value: "Weeks → months → years", label: "A Lifestyle Interventions engagement" },
  body: "Recovery is not measured in 30-day blocks. Real change takes a long arc, and we stay close for as long as a family needs.",
};
