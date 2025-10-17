"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";
import { MagicEmailForm } from "./MagicEmailForm";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles, Users, Zap } from "lucide-react";

export function SpectacularWaitingListCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="waitlist"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-chart-4/25 rounded-full animate-ping" />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-pulse" />
      </div>

      {/* Gradient backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl hidden lg:block" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with text effects */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent font-inter px-4 sm:px-0"
          >
            Join the{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              Revolution
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto font-inter px-4 sm:px-0"
          >
            Be among the first to experience the future of brand design. Join
            our exclusive waitlist and we&apos;ll contact you soon with early
            access when SparkFolio launches.
          </motion.p>

          {/* Spectacular CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
          >
            <MagicCard
              className="relative overflow-hidden"
              gradientSize={300}
              gradientColor="rgba(120, 119, 198, 0.3)"
              gradientOpacity={0.8}
              gradientFrom="#9E7AFF"
              gradientTo="#FE8BBB"
            >
              {/* Border effects */}
              <BorderBeam
                size={100}
                duration={12}
                delay={0}
                colorFrom="#9E7AFF"
                colorTo="#FE8BBB"
                className="rounded-3xl"
              />

              <ShineBorder
                borderWidth={2}
                duration={8}
                shineColor={["#9E7AFF", "#FE8BBB", "#9E7AFF"]}
                className="rounded-3xl"
              />

              <div className="relative p-6 sm:p-8 lg:p-12">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-8 h-8 border border-primary/20 rounded-full animate-spin" />
                  <div className="absolute top-8 right-8 w-6 h-6 border border-accent/20 rounded-full animate-pulse" />
                  <div className="absolute bottom-8 left-8 w-4 h-4 border border-chart-4/20 rounded-full animate-bounce" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 border border-primary/20 rounded-full animate-ping" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mb-6 sm:mb-8"
                  >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent font-inter">
                      Get Early Access
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-inter">
                      Join 2,500+ entrepreneurs already on the waitlist
                    </p>
                  </motion.div>

                  {/* Form with enhanced styling */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="max-w-md mx-auto"
                  >
                    <MagicEmailForm className="w-full" />
                  </motion.div>

                  {/* Stats with animations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3"
                      >
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </motion.div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground font-inter">
                        2,500+
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-inter">
                        Entrepreneurs
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-accent/10"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2 sm:mb-3"
                      >
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                      </motion.div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground font-inter">
                        Early
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-inter">
                        Access
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
