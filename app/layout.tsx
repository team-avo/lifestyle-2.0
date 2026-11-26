import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lifestyleinterventions.com"),
  title: {
    default: "Lifestyle Interventions | Discreet Crisis Intervention in Los Angeles",
    template: "%s | Lifestyle Interventions",
  },
  description:
    "Confidential crisis intervention and recovery support for high-profile Los Angeles families.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
