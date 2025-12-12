import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import toastLogo from "@/assets/toast-logo.png";
import heroBreakfast from "@/assets/hero-breakfast.jpg";
import heroAvocadoToast from "@/assets/hero-avocado-toast.jpg";
import heroPancakes from "@/assets/hero-pancakes.jpg";

interface SlideButton {
  label: string;
  href: string;
  variant?: "default" | "outline";
}

interface Slide {
  id: number;
  buttons: SlideButton[];
}

const slides: Slide[] = [
  {
    id: 1,
    buttons: [
      {
        label: "Order Online",
        href: "https://toastallday.com/order-online/",
        variant: "default",
      },
      {
        label: "Become a VIP Member",
        href: "https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup",
        variant: "outline",
      },
    ],
  },
  {
    id: 2,
    buttons: [
      {
        label: "Book Here",
        href: "https://linktr.ee/unforgettablecharleston",
        variant: "default",
      },
    ],
  },
  {
    id: 3,
    buttons: [
      {
        label: "View Full Menu",
        href: "/menu",
        variant: "default",
      },
    ],
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
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

  const renderSlideContent = (slideId: number) => {
    switch (slideId) {
      case 1:
        return (
          <div className="relative w-full h-full bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100">
            {/* Background food image */}
            <div className="absolute right-0 top-0 w-1/2 md:w-3/5 h-full">
              <img
                src={heroBreakfast}
                alt="Delicious breakfast"
                className="w-full h-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-amber-50/80 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-8">
              <img
                src={toastLogo}
                alt="Toast Logo"
                className="w-20 sm:w-24 md:w-32 lg:w-40 mb-4 md:mb-6"
              />
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-amber-900 leading-tight">
                Toast Early
                <br />
                Breakfast
              </h1>
              <p className="mt-4 md:mt-6 text-amber-800/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-md font-medium italic">
                we're officially 21! and we're celebrating by rolling BACK the prices, and feeding YOU like it's 2005.
              </p>
              <p className="mt-4 md:mt-8 text-amber-700 text-xs sm:text-sm md:text-base italic">
                All special offers are for loyalty members only.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500">
            {/* Background food image */}
            <div className="absolute right-0 bottom-0 w-2/3 md:w-1/2 h-3/4 md:h-full">
              <img
                src={heroAvocadoToast}
                alt="Avocado toast"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-500/60 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-8">
              <div className="max-w-lg">
                <h2 className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium mb-2">
                  Private Events & Catering
                </h2>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Make Your Next
                  <br />
                  Event Unforgettable
                </h1>
                <p className="mt-4 md:mt-6 text-white/90 text-sm sm:text-base md:text-lg max-w-md">
                  From intimate gatherings to large celebrations, let us cater your special moments with our signature breakfast and brunch dishes.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="relative w-full h-full bg-gradient-to-r from-amber-800 via-amber-700 to-orange-700">
            {/* Background food image */}
            <div className="absolute left-0 top-0 w-full h-full">
              <img
                src={heroPancakes}
                alt="Delicious pancakes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/70 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-8">
              <div className="max-w-lg">
                <h2 className="text-amber-200 text-lg sm:text-xl md:text-2xl font-medium mb-2">
                  Explore Our
                </h2>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Signature
                  <br />
                  Menu
                </h1>
                <p className="mt-4 md:mt-6 text-white/90 text-sm sm:text-base md:text-lg max-w-md">
                  From fluffy pancakes to savory benedicts, discover the dishes that have made Toast a Charleston favorite for over two decades.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden mt-20"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {renderSlideContent(slide.id)}

          {/* Buttons positioned at the bottom */}
          <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-0 right-0 flex justify-center z-20">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center px-4 w-full sm:w-auto">
              {slide.buttons.map((button, btnIndex) => (
                <Button
                  key={btnIndex}
                  size="lg"
                  asChild
                  className={
                    button.variant === "outline"
                      ? "w-full sm:w-auto bg-card/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-8"
                      : "w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-8"
                  }
                >
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
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-12 bg-accent"
                : "w-2 bg-card/50 hover:bg-card/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
