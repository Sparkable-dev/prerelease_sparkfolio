import { Header } from "@/components/Header";
import { HeroSectionDemo } from "@/components/Hero";
import { AIChatDemo } from "@/components/AIChatDemo";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { FounderSection } from "@/components/FounderSection";
import { SpectacularWaitingListCTA } from "@/components/SpectacularWaitingListCTA";

import { HeroSection } from "@/components/blocks/hero-section-1";
import { Footer } from "@/components/ui/modem-animated-footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="hero">
        <HeroSection />
      </section>
      <AIChatDemo />
      <WaitlistCTA />
      <section id="features">
        <FeaturesShowcase />
      </section>
      <section id="waitlist">
        <SpectacularWaitingListCTA />
      </section>
      <Footer />
    </div>
  );
}
