import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "How We Protect Your Privacy & Confidentiality",
  description: "The Lifestyle Interventions privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 25, 2026"
      intro="This policy applies to this website and any services that display or link to it. By using the site, you accept this policy."
      sections={[
        { heading: "1. What Information We Collect", body: ["Information you provide through contact and consultation forms (name, phone, email, and your inquiry), phone calls, live chat, and SMS opt-in consent. We also collect technical data automatically, such as browser, pages visited, referrers, device, and IP address. We do not collect sensitive medical information through forms."] },
        { heading: "2. How We Use Your Information", body: ["To respond to inquiries, schedule consultations, send reminders and care messages by phone, email, or SMS, improve the site, comply with the law, and protect against fraud. We do not use your information in ways incompatible with these purposes without your consent."] },
        { heading: "3. SMS Opt-In Details", body: ["Transactional and promotional SMS consent are separate. Message frequency varies, and message and data rates may apply. Reply STOP, END, CANCEL, UNSUBSCRIBE, or STOP2END to opt out. Reply HELP, or call 866-826-0985, for help."] },
        { heading: "4. Cookie and Tracking Information", body: ["We use essential, analytics (such as Google Analytics), and marketing cookies, which you can control in your browser. Do Not Track signals are honored."] },
        { heading: "5. Data Security Practices", body: ["We use encryption in transit, access controls, audits, and secure storage. No system is absolutely secure, and we will notify you of any breach as required."] },
        { heading: "6. User Rights: Unsubscribe, Update, and Access", body: ["You may unsubscribe from SMS and email, and request access to, correction of, or deletion of your information, or withdraw consent. Contact info@lifestyleinterventions.com or 866-826-0985. We respond within 45 days."] },
        { heading: "7. No Sharing of SMS Opt-In Data", body: ["SMS opt-in data and consent are not shared with third parties or affiliates for marketing purposes. The sole exception is the aggregators and text-delivery providers who deliver messages under confidentiality."] },
        { heading: "8. Information Sharing", body: ["We do not sell or rent your information. We share it only with service providers under confidentiality, with affiliates, as required by law, for fraud and security, and in a merger or asset sale."] },
        { heading: "9. Confidentiality of Client Information", body: ["Health-related information you share voluntarily is used only to provide and coordinate the services you request."] },
        { heading: "10. California Privacy Rights (CCPA)", body: ["California residents have the right to know, to delete, to opt out of sale (we make none), and to non-discrimination. Contact us to exercise these rights; we respond within 45 days."] },
        { heading: "11. Rights for Residents Outside California", body: ["Our services are primarily for California residents. Inquiries from elsewhere are handled with care under applicable law."] },
        { heading: "12. Children's Privacy", body: ["This site is intended for adults 18 and over. We do not knowingly collect information from children under 13. Contact us to delete any information about a minor."] },
        { heading: "13. Third-Party Links", body: ["We are not responsible for the content or practices of third-party sites."] },
        { heading: "14. Contact Us", body: ["Lifestyle Interventions LLC, 1401 21st St Ste R, Sacramento, CA 95811. Phone 866-826-0985. Email info@lifestyleinterventions.com."] },
        { heading: "15. Changes to This Policy", body: ["We may revise this policy and will update the Last Updated date. Continued use of the site means acceptance."] },
      ]}
    />
  );
}
