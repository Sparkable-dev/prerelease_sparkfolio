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
    "https://44603cd0.sibforms.com/serve/MUIFAHbbkPh7BJn_yrTFC_lP29Xd-ryPSm9iK63XoqLbrpnzmbbnOM-oQR-ClbRUb1CcIVs2w5fbIzP3L-bdtAeW5N3BThb74ZfSMbZOkL7Fkck3q2EV5cF4LlOzr261Q3rrRfbPFckpSa8JkAWAIXx0k_Y-7ywQHTZ7KbinC7z4dnrCgVjUaTJdJQvi-q8lz2cA-Q7NK_Y5Phxb";

  // For dark theme, you can use the same URL or a different one if you have a dark-themed form
    const darkFormUrl =
      "https://44603cd0.sibforms.com/serve/MUIFAAvE3xqG0VThZf5sNSszm5spMoxPZDR-U-34SkTcpJcvNyeQzuHEkVzK7vJ-pe31edlwgudMOdthJi-By_h92AryCGJSErUF3Jk_btWq9NgIeLXK_dy4MNny7KZsZ_ZKsTnCqSRiv8tQ_itECIzdodlbR3EtciGriKezyIA6R0GEIRBU4r9MY_8JUMWHpsWGu2VHFg7MNeov";
  return (
    <div className={className}>
      <iframe
        width="600"
        height="500"
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
