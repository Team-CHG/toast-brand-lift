import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const RafflePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-in zoom-in-95 fade-in duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
            <Gift className="h-8 w-8 text-accent" />
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Buy a $50 gift card, get a $20 bonus, and enter our raffle!
          </h2>

          <p className="text-lg text-foreground font-semibold mb-2">
            Your Chance to win BIG!
          </p>

          <p className="text-muted-foreground mb-6">
            Check out our big prizes here
          </p>

          <Button
            size="lg"
            asChild
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg"
          >
            <a
              href="https://charlestonhospitalitygroup.com/giftcard-raffle-contest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enter Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RafflePopup;
