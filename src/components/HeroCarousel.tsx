import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlideAnniversary from "@/assets/hero-slide-anniversary.png";
import heroSlideMenu from "@/assets/hero-slide-menu.png";
import heroSlideActivities from "@/assets/hero-slide-activities.png";

interface SlideButton {
  label: string;
  href: string;
  variant?: "default" | "outline";
}
interface Slide {
  image: string;
  buttons: SlideButton[];
}
const slides: Slide[] = [{
  image: heroSlideAnniversary,
  buttons: [{
    label: "Order Online",
    href: "https://toastallday.com/order-online/",
    variant: "default"
  }, {
    label: "Become a VIP Member",
    href: "https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup",
    variant: "outline"
  }]
}, {
  image: heroSlideMenu,
  buttons: [{
    label: "View Full Menu",
    href: "/menu",
    variant: "default"
  }]
}, {
  image: heroSlideActivities,
  buttons: [{
    label: "Learn More",
    href: "https://linktr.ee/unforgettablecharleston",
    variant: "default"
  }]
}];
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
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
  const isExternalLink = (href: string) => href.startsWith("http");
  return <section className="relative w-full overflow-hidden pt-16 sm:pt-20 bg-muted" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      
      {slides.map((slide, index) => <div key={index} className={`transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 block" : "opacity-0 hidden"}`}>
          <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-contain" />
          
          {/* Buttons positioned at the bottom */}
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-0 right-0 flex justify-center z-10">
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center px-4">
              {slide.buttons.map((button, btnIndex) => <Button key={btnIndex} size="lg" asChild className={button.variant === "outline" ? "bg-card/20 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm md:text-lg px-3 sm:px-6 md:px-8 py-2 sm:py-3" : "bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm md:text-lg px-3 sm:px-6 md:px-8 py-2 sm:py-3"}>
                  {isExternalLink(button.href) ? <a href={button.href} target="_blank" rel="noopener noreferrer">
                      {button.label}
                    </a> : <a href={button.href}>{button.label}</a>}
                </Button>)}
            </div>
          </div>
        </div>)}

      {/* Navigation Arrows */}
      <button onClick={previousSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg touch-manipulation">
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg touch-manipulation">
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-12 bg-accent" : "w-2 bg-card/50 hover:bg-card/70"}`} />)}
      </div>
    </section>;
};
export default HeroCarousel;