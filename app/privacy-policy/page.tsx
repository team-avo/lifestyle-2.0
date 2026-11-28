import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "How We Protect Your Privacy & Confidentiality",
  description: "The Lifestyle Interventions privacy policy.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" path="/privacy-policy/" />;
}
