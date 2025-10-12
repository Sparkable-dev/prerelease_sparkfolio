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
    <section id="features" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You'll Need to Launch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to execution, SPARKFOLIO will provide all the tools and
            assets your startup needs to establish a professional brand
            presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium mb-8">
            <Zap className="w-5 h-5" />
            <span>Ready to transform your startup's brand?</span>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of entrepreneurs who are excited about the future of
            AI-powered brand design
          </p>
        </div>
      </div>
    </section>
  );
}
