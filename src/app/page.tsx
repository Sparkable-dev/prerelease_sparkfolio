import { Header } from "@/components/Header";
import { HeroSectionDemo } from "@/components/Hero";
import { AIChatDemo } from "@/components/AIChatDemo";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { FounderSection } from "@/components/FounderSection";
import { EmailCollection } from "@/components/EmailCollection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="hero">
        <HeroSectionDemo />
      </section>
      <AIChatDemo />
      <section id="features">
        <FeaturesShowcase />
      </section>
      <section id="impact">
        <FounderSection />
      </section>
      <section id="waitlist">
        <EmailCollection />
      </section>
      <Footer />
    </div>
  );
}
