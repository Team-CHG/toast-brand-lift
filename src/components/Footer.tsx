import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Toast All Day</h3>
            <p className="opacity-90 leading-relaxed">
              Serving exceptional breakfast, brunch, and lunch since day one.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Breakfast</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Brunch</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Lunch</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Beverages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Locations</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Catering</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm opacity-90">
              Hours: 7am - 2:30pm daily
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-90 text-sm">
              © 2025 Toast All Day. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
