"use client";

import { useState } from "react";
import { Sparkles, Send, Check, ArrowRight, Star } from "lucide-react";

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

export function AIChatDemo() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              <button className="group bg-gradient-to-r from-chart-1 to-chart-1 text-black px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-chart-1/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Try it Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="bg-card border border-border text-foreground px-8 py-4 rounded-2xl font-semibold hover:border-chart-1/30 hover:bg-chart-1/5 transition-all duration-300">
                Get Pro
              </button>
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
          </div>

          {/* Right Section - AI Chat Interface */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">
                        SPARKFOLIO AI
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Brand Designer
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Coming Soon
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 max-h-80 overflow-y-auto">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="flex items-start gap-3 max-w-[80%]">
                      {message.type === "ai" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">
                            AI
                          </span>
                        </div>
                      )}

                      <div className="space-y-1">
                        <div
                          className={`px-4 py-3 rounded-2xl ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-chart-1 to-chart-2 text-white"
                              : "bg-card border border-border text-foreground"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">
                            {message.message}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {message.type === "user" && (
                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                              <span className="text-xs font-bold text-muted-foreground">
                                U
                              </span>
                            </div>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {message.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-6 border-t border-border/50 bg-muted/20">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Describe your ideal brand theme..."
                    className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <button className="p-3 rounded-xl bg-gradient-to-r from-chart-1 to-chart-1 text-white hover:shadow-lg hover:shadow-chart-1/30 transition-all duration-300 hover:scale-105">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  AI-powered theme generation coming in SPARKFOLIO Pro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
