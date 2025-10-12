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
    "https://44603cd0.sibforms.com/serve/MUIFAIb-ofpa_4KlBZfB4W0c-eUXoyRQvXhVDARpw99EBytbAYS04KoeRJaDJsIcfGjOWVT5gAXcrV9KwP5a3j7VXVPnfx0Tek6HlVkE2kLoE2DiQjp8xpdCge5mS3rGh6FIZ67OgGttpEFwl41v4AWpkyl5sWOQztt5m1sH4bUyJ7LYMBjDYXrg6yTg8KYIDAObblELIBzLoTYy";

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
