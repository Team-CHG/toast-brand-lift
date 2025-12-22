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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6 p-2">
            <img src={toastLogo} alt="Toast! All Day" className="w-full h-full object-contain" />
          </div>

            <h2 className="text-2xl font-bold text-primary mb-4">
              GET $10 FOR EVERY $100 SPENT!
            </h2>

            <p className="text-muted-foreground mb-4">
              A $10 reward will automatically be applied to your account upon spending $100 at any Toast! All Day location or the fine restaurants listed below.
            </p>

            <p className="text-muted-foreground mb-4">
              The more you spend, the more points you accumulate. You'll also receive exclusive invites to special events, try new menu items before anyone else, and get special perks!
            </p>

            <div className="bg-accent/10 rounded-lg p-3 mb-6">
              <p className="text-accent font-semibold text-sm">
                ⭐ Earn double points Monday-Friday 12-3pm
              </p>
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
                Register Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Minimized button at bottom
  if (state === "minimized") {
    return (
      <button
        onClick={handleMinimizedClick}
        className="fixed bottom-4 left-4 z-[90] bg-accent text-accent-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold animate-in slide-in-from-bottom-4 fade-in"
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

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4 p-1.5">
            <img src={toastLogo} alt="Toast! All Day" className="w-full h-full object-contain" />
          </div>

          <h3 className="text-xl font-bold text-primary mb-3">
            GET $10 FOR EVERY $100 SPENT!
          </h3>

          <p className="text-sm text-muted-foreground mb-3">
            A $10 reward will automatically be applied to your account upon spending $100 at any Toast! All Day location or the fine restaurants listed below.
          </p>

          <p className="text-sm text-muted-foreground mb-3">
            The more you spend, the more points you accumulate. You'll also receive exclusive invites to special events, try new menu items before anyone else, and get special perks!
          </p>

          <div className="bg-accent/10 rounded-lg p-2 mb-4">
            <p className="text-accent font-semibold text-xs">
              ⭐ Earn double points Monday-Friday 12-3pm
            </p>
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
              Register Now
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default RewardsWidget;
