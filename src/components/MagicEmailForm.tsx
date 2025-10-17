"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";

interface MagicEmailFormProps {
  className?: string;
}

export function MagicEmailForm({ className }: MagicEmailFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: "", // Optional name field
          listId: "1", // Default list ID
        }),
      });

      if (!response.ok) {
        console.error("HTTP error:", response.status, response.statusText);
        // Still show success to user to prevent confusion
        setIsSubmitted(true);
        setEmail("");
        return;
      }

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        console.error("Subscription failed:", result.error);
        // Still show success to user to prevent confusion
        setIsSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      // You could add error state handling here
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`max-w-md mx-auto ${className}`}
      >
        <MagicCard
          className="relative overflow-hidden"
          gradientSize={200}
          gradientColor="rgba(34, 197, 94, 0.3)"
          gradientOpacity={0.8}
          gradientFrom="#22c55e"
          gradientTo="#16a34a"
        >
          <BorderBeam
            size={80}
            duration={8}
            delay={0}
            colorFrom="#22c55e"
            colorTo="#16a34a"
            className="rounded-2xl"
          />

          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <CheckCircle className="w-8 h-8 text-green-500" />
            </motion.div>

            <h3 className="text-2xl font-bold text-foreground mb-2">
              You&apos;re in! 🎉
            </h3>
            <p className="text-muted-foreground">
              Thanks for joining our waitlist! We&apos;ll contact you soon with
              updates about SparkFolio&apos;s launch.
            </p>
          </div>
        </MagicCard>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`max-w-md mx-auto ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MagicCard
        className="relative overflow-hidden"
        gradientSize={300}
        gradientColor="rgba(120, 119, 198, 0.3)"
        gradientOpacity={0.8}
        gradientFrom="#9E7AFF"
        gradientTo="#FE8BBB"
      >
        <BorderBeam
          size={100}
          duration={12}
          delay={0}
          colorFrom="#9E7AFF"
          colorTo="#FE8BBB"
          className="rounded-2xl"
        />

        <ShineBorder
          borderWidth={2}
          duration={8}
          shineColor={["#9E7AFF", "#FE8BBB", "#9E7AFF"]}
          className="rounded-2xl"
        />

        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <motion.div
                animate={{
                  scale: isHovered ? 1.02 : 1,
                  rotateY: isHovered ? 2 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 pl-12 pr-4 text-foreground bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/70"
                />
                <motion.div
                  animate={{
                    rotate: isHovered ? 10 : 0,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                >
                  <Mail className="w-5 h-5 text-primary/70" />
                </motion.div>
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                disabled={!email || isLoading}
                className="w-full h-12 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-[length:200%_100%] hover:bg-[length:100%_100%] text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <motion.div
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Joining...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Get Notified</span>
                    </>
                  )}
                </div>
              </Button>
            </motion.div>
          </div>
        </form>
      </MagicCard>
    </motion.div>
  );
}
