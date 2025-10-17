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
      <footer className="border-t bg-background mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-4 flex flex-col items-center flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <span className=" text-3xl font-inter font-light">
                      Spark
                    </span>
                    <span className="font-bold  text-4xl ml-1 mt-2 font-italianno">
                      Folio
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground font-semibold text-center w-full max-w-md px-4 sm:px-0 font-inter">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-6 gap-3">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <div className="w-5 h-5 group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground max-w-full px-4">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:text-foreground transition-colors duration-300 flex items-center gap-2 group font-inter"
                      href={link.href}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-4 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
            <p className="text-sm text-muted-foreground text-center md:text-left font-inter">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex gap-6 text-sm text-muted-foreground">
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
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 hover:font-medium font-inter"
                >
                  Crafted by {creatorName}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Large background text - FIXED */}
        <div
          className="bg-purple-200  bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: "clamp(3rem, 12vw, 10rem)",
            maxWidth: "95vw",
          }}
        >
          {brandName.toLocaleUpperCase()}
        </div>

        {/* Bottom logo */}
        <div className="absolute hover:border-foreground duration-400 drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.3)] bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-background/60 left-1/2 border-2 border-border flex items-center justify-center p-3 -translate-x-1/2 z-10">
          <div className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24  rounded-2xl flex items-center justify-center shadow-lg">
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
        <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2"></div>

        {/* Bottom shadow */}
        <div className="bg-gradient-to-t from-background via-background/80 blur-[1em] to-background/40 absolute bottom-28 w-full h-24"></div>
      </footer>
    </section>
  );
};
