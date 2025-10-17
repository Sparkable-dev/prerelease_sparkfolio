"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "./ui/shimmer-button";

export function WaitlistCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-muted-foreground mb-8 font-inter">
            Ready to transform your brand with AI?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#waitlist">
              <ShimmerButton
                className="text-lg font-semibold px-8 py-4"
                shimmerColor="#ffffff"
                background="linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)"
                borderRadius="12px"
                shimmerDuration="2s"
              >
                <span className="flex items-center gap-2 font-inter">
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
