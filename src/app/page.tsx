import { Header } from "@/components/Header";
import { HeroSectionDemo } from "@/components/Hero";
import { ProductScreenshots } from "@/components/ProductScreenshots";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { EmailCollection } from "@/components/EmailCollection";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSectionDemo />
      <ProductScreenshots />
      <FeaturesShowcase />
      <SocialProof />
      <EmailCollection />
      <Footer />
    </div>
  );
}
