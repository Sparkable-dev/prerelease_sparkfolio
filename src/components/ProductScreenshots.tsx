"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

const screenshots = [
  {
    id: 1,
    title: "AI Brand Book Generation",
    description: "Complete brand guidelines generated from your input",
    image: "/images/brandbook.png",
    alt: "Concept mockup showing AI-generated brand guidelines interface",
    features: [
      "AI-powered analysis",
      "Professional templates",
      "Custom guidelines",
    ],
  },
  {
    id: 2,
    title: "Color Palette & Themes",
    description: "Professional color schemes tailored to your industry",
    image: "/images/colors.png",
    alt: "Concept mockup showing color palette interface with theme options",
    features: [
      "Industry-specific colors",
      "Accessibility compliant",
      "Export ready",
    ],
  },
  {
    id: 3,
    title: "Website Design Mockups",
    description: "Complete website designs that match your brand",
    image: "/images/website.png",
    alt: "Concept mockup showing website design interface",
    features: ["Responsive designs", "Modern layouts", "Brand consistent"],
  },
  {
    id: 4,
    title: "Logo & Brand Assets",
    description: "Professional logos and all brand assets ready to use",
    image: "/images/brand-assets.png",
    alt: "Concept mockup showing logo design interface with various options",
    features: ["Multiple formats", "Vector graphics", "High resolution"],
  },
];

export function ProductScreenshots() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section
      id="screenshots"
      className="py-24 bg-gradient-to-b from-muted/20 via-background to-muted/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium mb-6">
            <span>✨</span>
            <span>Product Preview</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            See What's Coming
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Preview how our AI will transform your startup ideas into complete
            brand identities
          </p>
        </div>

        {/* Full Width Gallery */}
        <div className="mb-16">
          <div className="relative group max-w-6xl mx-auto">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-500">
              <div className="aspect-video">
                <Image
                  src={screenshots[activeIndex].image}
                  alt={screenshots[activeIndex].alt}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              {/* Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Navigation Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={goToPrevious}
                  className="bg-black/30 hover:bg-black/50 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="bg-black/30 hover:bg-black/50 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Auto-play Controls */}
              <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={toggleAutoPlay}
                  className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                  aria-label={
                    isAutoPlaying ? "Pause slideshow" : "Play slideshow"
                  }
                >
                  {isAutoPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => setActiveIndex(0)}
                  className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                  aria-label="Reset to first image"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-3">
                <span>
                  {activeIndex + 1} of {screenshots.length}
                </span>
                <span>{isAutoPlaying ? "Auto-playing" : "Manual"}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${((activeIndex + 1) / screenshots.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${
                index === activeIndex
                  ? "border-primary/50 bg-gradient-to-br from-primary/10 to-transparent shadow-lg shadow-primary/10 scale-105"
                  : "border-border/50 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent hover:scale-102"
              }`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {screenshot.title}
                  </h3>
                  {index === activeIndex && (
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0 mt-1" />
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {screenshot.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {screenshot.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        index === activeIndex
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredIndex === index && index !== activeIndex && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              4+
            </div>
            <div className="text-sm text-muted-foreground">Core Features</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-sm text-muted-foreground">AI Powered</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-chart-4 mb-2 group-hover:scale-110 transition-transform duration-300">
              5min
            </div>
            <div className="text-sm text-muted-foreground">Average Time</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-chart-1 mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-sm text-muted-foreground">Export Formats</div>
          </div>
        </div>
      </div>
    </section>
  );
}
