import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Index from "./pages/Index";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import FestiveBackdrop from "./components/FestiveBackdrop";
import ErrorBoundary from "./components/ErrorBoundary";
import { lazyWithRetry } from "./lib/lazyWithRetry";

// Code-split every non-home route to shrink initial JS bundle. Each import is
// wrapped so a one-off chunk failure retries rather than blanking the screen.
const RewardsWidget = lazyWithRetry(() => import("./components/RewardsWidget"));
const Locations = lazyWithRetry(() => import("./pages/Locations"));
const About = lazyWithRetry(() => import("./pages/About"));
const Catering = lazyWithRetry(() => import("./pages/Catering"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const Rewards = lazyWithRetry(() => import("./pages/Rewards"));
const DownloadAppPage = lazyWithRetry(() => import("./pages/DownloadApp"));
const Franchise = lazyWithRetry(() => import("./pages/Franchise"));
const Blog = lazyWithRetry(() => import("./pages/Blog"));
const DownloadApp = lazyWithRetry(() => import("./pages/events/DownloadApp"));
const UnlimitedDrinkPass = lazyWithRetry(
  () => import("./pages/events/UnlimitedDrinkPass"),
);
const MilitaryDiscount = lazyWithRetry(
  () => import("./pages/events/MilitaryDiscount"),
);
const Anniversary = lazyWithRetry(() => import("./pages/events/Anniversary"));
const SoupSaladSandwich = lazyWithRetry(
  () => import("./pages/events/SoupSaladSandwich"),
);
const BlackFridayGiftCard = lazyWithRetry(
  () => import("./pages/events/BlackFridayGiftCard"),
);
const VeteransDay = lazyWithRetry(() => import("./pages/events/VeteransDay"));
const BestBrunch = lazyWithRetry(() => import("./pages/events/BestBrunch"));
const BestBreakfastBrunch = lazyWithRetry(
  () => import("./pages/events/BestBreakfastBrunch"),
);
const ValentinesDay = lazyWithRetry(
  () => import("./pages/events/ValentinesDay"),
);
const BestBrunchCharleston = lazyWithRetry(
  () => import("./pages/blog/BestBrunchCharleston"),
);
const ShrimpAndGritsCharleston = lazyWithRetry(
  () => import("./pages/blog/ShrimpAndGritsCharleston"),
);
const WhatIsLowcountryCuisine = lazyWithRetry(
  () => import("./pages/blog/WhatIsLowcountryCuisine"),
);
const BestBreakfastMtPleasant = lazyWithRetry(
  () => import("./pages/blog/BestBreakfastMtPleasant"),
);
const BestBreakfastSummerville = lazyWithRetry(
  () => import("./pages/blog/BestBreakfastSummerville"),
);
const BestBrunchSavannah = lazyWithRetry(
  () => import("./pages/blog/BestBrunchSavannah"),
);
const CharlestonBrunchCocktails = lazyWithRetry(
  () => import("./pages/blog/CharlestonBrunchCocktails"),
);
const SouthernBreakfastClassics = lazyWithRetry(
  () => import("./pages/blog/SouthernBreakfastClassics"),
);
const DogFriendlyBrunchCharleston = lazyWithRetry(
  () => import("./pages/blog/DogFriendlyBrunchCharleston"),
);
const WhereToEatDowntownCharleston = lazyWithRetry(
  () => import("./pages/blog/WhereToEatDowntownCharleston"),
);
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));
const PrivacyPolicy = lazyWithRetry(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazyWithRetry(() => import("./pages/TermsOfService"));
const ToastMeeting = lazyWithRetry(
  () => import("./pages/locations/ToastMeeting"),
);
const ToastKing = lazyWithRetry(() => import("./pages/locations/ToastKing"));
const ToastMtPleasant = lazyWithRetry(
  () => import("./pages/locations/ToastMtPleasant"),
);
const ToastWestAshley = lazyWithRetry(
  () => import("./pages/locations/ToastWestAshley"),
);
const ToastSummerville = lazyWithRetry(
  () => import("./pages/locations/ToastSummerville"),
);
const ToastSavannah = lazyWithRetry(
  () => import("./pages/locations/ToastSavannah"),
);
const MenuGroup = lazyWithRetry(() => import("./pages/MenuGroup"));
const MenuCategory = lazyWithRetry(() => import("./pages/MenuCategory"));
const MenuItemPage = lazyWithRetry(() => import("./pages/MenuItem"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LocalBusinessSchema />
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <RewardsWidget />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <BrowserRouter>
          <div className="relative min-h-screen">
            <FestiveBackdrop />
            <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/locations" element={<Locations />} />
                <Route
                  path="/locations/toast-meeting"
                  element={<ToastMeeting />}
                />
                <Route path="/locations/toast-king" element={<ToastKing />} />

                <Route
                  path="/locations/toast-mt-pleasant"
                  element={<ToastMtPleasant />}
                />
                <Route
                  path="/locations/toast-west-ashley"
                  element={<ToastWestAshley />}
                />
                <Route
                  path="/locations/toast-summerville"
                  element={<ToastSummerville />}
                />
                <Route
                  path="/locations/toast-savannah"
                  element={<ToastSavannah />}
                />
                <Route path="/menus/:group" element={<MenuGroup />} />
                <Route
                  path="/menus/:group/:category"
                  element={<MenuCategory />}
                />
                <Route
                  path="/menus/:group/:category/:item"
                  element={<MenuItemPage />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route
                  path="/download-app"
                  element={<DownloadAppPage />}
                />
                <Route path="/franchise" element={<Franchise />} />
                <Route path="/blog" element={<Blog />} />
                <Route
                  path="/blog/download-app"
                  element={<DownloadApp />}
                />
                <Route
                  path="/blog/unlimited-drink-pass"
                  element={<UnlimitedDrinkPass />}
                />
                <Route
                  path="/blog/military-discount"
                  element={<MilitaryDiscount />}
                />
                <Route
                  path="/blog/anniversary"
                  element={<Anniversary />}
                />
                <Route
                  path="/blog/soup-salad-sandwich"
                  element={<SoupSaladSandwich />}
                />
                <Route
                  path="/blog/black-friday-gift-card"
                  element={<BlackFridayGiftCard />}
                />
                <Route
                  path="/blog/veterans-day"
                  element={<VeteransDay />}
                />
                <Route path="/blog/best-brunch" element={<BestBrunch />} />
                <Route
                  path="/blog/best-breakfast-brunch"
                  element={<BestBreakfastBrunch />}
                />
                <Route
                  path="/blog/valentines-day"
                  element={<ValentinesDay />}
                />
                <Route
                  path="/blog/best-brunch-charleston"
                  element={<BestBrunchCharleston />}
                />
                <Route
                  path="/blog/shrimp-and-grits-charleston"
                  element={<ShrimpAndGritsCharleston />}
                />
                <Route
                  path="/blog/what-is-lowcountry-cuisine"
                  element={<WhatIsLowcountryCuisine />}
                />
                <Route
                  path="/blog/best-breakfast-mt-pleasant"
                  element={<BestBreakfastMtPleasant />}
                />
                <Route
                  path="/blog/best-breakfast-summerville"
                  element={<BestBreakfastSummerville />}
                />
                <Route
                  path="/blog/best-brunch-savannah"
                  element={<BestBrunchSavannah />}
                />
                <Route
                  path="/blog/charleston-brunch-cocktails"
                  element={<CharlestonBrunchCocktails />}
                />
                <Route
                  path="/blog/southern-breakfast-classics"
                  element={<SouthernBreakfastClassics />}
                />
                <Route
                  path="/blog/dog-friendly-brunch-charleston"
                  element={<DogFriendlyBrunchCharleston />}
                />
                <Route
                  path="/blog/where-to-eat-downtown-charleston"
                  element={<WhereToEatDowntownCharleston />}
                />
                {/* Redirect old news-events URLs */}
                <Route
                  path="/news-events/*"
                  element={<Navigate to="/blog" replace />}
                />
                <Route
                  path="/news-events"
                  element={<Navigate to="/blog" replace />}
                />
                <Route
                  path="/privacy-policy"
                  element={<PrivacyPolicy />}
                />
                <Route
                  path="/terms-of-service"
                  element={<TermsOfService />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
