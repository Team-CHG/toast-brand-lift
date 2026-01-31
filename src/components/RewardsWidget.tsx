import { useEffect, useState } from "react";
import { X } from "lucide-react";
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
      <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm">
        <div className="fixed bottom-4 left-4 bg-card rounded-2xl shadow-2xl max-w-sm w-full p-6 sm:p-8 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <button
            onClick={handleClosePopup}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Sign up for rewards
            </h2>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-foreground"><span className="font-bold">$10</span> for every $100 spent</p>
            <p className="text-foreground"><span className="font-bold">1 point</span> per $1 spent</p>
            <p className="text-foreground"><span className="font-bold">Double points</span> Mon–Fri, 12–3 PM</p>
            <p className="text-foreground"><span className="font-bold">Birthday surprise</span> included!</p>
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
        className="fixed bottom-4 left-4 z-[90] bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold animate-in slide-in-from-bottom-4 fade-in"
      >
        Get $10
      </button>
    );
  }

  // Expanded widget at bottom left
  if (state === "expanded") {
    return (
      <div className="fixed bottom-4 left-4 z-[90] bg-card rounded-xl shadow-2xl w-72 p-4 animate-in zoom-in-95 slide-in-from-bottom-4 fade-in duration-300">
        <button
          onClick={handleCloseExpanded}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>

        <div className="text-center mb-3">
          <h3 className="text-base font-bold text-primary">
            Sign up for rewards
          </h3>
        </div>

        <div className="space-y-1.5 mb-3 text-xs">
          <p className="text-foreground"><span className="font-semibold">$10</span> for every $100 spent</p>
          <p className="text-foreground"><span className="font-semibold">2x points</span> Mon–Fri, 12–3 PM</p>
          <p className="text-foreground"><span className="font-semibold">Birthday surprise</span> included!</p>
        </div>

        <Button
          size="sm"
          asChild
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm"
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
