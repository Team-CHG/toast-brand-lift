import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import toastLogo from "@/assets/toast-logo.png";

const RewardsWidget = () => {
  const [state, setState] = useState<"popup" | "minimized" | "expanded">("popup");
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    // Check if popup was already shown this session
    const shown = sessionStorage.getItem("rewards-popup-shown");
    if (shown) {
      setState("minimized");
      setHasShownPopup(true);
    } else {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setState("popup");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    sessionStorage.setItem("rewards-popup-shown", "true");
    setHasShownPopup(true);
    setState("minimized");
  };

  const handleMinimizedClick = () => {
    setState("expanded");
  };

  const handleCloseExpanded = () => {
    setState("minimized");
  };

  // Initial popup
  if (state === "popup" && !hasShownPopup) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-in zoom-in-95 fade-in duration-300">
          <button
            onClick={handleClosePopup}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
              <Gift className="h-8 w-8 text-primary-foreground" />
            </div>

            <h2 className="text-2xl font-bold text-primary mb-6">
              Sign up for rewards
            </h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎁</span>
              <p className="text-foreground"><span className="font-bold">$10</span> for every $100 spent</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">💰</span>
              <p className="text-foreground"><span className="font-bold">1 point</span> per $1 spent</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🕐</span>
              <p className="text-foreground"><span className="font-bold">Double points</span> Mon–Fri, 12–3 PM</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎂</span>
              <p className="text-foreground"><span className="font-bold">Birthday surprise</span> included!</p>
            </div>
          </div>

          <Button
            size="lg"
            asChild
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg"
          >
            <a
              href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN REWARDS
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Minimized button at bottom
  if (state === "minimized") {
    return (
      <button
        onClick={handleMinimizedClick}
        className="fixed bottom-4 left-4 z-[90] bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold animate-in slide-in-from-bottom-4 fade-in"
      >
        <Gift className="h-5 w-5" />
        <span>Get $10</span>
      </button>
    );
  }

  // Expanded widget at bottom left
  if (state === "expanded") {
    return (
      <div className="fixed bottom-4 left-4 z-[90] bg-card rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-in zoom-in-95 slide-in-from-bottom-4 fade-in duration-300">
        <button
          onClick={handleCloseExpanded}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>

        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary mb-3">
            <Gift className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-bold text-primary">
            Sign up for rewards
          </h3>
        </div>

        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎁</span>
            <p className="text-foreground"><span className="font-bold">$10</span> for every $100 spent</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🕐</span>
            <p className="text-foreground"><span className="font-bold">Double points</span> Mon–Fri, 12–3 PM</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🎂</span>
            <p className="text-foreground"><span className="font-bold">Birthday surprise</span> included!</p>
          </div>
        </div>

        <Button
          size="default"
          asChild
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <a
            href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN REWARDS
          </a>
        </Button>
      </div>
    );
  }

  return null;
};

export default RewardsWidget;
