import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Locations from "./pages/Locations";
import About from "./pages/About";
import Catering from "./pages/Catering";
import Contact from "./pages/Contact";
import Rewards from "./pages/Rewards";
import DownloadAppPage from "./pages/DownloadApp";
import Franchise from "./pages/Franchise";
import NewsEvents from "./pages/NewsEvents";
import MothersDay from "./pages/events/MothersDay";
import DownloadApp from "./pages/events/DownloadApp";
import UnlimitedDrinkPass from "./pages/events/UnlimitedDrinkPass";
import MilitaryDiscount from "./pages/events/MilitaryDiscount";
import Anniversary from "./pages/events/Anniversary";
import SoupSaladSandwich from "./pages/events/SoupSaladSandwich";
import BlackFridayGiftCard from "./pages/events/BlackFridayGiftCard";
import VeteransDay from "./pages/events/VeteransDay";
import BestBrunch from "./pages/events/BestBrunch";
import ValentinesDay from "./pages/events/ValentinesDay";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RewardsWidget from "./components/RewardsWidget";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import ToastMeeting from "./pages/locations/ToastMeeting";
import ToastKing from "./pages/locations/ToastKing";
import ToastColeman from "./pages/locations/ToastColeman";
import ToastMtPleasant from "./pages/locations/ToastMtPleasant";
import ToastWestAshley from "./pages/locations/ToastWestAshley";
import ToastSummerville from "./pages/locations/ToastSummerville";
import ToastSavannah from "./pages/locations/ToastSavannah";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LocalBusinessSchema />
      <RewardsWidget />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/toast-meeting" element={<ToastMeeting />} />
          <Route path="/locations/toast-king" element={<ToastKing />} />
          <Route path="/locations/toast-coleman" element={<ToastColeman />} />
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
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/news-events/mothers-day" element={<MothersDay />} />
          <Route path="/news-events/download-app" element={<DownloadApp />} />
          <Route path="/news-events/unlimited-drink-pass" element={<UnlimitedDrinkPass />} />
          <Route path="/news-events/military-discount" element={<MilitaryDiscount />} />
          <Route path="/news-events/anniversary" element={<Anniversary />} />
          <Route path="/news-events/soup-salad-sandwich" element={<SoupSaladSandwich />} />
          <Route path="/news-events/black-friday-gift-card" element={<BlackFridayGiftCard />} />
          <Route path="/news-events/veterans-day" element={<VeteransDay />} />
          <Route path="/news-events/best-brunch" element={<BestBrunch />} />
          <Route path="/news-events/valentines-day" element={<ValentinesDay />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
