import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from "@/hooks/use-mobile";
import heroSlideHome from "@/assets/hero-slide-home-new.webp";
import heroSlideActivities from "@/assets/hero-slide-activities-new.webp";
import heroMobile1 from "@/assets/hero-mobile-1.png";
import heroMobileActivities from "@/assets/hero-mobile-activities.avif";

// Menu item images for embedded carousel
import friedGreenTomatoes from "@/assets/menu/fried-green-tomatoes.png";
import chickenWafflesBerries from "@/assets/menu/chicken-waffles-berries.png";
import frenchToastOrange from "@/assets/menu/french-toast-orange.png";
import shrimpGrits from "@/assets/menu/shrimp-grits.png";
import steakEggs from "@/assets/menu/steak-eggs.png";
import bloodyMary from "@/assets/menu/bloody-mary.png";
import candiedBacon from "@/assets/menu/candied-bacon.png";
import frenchToastClassic from "@/assets/menu/french-toast-classic.png";
import eggsBiscuit from "@/assets/menu/eggs-biscuit.png";
import beignets from "@/assets/menu/beignets.png";
import crabCakeBenedict from "@/assets/menu/crab-cake-benedict.png";

const heroMenuItems = [
  { image: friedGreenTomatoes, name: "Fried Green Tomatoes" },
  { image: chickenWafflesBerries, name: "Chicken & Waffles" },
  { image: frenchToastOrange, name: "Peach Stuffed French Toast" },
  { image: shrimpGrits, name: "Shrimp & Grits" },
  { image: steakEggs, name: "Steak & Eggs" },
  { image: bloodyMary, name: "Bloody Mary" },
  { image: candiedBacon, name: "Pig Candy" },
  { image: frenchToastClassic, name: "Maple Berry French Toast" },
  { image: eggsBiscuit, name: "21st Anniversary Breakfast" },
  { image: beignets, name: "New Orleans Beignets" },
  { image: crabCakeBenedict, name: "Eggs Meeting Street" },
];

const locations = [
  {
    name: "Toast! on Meeting",
    menuUrl: "https://order.toasttab.com/online/toast-charleston-155-meeting-st",
    orderUrl: "https://order.toasttab.com/online/toast-charleston-155-meeting-st",
  },
  {
    name: "Toast! on King",
    menuUrl: "https://order.toasttab.com/online/toast-king-st-451-king-st",
    orderUrl: "https://order.toasttab.com/online/toast-king-st-451-king-st",
  },
  {
    name: "Toast! on Coleman",
    menuUrl: "https://order.toasttab.com/online/toast-coleman-blvd-835-coleman-boulevard",
    orderUrl: "https://order.toasttab.com/online/toast-coleman-blvd-835-coleman-boulevard",
  },
  {
    name: "Toast! Mt. Pleasant",
    menuUrl: "https://order.toasttab.com/online/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g",
    orderUrl: "https://order.toasttab.com/online/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g",
  },
  {
    name: "Toast! West Ashley",
    menuUrl: "https://order.toasttab.com/online/toast-west-ashley-2026-savannah-hwy-tvrci",
    orderUrl: "https://order.toasttab.com/online/toast-west-ashley-2026-savannah-hwy-tvrci",
  },
  {
    name: "Toast! Summerville",
    menuUrl: "https://order.toasttab.com/online/toast-summerville-717-old-trolley-road-ste-9%20&%2010",
    orderUrl: "https://order.toasttab.com/online/toast-summerville-717-old-trolley-road-ste-9%20&%2010",
  },
  {
    name: "Toast! Savannah",
    menuUrl: "https://order.toasttab.com/online/toast-savannah-1-w-broughton-st",
    orderUrl: "https://order.toasttab.com/online/toast-savannah-1-w-broughton-st",
  },
];

interface Slide {
  type: 'image' | 'menu';
  image?: string;
}

const desktopSlides: Slide[] = [
  { type: 'image', image: heroSlideHome },
  { type: 'image', image: heroSlideActivities },
];

const mobileSlides: Slide[] = [
  { type: 'image', image: heroMobile1 },
  { type: 'image', image: heroMobileActivities },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isMobile = useIsMobile();
  
  const slides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const previousSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          previousSlide();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const renderSlideButtons = (slideIndex: number) => {
    if (slideIndex === 0) {
      // First slide: Order Online dropdown + Become a VIP Member link
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm md:text-lg px-3 sm:px-6 md:px-8 py-2 sm:py-3">
                Order Online <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border">
              {locations.map((location, index) => (
                <DropdownMenuItem key={index} asChild>
                  <a href={location.orderUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    {location.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            size="lg" 
            asChild 
            className="bg-card/20 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm md:text-lg px-3 sm:px-6 md:px-8 py-2 sm:py-3"
          >
            <a href="/rewards">Become a VIP Member</a>
          </Button>
        </>
      );
    } else {
      // Second slide: Get Tickets button
      return (
        <Button 
          size="lg" 
          asChild 
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm md:text-lg px-3 sm:px-6 md:px-8 py-2 sm:py-3"
        >
          <a href="https://linktr.ee/unforgettablecharleston" target="_blank" rel="noopener noreferrer">
            Get Tickets!
          </a>
        </Button>
      );
    }
  };

  return (
    <section 
      className="relative w-full overflow-hidden pt-16 sm:pt-20 bg-muted" 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`w-full transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? "relative opacity-100 translate-x-0" 
                : index < currentSlide 
                  ? "absolute top-0 left-0 opacity-0 -translate-x-full" 
                  : "absolute top-0 left-0 opacity-0 translate-x-full"
            }`}
          >
            {slide.type === 'image' && (
              <>
                <img 
                  src={slide.image} 
                  alt={`Slide ${index + 1}`} 
                  className={`w-full h-auto object-contain ${isMobile ? "max-w-[800px] max-h-[800px] mx-auto" : "max-h-[70vh]"}`}
                  style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
                  loading="eager"
                  decoding="sync"
                />
                {/* Buttons positioned at the bottom for image slides */}
                <div className={`absolute left-0 right-0 flex justify-center z-10 ${index === 1 ? 'bottom-4 sm:bottom-6 md:bottom-8' : 'bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24'}`}>
                  <div className="flex flex-wrap gap-2 sm:gap-4 justify-center px-4">
                    {renderSlideButtons(index)}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={previousSlide} 
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg touch-manipulation"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg touch-manipulation"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => goToSlide(index)} 
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-12 bg-accent" : "w-2 bg-card/50 hover:bg-card/70"}`} 
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;