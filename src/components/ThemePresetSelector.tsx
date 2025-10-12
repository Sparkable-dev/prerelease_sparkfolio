"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Palette, Zap, Crown } from "lucide-react";

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

const demoComponents = [
  {
    title: "Brand Guidelines",
    description: "Complete brand identity package",
    status: "Active",
    color: "bg-primary",
  },
  {
    title: "Color Palette",
    description: "Professional color schemes",
    status: "Ready",
    color: "bg-accent",
  },
  {
    title: "Logo Design",
    description: "Custom logo variations",
    status: "In Progress",
    color: "bg-chart-1",
  },
  {
    title: "Website Mockup",
    description: "Responsive design templates",
    status: "Completed",
    color: "bg-chart-4",
  },
];

export function ThemePresetSelector() {
  const [selectedPreset, setSelectedPreset] = useState("modern");

  return (
    <section
      id="themes"
      className="w-full py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium">
              <span className="text-primary mr-1">✦</span>
              <span>Theme Presets</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Elevate Your Design Instantly
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Apply theme presets with a single click. See how each option
            enhances the look and feel of your brand.
          </p>
        </motion.div>

        {/* Theme Selector Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {themePresets.map((preset) => {
            const Icon = preset.icon;
            return (
              <button
                key={preset.id}
                onClick={() => setSelectedPreset(preset.id)}
                className={`group relative px-6 py-4 rounded-2xl border transition-all duration-300 ${
                  selectedPreset === preset.id
                    ? "border-primary/50 bg-gradient-to-br from-primary/10 to-transparent shadow-lg shadow-primary/10 scale-105"
                    : "border-border/50 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent hover:scale-102"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      selectedPreset === preset.id
                        ? "bg-gradient-to-br from-chart-1 to-chart-1"
                        : "bg-gradient-to-br from-chart-1/20 to-chart-1/20"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        selectedPreset === preset.id
                          ? "text-white"
                          : "text-chart-1"
                      }`}
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-foreground">{preset.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {preset.description}
                    </p>
                  </div>
                </div>

                {/* Color Palette Preview */}
                <div className="flex gap-1 mt-3">
                  {preset.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Demo Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-h-[60vh] overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-card/50 to-card/30 shadow-2xl backdrop-blur-sm"
        >
          {/* Gradient Overlay */}
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-16 bg-gradient-to-t from-background to-transparent" />

          {/* Demo Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demoComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-3 h-3 rounded-full ${component.color}`}
                    />
                    <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {component.status}
                    </div>
                  </div>

                  <h3 className="font-bold text-foreground mb-2">
                    {component.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {component.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              4+
            </div>
            <div className="text-sm text-muted-foreground">Theme Presets</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-sm text-muted-foreground">
              Color Variations
            </div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-chart-4 mb-2 group-hover:scale-110 transition-transform duration-300">
              1-Click
            </div>
            <div className="text-sm text-muted-foreground">Apply Themes</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-chart-1 mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-sm text-muted-foreground">Customizable</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
