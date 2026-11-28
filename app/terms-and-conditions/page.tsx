import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Family Support, Crisis & Wellness Care",
  description: "The Lifestyle Interventions terms and conditions.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      updated="June 25, 2026"
      sections={[
        { heading: "1. Acceptance of Terms", body: ["Using lifestyleinterventions.com (the \"Site\") means you agree to these terms."] },
        { heading: "2. Not a Substitute for Emergency Services", body: ["The Site provides general information only, not medical, psychological, or legal advice. Call 911 in an emergency. We are not a 24/7 emergency response service."] },
        { heading: "3. SMS Program Description", body: ["We send transactional messages (reminders, follow-ups, care coordination) to people who inquire or receive services, and promotional messages only with a separate opt-in. The two are managed independently."] },
        { heading: "4. SMS Opt-Out Instructions", body: ["Reply STOP, END, CANCEL, UNSUBSCRIBE, or STOP2END to opt out. You will receive one confirmation message. Text START to re-subscribe."] },
        { heading: "5. SMS Help and Support", body: ["Reply HELP, call 866-826-0985, or email info@lifestyleinterventions.com."] },
        { heading: "6. Message and Data Rates", body: ["Message and data rates may apply, and message frequency varies. Check with your wireless carrier."] },
        { heading: "7. Carrier Liability Disclaimer", body: ["Carriers are not liable for delayed or undelivered messages, and delivery is not guaranteed."] },
        { heading: "8. Age Restriction", body: ["You must be 18 or older to use SMS or submit a phone number through our forms."] },
        { heading: "9. Privacy Policy", body: ["SMS and Site use are governed by our Privacy Policy."] },
        { heading: "10. Communications and Contact Forms", body: ["Contacting us through forms, phone, chat, or other channels consents to contact by phone, email, or SMS. We use a CRM platform to manage communications."] },
        { heading: "11. Informational Purpose Only", body: ["Nothing on the Site is medical, legal, financial, or therapeutic advice. Seek qualified professionals."] },
        { heading: "12. Confidentiality", body: ["Health-related information is handled under our Privacy Policy and used only to provide the services you request."] },
        { heading: "13. Intellectual Property", body: ["Site content is owned by us or our suppliers and may not be reproduced without written permission."] },
        { heading: "14. Third-Party Links", body: ["Third-party links are for information only and are not controlled or endorsed by us."] },
        { heading: "15. Limitation of Liability", body: ["We are not liable for indirect or consequential damages, including from messaging errors or delays."] },
        { heading: "16. Disclaimer of Warranties", body: ["The Site is provided \"as is\" and \"as available\", without any guarantee of uninterrupted or error-free operation."] },
        { heading: "17. Indemnification", body: ["You agree to indemnify us and our affiliates for claims arising from your use of the Site or violation of these terms."] },
        { heading: "18. Governing Law", body: ["These terms are governed by California law, with exclusive jurisdiction in California courts."] },
        { heading: "19. Changes to These Terms", body: ["Changes take effect on posting. Continued use means acceptance."] },
        { heading: "20. Contact Us", body: ["Lifestyle Interventions LLC, 1401 21st St Ste R, Sacramento, CA 95811. Phone 866-826-0985. Email info@lifestyleinterventions.com."] },
      ]}
    />
  );
}
