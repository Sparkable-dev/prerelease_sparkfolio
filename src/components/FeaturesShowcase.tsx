"use client";

import { Sparkles, Palette, Globe, FileText, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description:
      "Our advanced AI will understand your brand vision and generate comprehensive brand guidelines tailored to your industry and target audience.",
  },
  {
    icon: Palette,
    title: "Smart Color Palettes",
    description:
      "Get professional color schemes that work across all mediums, with accessibility compliance and industry-specific recommendations.",
  },
  {
    icon: Globe,
    title: "Website Design Mockups",
    description:
      "Complete website designs that match your brand identity, including mobile-responsive layouts and modern UI patterns.",
  },
  {
    icon: FileText,
    title: "Complete Brand Books",
    description:
      "Professional brand guidelines with logo usage, typography, color specifications, and brand voice recommendations.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Generate your complete brand identity in minutes, not weeks. No more waiting for designers or paying agency fees.",
  },
  {
    icon: Shield,
    title: "Industry Expertise",
    description:
      "Built with insights from top branding agencies, ensuring your brand meets professional standards and industry best practices.",
  },
];

export function FeaturesShowcase() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Everything You'll Need to Launch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to execution, SPARKFOLIO will provide all the tools and
            assets your startup needs to establish a professional brand
            presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-chart-1 to-chart-1 text-black font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Zap className="w-5 h-5" />
            <span>Ready to transform your startup's brand?</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are excited about the future of
            AI-powered brand design
          </p>
        </div>
      </div>
    </section>
  );
}
