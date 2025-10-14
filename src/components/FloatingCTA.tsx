"use client";

import { Mail } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="#waitlist"
        className="group relative bg-gradient-to-r from-chart-1 to-chart-1 text-black px-6 py-4 rounded-2xl shadow-2xl hover:shadow-chart-1/30 transition-all duration-300 hover:scale-105 flex items-center gap-3 font-semibold"
      >
        <Mail className="w-5 h-5" />
        <span>Join Waitlist</span>
      </a>
    </div>
  );
}
