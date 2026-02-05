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
import heroSlideHome from "@/assets/hero-slide-home-new.webp";
import heroSlideActivities from "@/assets/hero-slide-activities-new.webp";
import heroMobile1 from "@/assets/hero-mobile-1.png";
import heroMobileActivities from "@/assets/hero-mobile-activities.avif";
import heroVideo from "@/assets/hero-video.mp4";

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
  type: 'video' | 'image';
  src: string;
}

const desktopSlides: Slide[] = [
  { type: 'video', src: heroVideo },
  { type: 'image', src: heroSlideHome },
  { type: 'image', src: heroSlideActivities },
];

const mobileSlides: Slide[] = [
  { type: 'video', src: heroVideo },
  { type: 'image', src: heroMobile1 },
  { type: 'image', src: heroMobileActivities },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isMobile = useIsMobile();
  
  const slides = isMobile ? mobileSlides : desktopSlides;

  // Handle video end - start the carousel cycling
  const handleVideoEnd = () => {
    setVideoEnded(true);
    setCurrentSlide(1); // Move to first image slide
  };

  // Auto-cycle only after video has ended
  useEffect(() => {
    if (!videoEnded) return;
    
    const timer = setInterval(() => {
      setCurrentSlide(prev => {
        const next = prev + 1;
        // Skip video slide (index 0) when cycling
        return next >= slides.length ? 1 : next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [videoEnded, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (index === 0 && videoRef.current) {
      setVideoEnded(false);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const previousSlide = () => {
    setCurrentSlide(prev => {
      if (videoEnded) {
        // Skip video when going backwards after it's played
        const newIndex = prev - 1;
        return newIndex < 1 ? slides.length - 1 : newIndex;
      }
      return (prev - 1 + slides.length) % slides.length;
    });
  };

  const nextSlide = () => {
    if (currentSlide === 0 && !videoEnded) {
      // If on video and it hasn't ended, skip to first image
      setVideoEnded(true);
      setCurrentSlide(1);
    } else {
      setCurrentSlide(prev => {
        const next = prev + 1;
        return next >= slides.length ? 1 : next;
      });
    }
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

  // Get the actual image slide index (0-based among image slides only)
  const getImageSlideIndex = (slideIndex: number) => slideIndex - 1;

  const renderSlideButtons = (imageSlideIndex: number) => {
    if (imageSlideIndex === 0) {
      // First image slide: Order Online dropdown + Become a VIP Member link
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
      // Second image slide: Get Tickets button
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
            {slide.type === 'video' && (
              <video
                ref={videoRef}
                src={slide.src}
                className={`w-full h-auto object-contain ${isMobile ? "max-w-[800px] max-h-[800px] mx-auto" : "max-h-[70vh]"}`}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
              />
            )}
            {slide.type === 'image' && (
              <>
                <img 
                  src={slide.src} 
                  alt={`Slide ${index}`} 
                  className={`w-full h-auto object-contain ${isMobile ? "max-w-[800px] max-h-[800px] mx-auto" : "max-h-[70vh]"}`}
                  style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
                  loading="eager"
                  decoding="sync"
                />
                {/* Buttons positioned at the bottom for image slides */}
                <div className={`absolute left-0 right-0 flex justify-center z-10 ${getImageSlideIndex(index) === 1 ? 'bottom-4 sm:bottom-6 md:bottom-8' : 'bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24'}`}>
                  <div className="flex flex-wrap gap-2 sm:gap-4 justify-center px-4">
                    {renderSlideButtons(getImageSlideIndex(index))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - hide during video playback */}
      {(videoEnded || currentSlide !== 0) && (
        <>
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
        </>
      )}

      {/* Indicators - hide during initial video playback */}
      {(videoEnded || currentSlide !== 0) && (
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.slice(1).map((_, index) => (
            <button 
              key={index} 
              onClick={() => goToSlide(index + 1)} 
              className={`h-2 rounded-full transition-all ${index + 1 === currentSlide ? "w-12 bg-accent" : "w-2 bg-card/50 hover:bg-card/70"}`} 
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroCarousel;
