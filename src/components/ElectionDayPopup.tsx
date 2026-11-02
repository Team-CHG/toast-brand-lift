import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import { MapPin, X } from "lucide-react";
import { Dialog, DialogPortal, DialogOverlay, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ELECTION_DAY, isElectionDay, shouldShowElectionDay } from "@/lib/electionDay";
import breakfast from "@/assets/classic-breakfast.webp.asset.json";
import logo from "@/assets/toast-logo.webp";

export default function ElectionDayPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isElectionDay(new Date())) return;
    let showTimer: ReturnType<typeof setTimeout> | undefined;
    const showAfterLoad = () => {
      showTimer = setTimeout(() => {
        try {
          if (!shouldShowElectionDay(new Date(), sessionStorage.getItem(ELECTION_DAY.sessionKey) === "1")) return;
          sessionStorage.setItem(ELECTION_DAY.sessionKey, "1");
          setOpen(true);
        } catch {
          // Fail closed when session storage is blocked, rather than repeat the offer.
        }
      }, ELECTION_DAY.delayMs);
    };
    if (document.readyState === "complete") showAfterLoad();
    else window.addEventListener("load", showAfterLoad, { once: true });

    const hideIfExpired = () => {
      if (!isElectionDay(new Date())) setOpen(false);
    };
    const expiryTimer = setTimeout(hideIfExpired, Math.max(0, Date.parse(ELECTION_DAY.endExclusive) - Date.now()));
    document.addEventListener("visibilitychange", hideIfExpired);
    window.addEventListener("focus", hideIfExpired);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(expiryTimer);
      window.removeEventListener("load", showAfterLoad);
      document.removeEventListener("visibilitychange", hideIfExpired);
      window.removeEventListener("focus", hideIfExpired);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="z-[100] bg-primary/60 backdrop-blur-sm motion-reduce:animate-none" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg border border-accent/30 bg-complementary text-complementary-foreground shadow-lg outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:animate-none">
          <div className="flex justify-center bg-card px-14 py-3">
            <img src={logo} alt="Toast! All Day" width={220} height={88} className="h-14 w-auto" />
          </div>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" aria-label="Close Election Day offer" title="Close" className="absolute right-2 top-2 text-primary hover:bg-accent/15 hover:text-primary">
              <X />
            </Button>
          </DialogClose>
          <img src={breakfast.url} alt="Toast! Classic Breakfast with eggs and breakfast meat" width={867} height={650} className="aspect-[4/3] max-h-[32dvh] w-full object-cover" decoding="async" />
          <div className="space-y-4 px-6 py-6 text-center sm:px-8">
            <p className="text-sm font-extrabold uppercase text-highlight">Election Day • November 3</p>
            <DialogTitle className="text-3xl font-extrabold leading-tight tracking-normal text-primary sm:text-4xl">{ELECTION_DAY.headline}</DialogTitle>
            <DialogDescription className="mx-auto max-w-sm text-base leading-relaxed text-primary">{ELECTION_DAY.subhead}</DialogDescription>
            <Button asChild size="lg" className="w-full bg-highlight text-highlight-foreground hover:bg-highlight/90 sm:w-auto">
              <Link to="/locations" onClick={() => setOpen(false)}><MapPin />{ELECTION_DAY.button}</Link>
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}