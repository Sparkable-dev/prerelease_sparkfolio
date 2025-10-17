"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ShimmerButton } from "@/components/ui/shimmer-button";
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

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        console.error("Subscription failed:", result.error);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HeroHeader />
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
                  <h1 className="mt-4 max-w-4xl mx-auto text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl font-inter font-bold">
                    Don't spend{" "}
                    <span className="text-red-500 line-through">$2000</span> for
                    brand kit — get{" "}
                    <span className="text-purple-500">tailored brand kit</span>{" "}
                    with <span className="text-purple-500">AI</span> ✨
                  </h1>
                  <p className="mx-auto mt-8 max-w-2xl text-balance text-base font-inter">
                    Create professional brand assets in minutes with our
                    AI-powered design tools.
                  </p>
                </AnimatedGroup>

                {isSubmitted ? (
                  <div className="mt-12 flex flex-col items-center justify-center gap-4">
                    <div className="w-full max-w-md p-6 rounded-xl bg-green-50 border border-green-200 text-center">
                      <div className="text-green-600 font-semibold mb-2">
                        🎉 You're all set!
                      </div>
                      <p className="text-green-700 text-sm">
                        Thanks for joining our waitlist! We'll contact you soon
                        with updates about SparkFolio's launch.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleEmailSubmit}
                    className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2"
                  >
                    <div className="relative w-full max-w-md">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-32 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-600"
                      />
                    </div>
                    <ShimmerButton
                      type="submit"
                      disabled={!email || isLoading}
                      className="w-full sm:w-auto text-lg font-semibold px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="relative -mr-56 mt-4 overflow-hidden px-2 sm:mr-0 sm:mt-6 md:mt-8">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="/images/landing-white.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="/images/landing-white.png"
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

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Waitlist", href: "#waitlist" },
  { name: "Contact", href: "#footer" },
];

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2 group"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Link href="#waitlist">
                  <ShimmerButton
                    className={cn(
                      isScrolled && "lg:hidden",
                      "text-sm font-semibold px-4 py-2"
                    )}
                    shimmerColor="#ffffff"
                    background="linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)"
                    borderRadius="8px"
                    shimmerDuration="2s"
                  >
                    <span className="font-inter">Join Waitlist</span>
                  </ShimmerButton>
                </Link>
                <Link href="#waitlist">
                  <ShimmerButton
                    className={cn(
                      isScrolled ? "lg:inline-flex" : "hidden",
                      "text-sm font-semibold px-4 py-2"
                    )}
                    shimmerColor="#ffffff"
                    background="linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)"
                    borderRadius="8px"
                    shimmerDuration="2s"
                  >
                    <span className="font-inter">Join Waitlist</span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <img
        src="/images/logo.png"
        alt="Sparkfolio Logo"
        className="h-8 w-auto"
      />
      <span className="text-2xl ">
        <span className="font-inter font-light">spark </span>
        <span className="font-italiano font-extrabold text-3xl">Folio</span>
      </span>
    </div>
  );
};
