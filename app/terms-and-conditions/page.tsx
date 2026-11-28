import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Terms & Conditions | Family Support, Crisis & Wellness Care",
  description: "The Lifestyle Interventions terms and conditions.",
};

export default function TermsPage() {
  return <LegalPage title="Terms and Conditions" path="/terms-and-conditions/" />;
}
