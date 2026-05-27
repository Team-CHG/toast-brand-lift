import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Menu item images.
// Each item explicitly imports the AVIF, WebP, and PNG variants so Vite
// fingerprints all three with matching hashes at build time. Previously we
// derived the AVIF/WebP URLs by string-replacing the extension on the
// hashed PNG path, which produced 404s in production where the AVIF/WebP
// files were never emitted to the bundle.
import friedGreenTomatoesPng from "@/assets/menu/fried-green-tomatoes.png";
import friedGreenTomatoesWebp from "@/assets/menu/fried-green-tomatoes.webp";
import friedGreenTomatoesAvif from "@/assets/menu/fried-green-tomatoes.avif";
import chickenWafflesBerriesPng from "@/assets/menu/chicken-waffles-berries.png";
import chickenWafflesBerriesWebp from "@/assets/menu/chicken-waffles-berries.webp";
import chickenWafflesBerriesAvif from "@/assets/menu/chicken-waffles-berries.avif";
import frenchToastOrangePng from "@/assets/menu/french-toast-orange.png";
import frenchToastOrangeWebp from "@/assets/menu/french-toast-orange.webp";
import frenchToastOrangeAvif from "@/assets/menu/french-toast-orange.avif";
import shrimpGritsPng from "@/assets/menu/shrimp-grits.png";
import shrimpGritsWebp from "@/assets/menu/shrimp-grits.webp";
import shrimpGritsAvif from "@/assets/menu/shrimp-grits.avif";
import steakEggsPng from "@/assets/menu/steak-eggs.png";
import steakEggsWebp from "@/assets/menu/steak-eggs.webp";
import steakEggsAvif from "@/assets/menu/steak-eggs.avif";
import bloodyMaryPng from "@/assets/menu/bloody-mary.png";
import bloodyMaryWebp from "@/assets/menu/bloody-mary.webp";
import bloodyMaryAvif from "@/assets/menu/bloody-mary.avif";
import candiedBaconPng from "@/assets/menu/candied-bacon.png";
import candiedBaconWebp from "@/assets/menu/candied-bacon.webp";
import candiedBaconAvif from "@/assets/menu/candied-bacon.avif";
import frenchToastClassicPng from "@/assets/menu/french-toast-classic.png";
import frenchToastClassicWebp from "@/assets/menu/french-toast-classic.webp";
import frenchToastClassicAvif from "@/assets/menu/french-toast-classic.avif";
import eggsBiscuitPng from "@/assets/menu/eggs-biscuit.png";
import eggsBiscuitWebp from "@/assets/menu/eggs-biscuit.webp";
import eggsBiscuitAvif from "@/assets/menu/eggs-biscuit.avif";
import veggieOmelettePng from "@/assets/menu/veggie-omelette.png";
import veggieOmeletteWebp from "@/assets/menu/veggie-omelette.webp";
import veggieOmeletteAvif from "@/assets/menu/veggie-omelette.avif";
import beignetsPng from "@/assets/menu/beignets.png";
import beignetsWebp from "@/assets/menu/beignets.webp";
import beignetsAvif from "@/assets/menu/beignets.avif";
import avocadoToastPng from "@/assets/menu/avocado-toast.png";
import avocadoToastWebp from "@/assets/menu/avocado-toast.webp";
import avocadoToastAvif from "@/assets/menu/avocado-toast.avif";
import doubleCheeseburgerPng from "@/assets/menu/double-cheeseburger.png";
import doubleCheeseburgerWebp from "@/assets/menu/double-cheeseburger.webp";
import doubleCheeseburgerAvif from "@/assets/menu/double-cheeseburger.avif";
import englishBreakfastPng from "@/assets/menu/english-breakfast.png";
import englishBreakfastWebp from "@/assets/menu/english-breakfast.webp";
import englishBreakfastAvif from "@/assets/menu/english-breakfast.avif";
import crabCakeBenedictPng from "@/assets/menu/crab-cake-benedict.png";
import crabCakeBenedictWebp from "@/assets/menu/crab-cake-benedict.webp";
import crabCakeBenedictAvif from "@/assets/menu/crab-cake-benedict.avif";

const menuItems = [
  { png: friedGreenTomatoesPng, webp: friedGreenTomatoesWebp, avif: friedGreenTomatoesAvif, name: "Fried Green Tomatoes" },
  { png: chickenWafflesBerriesPng, webp: chickenWafflesBerriesWebp, avif: chickenWafflesBerriesAvif, name: "Chicken & Waffles" },
  { png: frenchToastOrangePng, webp: frenchToastOrangeWebp, avif: frenchToastOrangeAvif, name: "Peach Stuffed French Toast" },
  { png: shrimpGritsPng, webp: shrimpGritsWebp, avif: shrimpGritsAvif, name: "Shrimp & Grits" },
  { png: steakEggsPng, webp: steakEggsWebp, avif: steakEggsAvif, name: "Steak & Eggs" },
  { png: bloodyMaryPng, webp: bloodyMaryWebp, avif: bloodyMaryAvif, name: "Bloody Mary" },
  { png: candiedBaconPng, webp: candiedBaconWebp, avif: candiedBaconAvif, name: "Pig Candy" },
  { png: frenchToastClassicPng, webp: frenchToastClassicWebp, avif: frenchToastClassicAvif, name: "Maple Berry French Toast" },
  { png: eggsBiscuitPng, webp: eggsBiscuitWebp, avif: eggsBiscuitAvif, name: "21st Anniversary Breakfast" },
  { png: veggieOmelettePng, webp: veggieOmeletteWebp, avif: veggieOmeletteAvif, name: "Veggie Omelette" },
  { png: beignetsPng, webp: beignetsWebp, avif: beignetsAvif, name: "New Orleans Beignets" },
  { png: avocadoToastPng, webp: avocadoToastWebp, avif: avocadoToastAvif, name: "Avocado Toast" },
  { png: doubleCheeseburgerPng, webp: doubleCheeseburgerWebp, avif: doubleCheeseburgerAvif, name: "Double Cheeseburger" },
  { png: englishBreakfastPng, webp: englishBreakfastWebp, avif: englishBreakfastAvif, name: "Power Plate" },
  { png: crabCakeBenedictPng, webp: crabCakeBenedictWebp, avif: crabCakeBenedictAvif, name: "Eggs Meeting Street" },
];

interface MenuCarouselProps {
  showHeader?: boolean;
}

const MenuCarousel = ({ showHeader = true }: MenuCarouselProps) => {
  return (
    <div className={showHeader ? "py-12 bg-complementary" : ""}>
      <div className={showHeader ? "container mx-auto px-4" : ""}>
        {showHeader && <h2 className="text-3xl text-center mb-8">Our Menu Favorites</h2>}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-3">
            {menuItems.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-3 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <picture>
                      <source srcSet={item.avif} type="image/avif" />
                      <source srcSet={item.webp} type="image/webp" />
                      <img
                        src={item.png}
                        alt={item.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="p-2 text-center">
                    <p className="font-medium text-xs">{item.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default MenuCarousel;
