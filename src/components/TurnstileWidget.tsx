import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

const TurnstileWidget = ({ onVerify, onError, onExpire }: TurnstileWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const callbacksRef = useRef({ onVerify, onError, onExpire });
  const [siteKey, setSiteKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Keep callbacks ref updated
  callbacksRef.current = { onVerify, onError, onExpire };

  // Fetch site key from edge function
  useEffect(() => {
    const fetchSiteKey = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("get-turnstile-key");
        
        if (error) {
          console.error("Error fetching Turnstile key:", error);
          setError("Failed to load verification widget");
          return;
        }

        if (data?.siteKey) {
          setSiteKey(data.siteKey);
        } else {
          setError("Turnstile key not configured");
        }
      } catch (err) {
        console.error("Error fetching Turnstile key:", err);
        setError("Failed to load verification widget");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSiteKey();
  }, []);

  // Load Turnstile script and render widget once we have the site key
  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    const container = containerRef.current;

    const renderWidget = () => {
      if (!container || !window.turnstile || widgetIdRef.current) return;

      console.log("Rendering Turnstile widget with explicit mode...");
      try {
        widgetIdRef.current = window.turnstile.render(container, {
          sitekey: siteKey,
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
      } catch (err) {
        console.error("Error rendering Turnstile widget:", err);
        setError("Failed to render verification widget");
      }
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
      const checkLoaded = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkLoaded);
          renderWidget();
        }
      }, 100);
      
      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkLoaded), 10000);
      return;
    }

    // Load the Turnstile script with explicit render mode
    console.log("Loading Turnstile script...");
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    
    script.onload = () => {
      console.log("Turnstile script loaded");
      // Small delay to ensure turnstile is ready
      setTimeout(renderWidget, 100);
    };

    script.onerror = () => {
      console.error("Failed to load Turnstile script");
      setError("Failed to load verification widget");
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
  }, [siteKey]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4 text-muted-foreground">
        Loading verification...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-4 text-destructive text-sm">
        {error}
      </div>
    );
  }

  return <div ref={containerRef} className="cf-turnstile" />;
};

export default TurnstileWidget;
