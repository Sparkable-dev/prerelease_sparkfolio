"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
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
          name: "",
          listId: "1",
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-16 md:pt-20">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <h1 className="mt-4 max-w-4xl mx-auto text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-bold">
                    Don&apos;t spend{" "}
                    <span className="text-red-500 line-through">$2000</span> for
                    brand kit — get{" "}
                    <span className="text-purple-500">tailored brand kit</span>{" "}
                    with <span className="text-purple-500">AI</span> ✨
                  </h1>
                  <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-balance text-sm sm:text-base font-inter px-4 sm:px-0">
                    Create professional brand assets in minutes with our
                    AI-powered design tools.
                  </p>
                </AnimatedGroup>

                {isSubmitted ? (
                  <div className="mt-12 flex flex-col items-center justify-center gap-4">
                    <div className="w-full max-w-md p-6 rounded-xl bg-green-50 border border-green-200 text-center">
                      <div className="text-green-600 font-semibold mb-2">
                        🎉 You&apos;re all set!
                      </div>
                      <p className="text-green-700 text-sm">
                        Thanks for joining our waitlist! We&apos;ll contact you
                        soon with updates about SparkFolio&apos;s launch.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleEmailSubmit}
                    className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2 px-4 sm:px-0"
                  >
                    <div className="relative w-full max-w-md">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-32 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-600 text-sm sm:text-base"
                      />
                    </div>
                    <ShimmerButton
                      type="submit"
                      disabled={!email || isLoading}
                      className="w-full sm:w-auto text-sm sm:text-base font-semibold px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      shimmerColor="#ffffff"
                      background="linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)"
                      borderRadius="12px"
                      shimmerDuration="2s"
                    >
                      <span className="flex items-center gap-2 font-inter">
                        {isLoading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Joining...
                          </>
                        ) : (
                          <>
                            Start Creating
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </span>
                    </ShimmerButton>
                  </form>
                )}
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-4 overflow-hidden  sm:mt-6 md:mt-8">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-[-30%]"
                />
                <div className="bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl">
                  <img
                    className="object-cover relative rounded-2xl w-full h-auto"
                    src="/images/landing.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}

