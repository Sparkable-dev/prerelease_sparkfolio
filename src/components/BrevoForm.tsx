"use client";

import { useState, useEffect } from "react";

interface BrevoFormProps {
  className?: string;
}

export function BrevoForm({ className }: BrevoFormProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains("dark"));
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Different Brevo form URLs for light and dark themes
  const lightFormUrl =
    "https://44603cd0.sibforms.com/serve/MUIFAA6pft38oSukJ7oTZyiNoaZYF47PRQcksn5ZbePoMFYWY5rmHTFOJkw79ma_5rtiUmz9BZ5KlcEKCEkfIvTIfsj8k21VeC6RS-nLDBpSAamy98JkOTG5E_0ijj-FFd0EqY_wLbYy0FPJ3cKctgWWPjPj1BY-uBVSSUt-fHZBbfSML1aU_rRyq0t99BHhsKq2FdPhAjGhbXnU";

  // For dark theme, you can use the same URL or a different one if you have a dark-themed form
    const darkFormUrl =
        "https://44603cd0.sibforms.com/serve/MUIFAJscfQUH9FhQdzschQv6ZOAUcNeLJRqQBkfmdtf5IcttV1aA5PXwFIFgWZhhGuwKVHeTVHdh6MfOEqwKtNswym-N9PsTPVAS6MVZbvSPXLmtOyy1QrFJX4tr85prrhAmxeHMaYPol-DJvIZBi515pd1egy2Nq2mhlxCvb9rfeFzKPpDyZyfbR313XAfO8LzfmzDvUn-BCMVH";
  return (
    <div className={className}>
      <iframe
        width="540"
        height="400"
        src={isDark ? darkFormUrl : lightFormUrl}
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
        }}
        className=""
        key={isDark ? "dark" : "light"} // Force re-render when theme changes
      />
    </div>
  );
}
