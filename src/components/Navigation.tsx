import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toastLogo from "@/assets/toast-logo.png";

const locations = [
  {
    name: "Toast! on Meeting",
    menuUrl: "https://order.toasttab.com/online/toast-charleston-155-meeting-st",
    orderUrl: "https://order.toasttab.com/online/toast-charleston-155-meeting-st",
    waitlistUrl: "https://tables.toasttab.com/restaurants/68470c10-a7ea-4c0f-aa51-13ad297c1a49/joinWaitlist",
  },
  {
    name: "Toast! on King",
    menuUrl: "https://order.toasttab.com/online/toast-king-st-451-king-st",
    orderUrl: "https://order.toasttab.com/online/toast-king-st-451-king-st",
    waitlistUrl: "https://tables.toasttab.com/restaurants/d54baf9c-c752-4df6-81af-70807504a517/joinWaitlist",
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
    waitlistUrl: "https://tables.toasttab.com/restaurants/05cb9aff-c588-49f4-83c3-125ca914376c/joinWaitlist",
  },
  {
    name: "Toast! West Ashley",
    menuUrl: "https://order.toasttab.com/online/toast-west-ashley-2026-savannah-hwy-tvrci",
    orderUrl: "https://order.toasttab.com/online/toast-west-ashley-2026-savannah-hwy-tvrci",
    waitlistUrl: "https://tables.toasttab.com/restaurants/236efb55-104c-49e1-8b73-3d9af66684ce/joinWaitlist",
  },
  {
    name: "Toast! Summerville",
    menuUrl: "https://order.toasttab.com/online/toast-summerville-717-old-trolley-road-ste-9%20&%2010",
    orderUrl: "https://order.toasttab.com/online/toast-summerville-717-old-trolley-road-ste-9%20&%2010",
    waitlistUrl: "https://tables.toasttab.com/restaurants/48ca16ab-9cc0-4c0b-a826-d3cc2118e44a/joinWaitlist",
  },
  {
    name: "Toast! Savannah",
    menuUrl: "https://order.toasttab.com/online/toast-savannah-1-w-broughton-st",
    orderUrl: "https://order.toasttab.com/online/toast-savannah-1-w-broughton-st",
    waitlistUrl: "https://tables.toasttab.com/restaurants/97f1d59a-b51c-4a46-92e7-4251dd54980d/joinWaitlist",
  },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img src={toastLogo} alt="Toast All Day" className="h-16 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Menu <ChevronDown className="h-4 w-4" />
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
            
            <a href="/locations" className="text-foreground hover:text-primary transition-colors font-medium">
              Locations
            </a>
            <a href="/catering" className="text-foreground hover:text-primary transition-colors font-medium">
              Catering
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="lg">
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get in Line <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                {locations.map((location, index) => (
                  location.waitlistUrl && (
                    <DropdownMenuItem key={index} asChild>
                      <a href={location.waitlistUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        {location.name}
                      </a>
                    </DropdownMenuItem>
                  )
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground px-2">Menu</p>
                {locations.map((location, index) => (
                  <a 
                    key={index}
                    href={location.menuUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-2 py-2 text-foreground hover:text-primary transition-colors"
                  >
                    {location.name}
                  </a>
                ))}
              </div>

              <a href="/rewards" className="text-lg font-medium hover:text-primary transition-colors">
                Rewards
              </a>
              <a href="/about" className="text-lg font-medium hover:text-primary transition-colors">
                About Us
              </a>
              <a href="/locations" className="text-lg font-medium hover:text-primary transition-colors">
                Locations
              </a>
              <a href="/news-events" className="text-lg font-medium hover:text-primary transition-colors">
                News & Events
              </a>
              <a href="/catering" className="text-lg font-medium hover:text-primary transition-colors">
                Catering
              </a>
              <a href="/franchise" className="text-lg font-medium hover:text-primary transition-colors">
                Franchise
              </a>
              <a href="https://payroll.toasttab.com/jobs/chgllc" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                Careers
              </a>
              <a href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                Contact Us
              </a>

              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Order Online</p>
                  {locations.map((location, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={location.orderUrl} target="_blank" rel="noopener noreferrer">
                        {location.name}
                      </a>
                    </Button>
                  ))}
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-sm font-semibold text-muted-foreground">Get in Line</p>
                  {locations.map((location, index) => (
                    location.waitlistUrl && (
                      <Button 
                        key={index}
                        size="sm" 
                        className="w-full justify-start bg-accent hover:bg-accent/90 text-accent-foreground"
                        asChild
                      >
                        <a href={location.waitlistUrl} target="_blank" rel="noopener noreferrer">
                          {location.name}
                        </a>
                      </Button>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
