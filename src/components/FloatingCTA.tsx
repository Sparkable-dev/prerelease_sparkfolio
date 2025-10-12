"use client";

import { useState } from "react";
import { X, Mail } from "lucide-react";
import { BrevoForm } from "./BrevoForm";

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-gradient-to-r from-chart-1 to-chart-1 text-black px-6 py-4 rounded-2xl shadow-2xl hover:shadow-chart-1/30 transition-all duration-300 hover:scale-105 flex items-center gap-3 font-semibold"
        >
          <Mail className="w-5 h-5" />
          <span>Join Waitlist</span>
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card/95 backdrop-blur-md rounded-3xl p-8 max-w-lg w-full border border-border/50 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Sign Up Now</h3>
                <p className="text-muted-foreground">
                  Be the first to know when we launch
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Brevo Form Embed */}
            <BrevoForm className="w-full" />

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Join 2,500+ entrepreneurs already on the waitlist
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
