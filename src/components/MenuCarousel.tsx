import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Menu item images
import friedGreenTomatoes from "@/assets/menu/fried-green-tomatoes.png";
import chickenWafflesBerries from "@/assets/menu/chicken-waffles-berries.png";
import frenchToastOrange from "@/assets/menu/french-toast-orange.png";
import shrimpGrits from "@/assets/menu/shrimp-grits.png";
import steakEggs from "@/assets/menu/steak-eggs.png";
import bloodyMary from "@/assets/menu/bloody-mary.png";
import candiedBacon from "@/assets/menu/candied-bacon.png";
import frenchToastClassic from "@/assets/menu/french-toast-classic.png";
import eggsBiscuit from "@/assets/menu/eggs-biscuit.png";
import veggieOmelette from "@/assets/menu/veggie-omelette.png";
import beignets from "@/assets/menu/beignets.png";
import avocadoToast from "@/assets/menu/avocado-toast.png";
import doubleCheeseburger from "@/assets/menu/double-cheeseburger.png";
import englishBreakfast from "@/assets/menu/english-breakfast.png";
import crabCakeBenedict from "@/assets/menu/crab-cake-benedict.png";
import chickenBenedict from "@/assets/menu/chicken-benedict.png";

const menuItems = [
  { image: friedGreenTomatoes, name: "Fried Green Tomatoes" },
  { image: chickenWafflesBerries, name: "Chicken & Waffles" },
  { image: frenchToastOrange, name: "Peach Stuffed French Toast" },
  { image: shrimpGrits, name: "Shrimp & Grits" },
  { image: steakEggs, name: "Steak & Eggs" },
  { image: bloodyMary, name: "Bloody Mary" },
  { image: candiedBacon, name: "Pig Candy" },
  { image: frenchToastClassic, name: "Maple Berry French Toast" },
  { image: eggsBiscuit, name: "21 Anniversary Breakfast" },
  { image: veggieOmelette, name: "Veggie Omelette" },
  { image: beignets, name: "Beignets" },
  { image: avocadoToast, name: "Avocado Toast" },
  { image: doubleCheeseburger, name: "Double Cheeseburger" },
  { image: englishBreakfast, name: "English Breakfast" },
  { image: crabCakeBenedict, name: "Crab Cake Benedict" },
  { image: chickenBenedict, name: "Chicken Benedict" },
];

const MenuCarousel = () => {
  return (
    <section className="py-12 bg-complementary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-8">Our Menu Favorites</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {menuItems.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-medium text-sm">{item.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default MenuCarousel;
