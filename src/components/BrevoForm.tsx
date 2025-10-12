"use client";

import { useEffect, useRef } from "react";

interface BrevoFormProps {
  formId: string;
  className?: string;
}

export function BrevoForm({ formId, className = "" }: BrevoFormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Brevo form script if not already loaded
    if (
      !document.querySelector(
        'script[src="https://www.brevo.com/forms/js/forms.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://www.brevo.com/forms/js/forms.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Initialize Brevo form when script is loaded
    const initializeForm = () => {
      if (window.brevo && formRef.current) {
        window.brevo.init({
          formId: formId,
          container: formRef.current,
        });
      }
    };

    // Check if Brevo is already loaded
    if (window.brevo) {
      initializeForm();
    } else {
      // Wait for script to load
      const checkBrevo = setInterval(() => {
        if (window.brevo) {
          clearInterval(checkBrevo);
          initializeForm();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkBrevo), 10000);
    }

    return () => {
      // Cleanup if needed
    };
  }, [formId]);

  return (
    <div
      ref={formRef}
      className={`brevo-form ${className}`}
      data-form-id={formId}
    >
      {/* Fallback content while form loads */}
      <div className="text-center text-muted-foreground">
        <p>Loading form...</p>
      </div>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    brevo: {
      init: (config: { formId: string; container: HTMLElement }) => void;
    };
  }
}
