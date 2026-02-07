import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    turnstile: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback": () => void;
          "expired-callback": () => void;
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
  const scriptLoadedRef = useRef(false);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile || widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: onVerify,
      "error-callback": () => onError?.(),
      "expired-callback": () => onExpire?.(),
      theme: "light",
    });
  }, [onVerify, onError, onExpire]);

  useEffect(() => {
    // Check if script is already loaded
    if (window.turnstile) {
      renderWidget();
      return;
    }

    // Check if script tag already exists
    if (document.querySelector('script[src*="turnstile"]')) {
      window.onTurnstileLoad = renderWidget;
      return;
    }

    // Load the Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
    script.async = true;
    script.defer = true;
    
    window.onTurnstileLoad = () => {
      scriptLoadedRef.current = true;
      renderWidget();
    };

    document.head.appendChild(script);

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  return <div ref={containerRef} className="cf-turnstile" />;
};

export default TurnstileWidget;
