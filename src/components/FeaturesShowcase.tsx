"use client";

import { Sparkles, Palette, Globe, FileText, Zap, Shield } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";

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
  // {
  //   icon: Zap,
  //   title: "Lightning Fast",
  //   description:
  //     "Generate your complete brand identity in minutes, not weeks. No more waiting for designers or paying agency fees.",
  // },
  // {
  //   icon: Shield,
  //   title: "Industry Expertise",
  //   description:
  //     "Built with insights from top branding agencies, ensuring your brand meets professional standards and industry best practices.",
  // },
];

export function FeaturesShowcase() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-inter">
            Everything You&apos;ll Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2 border-2 border-dashed border-chart-1/30 px-2 py-1 rounded-lg">
              Launch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter">
            From concept to execution, SparkFolio will provide all the tools and
            assets your startup needs to establish a professional brand
            presence.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            // Define bento grid layout
            const getCardLayout = (index: number) => {
              switch (index) {
                case 0: // AI-Powered Generation - Large featured card
                  return "md:col-span-2 lg:col-span-3 md:row-span-2";
                case 1: // Smart Color Palettes - Medium card
                  return "md:col-span-2 lg:col-span-2";
                case 2: // Website Design Mockups - Medium card
                  return "md:col-span-2 lg:col-span-1";
                case 3: // Complete Brand Books - Wide card
                  return "md:col-span-2 lg:col-span-3";
                case 4: // Lightning Fast - Small card
                  return "md:col-span-1 lg:col-span-1";
                case 5: // Industry Expertise - Small card
                  return "md:col-span-1 lg:col-span-1";
                default:
                  return "md:col-span-2 lg:col-span-2";
              }
            };

            const isLarge = index === 0;
            const isWide = index === 3;
            const isSmall = index === 4 || index === 5;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border border-gray-200/60 hover:border-gray-300/80 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/30 hover:-translate-y-2 overflow-hidden ${getCardLayout(
                  index
                )}`}
              >
                <ShineBorder
                  borderWidth={3}
                  duration={6 + index * 0.5}
                  shineColor={[
                    "#8B5CF6", // Purple
                    "#EC4899", // Pink
                    "#F59E0B", // Yellow
                  ]}
                />
                <div
                  className={`relative ${
                    isLarge ? "p-10" : isWide ? "p-8" : "p-6"
                  } h-full flex flex-col`}
                >
                  {/* Icon */}
                  <div
                    className={`${
                      isLarge
                        ? "w-16 h-16 mb-8"
                        : isWide
                        ? "w-14 h-14 mb-6"
                        : "w-12 h-12 mb-4"
                    } rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon
                      className={`${
                        isLarge ? "w-8 h-8" : isWide ? "w-7 h-7" : "w-6 h-6"
                      } text-blue-600`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3
                      className={`${
                        isLarge ? "text-2xl" : isWide ? "text-xl" : "text-lg"
                      } font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300 font-inter`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`${
                        isLarge ? "text-base" : isWide ? "text-sm" : "text-xs"
                      } text-gray-600 leading-relaxed flex-1 font-inter`}
                    >
                      {feature.description}
                    </p>

                    {/* Accent line for larger cards */}
                    {(isLarge || isWide) && (
                      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Developer Credit */}
        <div className="mt-20 pt-12">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
            <span>Powered by</span>
            <a
              href="https://sparkable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-chart-1 hover:text-chart-2 transition-all duration-300 font-medium"
            >
              <span className="group-hover:scale-105 transition-transform duration-300 font-inter">
                Sparkable Digital Solutions
              </span>
              <span className="text-muted-foreground/40 group-hover:text-chart-1/60 transition-colors duration-300">
                •
              </span>
              <span className="text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors duration-300 font-inter">
                startup launch pad for success
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
