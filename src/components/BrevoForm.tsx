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
    "https://44603cd0.sibforms.com/serve/MUIFAOJruId_6A090I0rt4wPhI-g4Hk61F48wANxhuh2zFo30Xdjzyiyg42fr9UCPtnc99CW5oTzSlGqHHcEKM4tCfCBaIfv82m1Lnc4KMAlpX9sph0XTV-wWERXkXFT0UjDQXzBFg70IursCvJJCFawkey3dV2SgsJXw37C70TmN-qLlm3_PmU_2BEx8crXb7kTIkAunpUwq-Nf";

  // For dark theme, you can use the same URL or a different one if you have a dark-themed form
    const darkFormUrl =
      "https://44603cd0.sibforms.com/serve/MUIFAPPUulGg-ixqu8nhAdCLPj-pujK3xhul8JT89lL_cofqLABukH7B6Pm48tiqwNBiRiwAjAPx64w3xv-ZBg8K4bu25X74ua925LxDTtIEDTzVUklTNSVyI_TRN2EXhljmgNYP_DSMZw6Mgmata7Kp6KLbBKrfkNflCqChQ1Dl5EQDgtFNBBvO5H8rqSUYkuOuskWo02ahPPpG";
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
