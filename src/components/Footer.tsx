import { useEffect } from "react";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import toastLogo from "@/assets/toast-logo.png";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", "687adeb581758b005d3c04cf");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground py-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" aria-label="Toast All Day Home">
              <img 
                src={toastLogo} 
                alt="Toast All Day - Award-winning breakfast and brunch restaurant" 
                className="h-24 w-auto mb-4" 
                loading="lazy"
              />
            </Link>
            <p className="opacity-90 leading-relaxed text-center md:text-left">
              Serving exceptional breakfast, brunch, and lunch since 2005. TripAdvisor Top 25 Best Brunches.
            </p>
          </div>
          <nav aria-label="Quick Links">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/locations" className="opacity-90 hover:opacity-100 transition-opacity">
                  Order Online from Toast All Day
                </Link>
              </li>
              <li>
                <Link to="/locations" className="opacity-90 hover:opacity-100 transition-opacity">
                  Join Our Waitlist
                </Link>
              </li>
              <li>
                <Link to="/catering" className="opacity-90 hover:opacity-100 transition-opacity">
                  Catering for Events & Parties
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="opacity-90 hover:opacity-100 transition-opacity">
                  Toast Rewards Program
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="opacity-90 hover:opacity-100 transition-opacity">
                  News & Special Events
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Toast All Day
                </Link>
              </li>
              <li>
                <Link to="/locations" className="opacity-90 hover:opacity-100 transition-opacity">
                  Restaurant Locations
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="opacity-90 hover:opacity-100 transition-opacity">
                  Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://payroll.toasttab.com/jobs/chgllc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Careers at Toast
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.facebook.com/ToastofCharleston/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Follow Toast All Day on Facebook"
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a 
                href="https://www.instagram.com/toastofcharleston/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Follow Toast All Day on Instagram"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a 
                href="https://www.tiktok.com/@toast.all.day" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Follow Toast All Day on TikTok"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm opacity-80">
              Tag us in your photos: #ToastAllDay
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-90 text-sm">
              © 2025 Toast All Day. All rights reserved. A Charleston Hospitality Group restaurant.
            </p>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm" aria-label="Legal">
              <Link to="/privacy-policy" className="opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap">Privacy Policy</Link>
              <Link to="/terms-of-service" className="opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap">Terms of Service</Link>
              <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
