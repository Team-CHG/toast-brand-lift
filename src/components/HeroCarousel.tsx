import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import heroSlide1New from "@/assets/hero-slide-1-new.png";
import heroSlide2New from "@/assets/hero-slide-2-new.png";
import heroSlide3New from "@/assets/hero-slide-3-new.png";
import heroMobile1 from "@/assets/hero-mobile-1.png";
import heroMobile2 from "@/assets/hero-mobile-2.png";
import heroMobile3 from "@/assets/hero-mobile-3.png";

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
  image: string;
}

const desktopSlides: Slide[] = [
  { image: heroSlide1New },
  { image: heroSlide2New },
  { image: heroSlide3New },
];

const mobileSlides: Slide[] = [
  { image: heroMobile1 },
  { image: heroMobile2 },
  { image: heroMobile3 },
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
    } else if (slideIndex === 1) {
      // Second slide: View Full Menu dropdown
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm md:text-lg px-3 sm:px-6 md:px-8 py-2 sm:py-3">
              View Full Menu <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-card border-border">
            {locations.map((location, index) => (
              <DropdownMenuItem key={index} asChild>
                <a href={location.menuUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  {location.name}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    } else {
      // Third slide: Get Tickets button
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
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 block" : "opacity-0 hidden"}`}
        >
          <img 
            src={slide.image} 
            alt={`Slide ${index + 1}`} 
            className={`w-full h-auto object-contain ${isMobile ? "max-w-[800px] max-h-[800px] mx-auto" : "max-h-[70vh]"}`} 
          />
          
          {/* Buttons positioned at the bottom */}
          <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-0 right-0 flex justify-center z-10">
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center px-4">
              {renderSlideButtons(index)}
            </div>
          </div>
        </div>
      ))}

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