import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { DigitalGardenSection } from "@/components/sections/digital-garden-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InterestsSection } from "@/components/sections/interests-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <InterestsSection />
      <DigitalGardenSection />
      <QuoteSection />
      <ContactSection />
    </main>
  );
}
