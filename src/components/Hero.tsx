import { HeroSection } from "@/components/blocks/hero-section-dark";

function HeroSectionDemo() {
  return (
    <div className="pt-20">
      <HeroSection
        title="SPARKFOLIO"
        subtitle={{
          regular: "AI-Powered Brand Design for ",
          gradient: "Startups & Entrepreneurs",
        }}
        description="Transform your startup's vision into a complete brand identity. Our AI generates professional brand books, color palettes, website designs, and all the assets you need to launch with confidence."
        ctaText="Join Early Access"
        ctaHref="#waitlist"
        bottomImage={{
          light: "/images/landing-white.png",
          dark: "/images/landing-dark.png",
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />
    </div>
  );
}
export { HeroSectionDemo };
