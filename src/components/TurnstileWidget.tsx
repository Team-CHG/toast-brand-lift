import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

const TURNSTILE_SITE_KEY = "0x4AAAAAABeDpkHWlTLrTlPO";

const TurnstileWidget = ({ onVerify, onError, onExpire }: TurnstileWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const callbacksRef = useRef({ onVerify, onError, onExpire });

  // Keep callbacks ref updated
  callbacksRef.current = { onVerify, onError, onExpire };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderWidget = () => {
      if (!container || !window.turnstile || widgetIdRef.current) return;

      console.log("Rendering Turnstile widget...");
      widgetIdRef.current = window.turnstile.render(container, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => {
          console.log("Turnstile verified successfully");
          callbacksRef.current.onVerify(token);
        },
        "error-callback": () => {
          console.log("Turnstile error");
          callbacksRef.current.onError?.();
        },
        "expired-callback": () => {
          console.log("Turnstile expired");
          callbacksRef.current.onExpire?.();
        },
        theme: "light",
      });
      console.log("Turnstile widget rendered with ID:", widgetIdRef.current);
    };

    // Check if Turnstile is already loaded
    if (window.turnstile) {
      renderWidget();
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]');
    if (existingScript) {
      // Wait for it to load
      const previousCallback = window.onTurnstileLoad;
      window.onTurnstileLoad = () => {
        previousCallback?.();
        renderWidget();
      };
      return;
    }

    // Load the Turnstile script
    console.log("Loading Turnstile script...");
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
    script.async = true;
    
    window.onTurnstileLoad = () => {
      console.log("Turnstile script loaded");
      renderWidget();
    };

    script.onerror = () => {
      console.error("Failed to load Turnstile script");
    };

    document.head.appendChild(script);

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          console.log("Error removing Turnstile widget:", e);
        }
        widgetIdRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="cf-turnstile" />;
};

export default TurnstileWidget;
