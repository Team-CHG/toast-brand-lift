import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
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
  image: heroSlide1,
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
  image: heroSlide2,
  buttons: [{
    label: "Book Here",
    href: "https://linktr.ee/unforgettablecharleston",
    variant: "default"
  }]
}, {
  image: heroSlide3,
  buttons: [{
    label: "View Full Menu",
    href: "/menu",
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
  return (
    <section 
      className="relative h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:h-[700px] overflow-hidden mt-20"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div key={index} className={`${index === 0 ? 'relative' : 'absolute inset-0'} transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-contain md:object-contain lg:object-cover" />
          
          {/* Buttons positioned at the bottom */}
          <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-0 right-0 flex justify-center">
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center px-4">
              {slide.buttons.map((button, btnIndex) => (
                <Button key={btnIndex} size="lg" asChild className={button.variant === "outline" ? "bg-card/20 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-8" : "bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-8"}>
                  {isExternalLink(button.href) ? (
                    <a href={button.href} target="_blank" rel="noopener noreferrer">
                      {button.label}
                    </a>
                  ) : (
                    <a href={button.href}>{button.label}</a>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button onClick={previousSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg">
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-12 bg-accent" : "w-2 bg-card/50 hover:bg-card/70"}`} />
        ))}
      </div>
    </section>
  );
};
export default HeroCarousel;