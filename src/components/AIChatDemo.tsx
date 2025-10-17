"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Check,
  ArrowRight,
  Star,
  Palette,
  Zap,
  Crown,
} from "lucide-react";
import { ShimmerButton } from "./ui/shimmer-button";

const features = ["Theme Preview", "Checkpoint Restoration", "Image Uploads"];

const themePresets = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design",
    colors: ["#6366F1", "#8B5CF6", "#F59E0B", "#10B981"],
    icon: Sparkles,
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and elegant approach",
    colors: ["#1A1A1A", "#6B7280", "#F3F4F6", "#FFFFFF"],
    icon: Palette,
  },
  {
    id: "vibrant",
    name: "Vibrant",
    description: "Bold and energetic colors",
    colors: ["#EF4444", "#F59E0B", "#10B981", "#3B82F6"],
    icon: Zap,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Luxury and sophistication",
    colors: ["#7C3AED", "#F59E0B", "#1F2937", "#F9FAFB"],
    icon: Crown,
  },
];

export function AIChatDemo() {
  // const [inputValue, setInputValue] = useState("");

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl hidden lg:block" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl hidden lg:block" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Section - Feature Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight font-inter">
                Generate Themes With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2 border-2 border-dashed border-chart-1/30 px-1 sm:px-2 py-1 rounded-lg">
                  AI
                </span>{" "}
                in Seconds
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 font-inter px-2 sm:px-0">
                Create stunning ready-to-use themes. Just provide an image or
                text prompt, and our AI does the rest.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 px-2 sm:px-0">
              <a href="#waitlist">
                <ShimmerButton
                  className="text-sm sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4"
                  shimmerColor="#ffffff"
                  background="linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)"
                  borderRadius="12px"
                  shimmerDuration="2s"
                >
                  <span className="flex items-center gap-2 font-inter">
                    Explore Themes
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </ShimmerButton>
              </a>
            </div>
            {/* Theme Showcase */}
            <div className="mt-8 sm:mt-12">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground font-inter">
                  Available Themes
                </h3>
                <span className="text-xs sm:text-sm text-muted-foreground bg-muted/50 px-2 sm:px-3 py-1 rounded-full">
                  +50 more themes
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {themePresets.map((preset) => {
                  const Icon = preset.icon;
                  return (
                    <div
                      key={preset.id}
                      className="group relative p-3 sm:p-4 rounded-2xl border border-border/30 bg-gradient-to-br from-card/50 to-transparent "
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-chart-1/20 to-chart-1/20">
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-chart-1" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-foreground text-xs sm:text-sm font-inter">
                            {preset.name}
                          </h4>
                          <p className="text-xs text-muted-foreground font-inter hidden sm:block">
                            {preset.description}
                          </p>
                        </div>
                      </div>

                      {/* Color Palette Preview */}
                      <div className="flex gap-1 mt-2">
                        {preset.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs sm:text-sm text-muted-foreground font-inter">
                  And many more themes available in the app
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Image and GIF Display */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="backdrop-blur-sm rounded-xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
                <div className="h-full">
                  <img
                    src="/images/aichat.png"
                    alt="AI Theme Generation Preview"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* GIF Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="backdrop-blur-sm rounded-xl mt-0 sm:mt-[-5] overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
                <div className="h-full">
                  <img
                    src="/images/gif.gif"
                    alt="AI Generation Process"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
