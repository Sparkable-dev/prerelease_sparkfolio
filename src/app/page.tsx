import { Header } from "@/components/Header";
import { HeroSectionDemo } from "@/components/Hero";
import { ProductScreenshots } from "@/components/ProductScreenshots";
import { AIChatDemo } from "@/components/AIChatDemo";
import { ThemePresetSelector } from "@/components/ThemePresetSelector";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { PricingSection } from "@/components/PricingSection";
import { EmailCollection } from "@/components/EmailCollection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSectionDemo />
      <ProductScreenshots />
      <AIChatDemo />
      <ThemePresetSelector />
      <FeaturesShowcase />
      <PricingSection />
      <EmailCollection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
