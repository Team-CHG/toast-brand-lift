import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBreakfast from "@/assets/hero-breakfast.jpg";
import heroAvocadoToast from "@/assets/hero-avocado-toast.jpg";
import heroPancakes from "@/assets/hero-pancakes.jpg";

const slides = [
  {
    image: heroBreakfast,
    title: "We Put the Good in Morning",
    subtitle: "Mornings are our thing. We're here to make your breakfast a little brighter each day.",
    caption: "French Toast with Fresh Berries"
  },
  {
    image: heroAvocadoToast,
    title: "Crafted with Care",
    subtitle: "Every dish is prepared fresh with the finest ingredients for an unforgettable experience.",
    caption: "Artisan Avocado Toast"
  },
  {
    image: heroPancakes,
    title: "Stack Your Day Right",
    subtitle: "Fluffy pancakes and warm syrup – the perfect start to any morning.",
    caption: "Signature Buttermilk Pancakes"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-primary-foreground">
              <p className="text-sm uppercase tracking-widest mb-4 opacity-90">
                Breakfast · Brunch · Lunch
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-95 leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                  <a href="/locations">Order Online</a>
                </Button>
                <Button size="lg" asChild variant="outline" className="bg-card/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/30 text-lg px-8">
                  <a href="/locations">Find Location</a>
                </Button>
              </div>
              <p className="mt-8 text-sm opacity-75 italic">{slide.caption}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
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
