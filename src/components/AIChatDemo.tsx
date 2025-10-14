"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Send,
  Check,
  ArrowRight,
  Star,
  Palette,
  Zap,
  Crown,
} from "lucide-react";

const chatMessages = [
  {
    id: 1,
    type: "user",
    message: "Create a modern purple theme for my startup",
    timestamp: "2 min ago",
  },
  {
    id: 2,
    type: "ai",
    message:
      "I've created a beautiful modern purple theme with great contrast and professional appeal. The primary color uses a vibrant purple (#8B5CF6) with complementary accent colors.",
    timestamp: "2 min ago",
  },
  {
    id: 3,
    type: "user",
    message: "Make it more accessible",
    timestamp: "1 min ago",
  },
];

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
  const [inputValue, setInputValue] = useState("");
  const [selectedPreset, setSelectedPreset] = useState("modern");

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Feature Description */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-chart-1/10 to-chart-1/5 text-chart-1 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Pro Features</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Generate Themes With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2 border-2 border-dashed border-chart-1/30 px-2 py-1 rounded-lg">
                  AI
                </span>{" "}
                in Seconds
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Create stunning ready-to-use themes. Just provide an image or
                text prompt, and our AI does the rest.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#waitlist"
                className="group bg-gradient-to-r from-chart-1 to-chart-1 text-black px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-chart-1/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Try it Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#waitlist"
                className="bg-card border border-border text-foreground px-8 py-4 rounded-2xl font-semibold hover:border-chart-1/30 hover:bg-chart-1/5 transition-all duration-300"
              >
                Get Pro
              </a>
            </div>

            {/* Feature List */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-chart-4" />
                  <span className="text-muted-foreground font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Theme Presets */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Choose Your Style
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {themePresets.map((preset) => {
                  const Icon = preset.icon;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedPreset(preset.id)}
                      className={`group relative p-4 rounded-2xl border transition-all duration-300 ${
                        selectedPreset === preset.id
                          ? "border-primary/50 bg-gradient-to-br from-primary/10 to-transparent shadow-lg shadow-primary/10 scale-105"
                          : "border-border/50 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent hover:scale-102"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                            selectedPreset === preset.id
                              ? "bg-gradient-to-br from-chart-1 to-chart-1"
                              : "bg-gradient-to-br from-chart-1/20 to-chart-1/20"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 ${
                              selectedPreset === preset.id
                                ? "text-white"
                                : "text-chart-1"
                            }`}
                          />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-foreground text-sm">
                            {preset.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {preset.description}
                          </p>
                        </div>
                      </div>

                      {/* Color Palette Preview */}
                      <div className="flex gap-1 mt-2">
                        {preset.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Section - Image and GIF Display */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="backdrop-blur-sm rounded-xl  overflow-hidden h-[800px]">
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
              <div className="backdrop-blur-sm rounded-xl mt-[-5] overflow-hidden w-full h-[800px]">
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
