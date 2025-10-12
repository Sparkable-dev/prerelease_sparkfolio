"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    id: 1,
    title: "AI Brand Book Generation",
    description: "Complete brand guidelines generated from your input",
    image: {
      light: "/images/brandbook.png",
      dark: "/images/brandbook-dark.png",
    },
    alt: "Concept mockup showing AI-generated brand guidelines interface",
  },
  {
    id: 2,
    title: "Color Palette & Themes",
    description: "Professional color schemes tailored to your industry",
    image: {
      light: "/images/colors.png",
      dark: "/images/colors-dark.png",
    },
    alt: "Concept mockup showing color palette interface with theme options",
  },
  {
    id: 3,
    title: "Website Design Mockups",
    description: "Complete website designs that match your brand",
    image: {
      light: "/images/website.png",
      dark: "/images/website-dark.png",
    },
    alt: "Concept mockup showing website design interface",
  },
  {
    id: 4,
    title: "Logo & Brand Assets",
    description: "Professional logos and all brand assets ready to use",
    image: {
      light: "/images/brand-assets.png",
      dark: "/images/brand-assets-dark.png",
    },
    alt: "Concept mockup showing logo design interface with various options",
  },
];

export function ProductScreenshots() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains("dark"));
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="screenshots"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See What's Coming
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preview how our AI will transform your startup ideas into complete
            brand identities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Screenshot Display */}
          <div className="relative flex flex-col">
            <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl bg-card border relative group">
              <Image
                src={
                  isDark
                    ? screenshots[activeIndex].image.dark
                    : screenshots[activeIndex].image.light
                }
                alt={screenshots[activeIndex].alt}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-6">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                  index === activeIndex
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="text-xl font-semibold mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-muted-foreground">
                  {screenshot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
