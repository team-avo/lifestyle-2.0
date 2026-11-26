import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { CTABand } from "@/components/sections/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <CTABand />
    </>
  );
}
