import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";
import { Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import logo from "@/assets/toast-logo.webp";
import { HOLIDAY_GIFT_CARDS as offer, shouldShowHolidayGiftCards } from "@/lib/holidayGiftCards";

// Also prevents repeated prompts during navigation when browser storage is unavailable.
let shownInThisPageSession = false;

export default function HolidayGiftCardPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const wasShown = () => {
      try {
        return shownInThisPageSession || sessionStorage.getItem(offer.sessionKey) === "true";
      } catch {
        return shownInThisPageSession;
      }
    };
    if (!shouldShowHolidayGiftCards(wasShown())) return;
    const timer = window.setTimeout(() => {
      if (!shouldShowHolidayGiftCards(wasShown())) return;
      shownInThisPageSession = true;
      try { sessionStorage.setItem(offer.sessionKey, "true"); } catch { /* Keep dismissal functional without storage. */ }
      setOpen(true);
    }, offer.delayMs);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="z-[60] bg-foreground/40 motion-reduce:animate-none" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-[61] w-[calc(100%-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg border border-accent/30 bg-complementary p-6 text-complementary-foreground shadow-lg sm:p-9 focus:outline-none">
          <DialogClose asChild>
            <Button variant="ghost" size="icon" aria-label="Close holiday gift card offer" className="absolute right-2 top-2 text-primary hover:bg-accent/15">
              <X aria-hidden="true" />
            </Button>
          </DialogClose>
          <img src={logo} alt="Toast! All Day" width={160} height={96} className="mx-auto mb-5 h-20 w-36 object-contain" />
          <DialogTitle className="text-center text-2xl font-extrabold leading-tight tracking-normal text-primary sm:text-3xl">
            {offer.headline}
          </DialogTitle>
          <DialogDescription asChild>
            <div className="my-6 space-y-4 text-base leading-relaxed text-primary sm:text-lg">
              {offer.offers.map((tier) => <p key={tier.purchase}>{tier.body}</p>)}
            </div>
          </DialogDescription>
          <Button asChild size="lg" className="w-full bg-highlight text-highlight-foreground hover:bg-highlight/90" onClick={() => setOpen(false)}>
            <a href={offer.url} target="_blank" rel="noopener noreferrer"><Gift aria-hidden="true" />{offer.button}</a>
          </Button>
          <p className="mt-3 text-center text-sm leading-relaxed text-primary">{offer.note}</p>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}