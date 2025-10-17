"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, Mail, Instagram, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "SPARKFOLIO",
  brandDescription = "AI-powered brand design platform that helps startups create complete brand identities in minutes, not weeks.",
  socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:hello@sparkfolio.dev",
      label: "Email",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/sparkable-dev/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/sparkable.dev/",
      label: "Instagram",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Sparkable-dev",
      label: "GitHub",
    },
  ],
  navLinks = [
    { label: "Features", href: "#features" },
    { label: "Waitlist", href: "#waitlist" },
    { label: "Contact", href: "#footer" },
  ],
  creatorName = "Sparkable Digital Solutions",
  creatorUrl = "https://www.sparkable.dev/",
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section
      id="footer"
      className={cn("relative w-full mt-0 overflow-hidden", className)}
    >
      <footer className="border-t bg-background mt-12 sm:mt-16 lg:mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[25rem] sm:min-h-[30rem] md:min-h-[35rem] lg:min-h-[40rem] relative p-4 py-8 sm:py-10">
          <div className="flex flex-col mb-8 sm:mb-12 lg:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-3 sm:space-y-4 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center">
                    <span className="text-2xl sm:text-3xl font-inter font-light">
                      Spark
                    </span>
                    <span className="font-bold text-3xl sm:text-4xl ml-1 mt-1 sm:mt-2 font-italianno">
                      Folio
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground font-semibold text-center w-full max-w-md px-4 sm:px-0 font-inter">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-6 sm:mb-8 mt-4 sm:mt-6 gap-2 sm:gap-3">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="p-2 sm:p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-muted-foreground max-w-full px-4">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:text-foreground transition-colors duration-300 flex items-center gap-1 sm:gap-2 group font-inter"
                      href={link.href}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20 md:mt-24 flex flex-col gap-3 sm:gap-4 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left font-inter">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-center">
              <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-muted-foreground justify-center">
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors duration-300 font-inter"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors duration-300 font-inter"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="hover:text-foreground transition-colors duration-300 font-inter"
                >
                  Cookie Policy
                </Link>
              </div>
              {creatorName && creatorUrl && (
                <Link
                  href={creatorUrl}
                  target="_blank"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 hover:font-medium font-inter text-center"
                >
                  Crafted by {creatorName}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Large background text - FIXED */}
        <div
          className="bg-purple-200 bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-32 sm:bottom-36 md:bottom-40 lg:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: "clamp(2rem, 8vw, 8rem)",
            maxWidth: "95vw",
          }}
        >
          {brandName.toLocaleUpperCase()}
        </div>

        {/* Bottom logo */}
        <div className="absolute hover:border-foreground duration-400 drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.3)] bottom-20 sm:bottom-22 md:bottom-24 lg:bottom-20 backdrop-blur-sm rounded-3xl bg-background/60 left-1/2 border-2 border-border flex items-center justify-center p-2 sm:p-3 -translate-x-1/2 z-10">
          <div className="w-10 sm:w-12 md:w-16 lg:w-24 h-10 sm:h-12 md:h-16 lg:h-24 rounded-2xl flex items-center justify-center shadow-lg">
            {brandIcon || (
              <Image
                src="/images/logo.png"
                alt="SPARKFOLIO Logo"
                width={90}
                height={90}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 lg:bottom-34 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2"></div>

        {/* Bottom shadow */}
        <div className="bg-gradient-to-t from-background via-background/80 blur-[1em] to-background/40 absolute bottom-20 sm:bottom-24 md:bottom-28 w-full h-16 sm:h-20 lg:h-24"></div>
      </footer>
    </section>
  );
};
