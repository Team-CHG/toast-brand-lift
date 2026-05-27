import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Navigate } from "react-router-dom";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import FestiveBackdrop from "./components/FestiveBackdrop";

// Code-split every non-home route to shrink initial JS bundle
const RewardsWidget = lazy(() => import("./components/RewardsWidget"));
const Locations = lazy(() => import("./pages/Locations"));
const About = lazy(() => import("./pages/About"));
const Catering = lazy(() => import("./pages/Catering"));
const Contact = lazy(() => import("./pages/Contact"));
const Rewards = lazy(() => import("./pages/Rewards"));
const DownloadAppPage = lazy(() => import("./pages/DownloadApp"));
const Franchise = lazy(() => import("./pages/Franchise"));
const Blog = lazy(() => import("./pages/Blog"));
const MothersDay = lazy(() => import("./pages/events/MothersDay"));
const GiftCardsPage = lazy(() => import("./pages/events/MothersDayGiftCards"));
const DownloadApp = lazy(() => import("./pages/events/DownloadApp"));
const UnlimitedDrinkPass = lazy(() => import("./pages/events/UnlimitedDrinkPass"));
const MilitaryDiscount = lazy(() => import("./pages/events/MilitaryDiscount"));
const Anniversary = lazy(() => import("./pages/events/Anniversary"));
const SoupSaladSandwich = lazy(() => import("./pages/events/SoupSaladSandwich"));
const BlackFridayGiftCard = lazy(() => import("./pages/events/BlackFridayGiftCard"));
const VeteransDay = lazy(() => import("./pages/events/VeteransDay"));
const BestBrunch = lazy(() => import("./pages/events/BestBrunch"));
const BestBreakfastBrunch = lazy(() => import("./pages/events/BestBreakfastBrunch"));
const ValentinesDay = lazy(() => import("./pages/events/ValentinesDay"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const ToastMeeting = lazy(() => import("./pages/locations/ToastMeeting"));
const ToastKing = lazy(() => import("./pages/locations/ToastKing"));
const ToastMtPleasant = lazy(() => import("./pages/locations/ToastMtPleasant"));
const ToastWestAshley = lazy(() => import("./pages/locations/ToastWestAshley"));
const ToastSummerville = lazy(() => import("./pages/locations/ToastSummerville"));
const ToastSavannah = lazy(() => import("./pages/locations/ToastSavannah"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LocalBusinessSchema />
      <Suspense fallback={null}>
        <RewardsWidget />
      </Suspense>
      <BrowserRouter>
        <div className="relative min-h-screen">
          <FestiveBackdrop />
          <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/toast-meeting" element={<ToastMeeting />} />
            <Route path="/locations/toast-king" element={<ToastKing />} />
            
            <Route path="/locations/toast-mt-pleasant" element={<ToastMtPleasant />} />
            <Route path="/locations/toast-west-ashley" element={<ToastWestAshley />} />
            <Route path="/locations/toast-summerville" element={<ToastSummerville />} />
            <Route path="/locations/toast-savannah" element={<ToastSavannah />} />
            <Route path="/about" element={<About />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/download-app" element={<DownloadAppPage />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/mothers-day" element={<MothersDay />} />
            <Route path="/gift-cards" element={<GiftCardsPage />} />
            <Route path="/mothers-day-gift-cards" element={<Navigate to="/gift-cards" replace />} />
            <Route path="/blog/download-app" element={<DownloadApp />} />
            <Route path="/blog/unlimited-drink-pass" element={<UnlimitedDrinkPass />} />
            <Route path="/blog/military-discount" element={<MilitaryDiscount />} />
            <Route path="/blog/anniversary" element={<Anniversary />} />
            <Route path="/blog/soup-salad-sandwich" element={<SoupSaladSandwich />} />
            <Route path="/blog/black-friday-gift-card" element={<BlackFridayGiftCard />} />
            <Route path="/blog/veterans-day" element={<VeteransDay />} />
            <Route path="/blog/best-brunch" element={<BestBrunch />} />
            <Route path="/blog/best-breakfast-brunch" element={<BestBreakfastBrunch />} />
            <Route path="/blog/valentines-day" element={<ValentinesDay />} />
            {/* Redirect old news-events URLs */}
            <Route path="/news-events/*" element={<Navigate to="/blog" replace />} />
            <Route path="/news-events" element={<Navigate to="/blog" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
