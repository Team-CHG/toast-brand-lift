import { useState } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              Toast All Day
            </a>
            
            {/* Location Selector - Desktop */}
            <button className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <MapPin className="h-4 w-4" />
              <span>Find Location</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors font-medium">
              Menu
            </a>
            <a href="#locations" className="text-foreground hover:text-primary transition-colors font-medium">
              Locations
            </a>
            <a href="#catering" className="text-foreground hover:text-primary transition-colors font-medium">
              Catering
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="lg">
              Order Online
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get in Line
            </Button>
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
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#menu" className="text-lg font-medium hover:text-primary transition-colors">
                Menu
              </a>
              <a href="#locations" className="text-lg font-medium hover:text-primary transition-colors">
                Locations
              </a>
              <a href="#catering" className="text-lg font-medium hover:text-primary transition-colors">
                Catering
              </a>
              <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">
                About
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" size="lg" className="w-full">
                  Order Online
                </Button>
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get in Line
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
