import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/sections/Prose";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Steps } from "@/components/sections/Steps";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Teen Mentoring & Family Support Services in Los Angeles",
  description:
    "Recovery mentoring, parent and teen mentoring, adventure mentoring, discreet drug testing, and treatment referral coordination in Los Angeles.",
};

export default function SignatureSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Ongoing Monitoring"
        title="Signature Support Services"
        intro="A concierge-level model for families and professionals who need sustained, coordinated oversight, matched to each situation."
        primaryCta={{ label: "Contact Us Today", href: "/contact-us/" }}
      />

      <FeatureCards
        surface
        eyebrow="Clear Path Services"
        heading="Structure and accountability for families"
        columns={2}
        features={[
          { kicker: "01", title: "Ongoing Monitoring", body: "Discreet, in-home random drug testing for teens and young adults, with a structured approach that builds trust while keeping loved ones on track." },
          { kicker: "02", title: "Referral Coordination", body: "Comprehensive guidance selecting the right treatment center or clinical care. Basic coordination is provided at no cost." },
        ]}
      />

      <FeatureCards
        eyebrow="Coaching"
        heading="Personalized recovery coaching and mentoring"
        intro="Accountability, practical guidance, and actionable strategies toward independence."
        features={[
          { kicker: "01", title: "Parent Mentoring", body: "Practical support for parents navigating recovery with a loved one." },
          { kicker: "02", title: "Teen & Young Adult Mentoring", body: "Life skills and self-reliance for younger clients." },
          { kicker: "03", title: "Adventure Mentoring", body: "Outdoor, adventure-based mentoring for resilience and growth." },
        ]}
      />

      <Prose
        surface
        eyebrow="In-depth"
        heading="What is recovery mentoring?"
        paragraphs={[
          "Recovery mentoring pairs individuals with trained mentors for accountability, life skills, and real-world guidance. It differs from clinical therapy by focusing on daily living rather than clinical diagnosis.",
        ]}
      />

      <Prose
        eyebrow="After treatment"
        heading="Why ongoing support matters after treatment"
        paragraphs={["The most vulnerable period often begins after treatment ends. Mentoring bridges the gap."]}
        bullets={[
          "Returning to the environments and triggers that came before.",
          "Reintegrating into work or school.",
          "Repairing relationships.",
          "Handling daily responsibilities without clinical structure.",
          "Social situations where substances are present.",
          "Maintaining coping strategies over time.",
        ]}
      />

      <FeatureCards
        surface
        eyebrow="Our services"
        heading="Our Signature Support Services"
        columns={2}
        features={[
          { kicker: "01", title: "One-on-One Recovery Coaching", body: "A dedicated mentor across daily recovery in real-world settings: accountability check-ins, goals and milestones, trigger management, routines, life skills, sober socialization, relapse prevention, and coordination with therapists." },
          { kicker: "02", title: "Parent Mentoring", body: "Communication, boundary-setting, supporting versus enabling, managing guilt and grief, protecting other family members, and navigating transitions like discharge or a return to school." },
          { kicker: "03", title: "Teen & Young Adult Mentoring", body: "Time management, financial basics, peer relationships, academic or vocational goals, emotion regulation without substances, and digital wellness. Teens who resist therapy often engage here." },
          { kicker: "04", title: "Adventure Mentoring", body: "Guided hiking, surfing, rock climbing, and team challenges. Not recreational therapy: each activity has objectives and is followed by reflection." },
        ]}
      />

      <FeatureCards
        eyebrow="Clear Path"
        heading="Clear Path Services"
        columns={2}
        features={[
          { kicker: "01", title: "Discreet Drug Testing for Teens and Young Adults", body: "In-home random testing framed as a neutral checkpoint, with expectations set in a family agreement and guidance on discussing results." },
          { kicker: "02", title: "Treatment Referral Coordination", body: "Understand residential, PHP, IOP, and outpatient levels; evaluate centers on licensing, accreditation, approach, and staff; navigate insurance; and coordinate admission." },
        ]}
      />

      <ComparisonTable
        eyebrow="Comparison"
        heading="Recovery Mentoring vs. Traditional Therapy"
        intro="The most effective plans often combine both."
        colA="Recovery Mentoring"
        colB="Traditional Therapy"
        rows={[
          { label: "Provider", a: "Trained recovery mentor or coach", b: "Licensed psychologist, LMFT, LCSW, or psychiatrist" },
          { label: "Focus", a: "Daily living, accountability, life skills, triggers", b: "Diagnosis, clinical treatment, trauma, emotional regulation" },
          { label: "Setting", a: "Home, community, outdoors, virtual", b: "Clinical office, typically 50-minute sessions" },
          { label: "Frequency", a: "Daily to weekly", b: "Typically weekly or biweekly" },
          { label: "Best for", a: "Post-treatment transitions, teens resisting clinical settings", b: "Diagnosed conditions, trauma, co-occurring disorders" },
          { label: "Insurance", a: "Typically private pay", b: "Often covered" },
        ]}
      />

      <Steps
        surface
        eyebrow="Getting started"
        heading="What to expect when you reach out"
        intro="Most families begin within 24 to 48 hours."
        steps={[
          { title: "Consultation", body: "Call or submit a form. No pressure or commitment." },
          { title: "Personalized assessment", body: "Recovery stage, family dynamics, and challenges, with a recommended mix of mentoring, monitoring, and support." },
          { title: "Mentor matching", body: "Matched on experience, personality, and approach." },
          { title: "Active support begins", body: "Schedule, frequency, location, and focus adapt, coordinated with your existing providers." },
          { title: "Ongoing review and adjustment", body: "Regular progress reviews, with families included at their comfort level." },
        ]}
      />

      <FAQ
        items={[
          { q: "What is recovery mentoring?", a: "Accountability and life-skills support. It is not clinical treatment." },
          { q: "How is it different from therapy?", a: "It is real-world support rather than clinical work, and the two are complementary." },
          { q: "What is adventure mentoring?", a: "Outdoor activities used as the setting for recovery work." },
          { q: "Do you offer drug testing for teens?", a: "Yes. Discreet in-home testing under Clear Path Services, with results shared confidentially with the family." },
          { q: "Can you help us find a treatment center?", a: "Yes, through Treatment Referral Coordination." },
          { q: "How long does mentoring last?", a: "Typically 3 to 12 months, sometimes with longer-term check-ins." },
          { q: "Do you work with teens and young adults?", a: "Yes, with dedicated programs." },
          { q: "How much do services cost?", a: "Billing depends on session frequency and intensity. Call for a quote." },
        ]}
      />
      <CTABand />
    </>
  );
}
