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
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/locations" className="opacity-90 hover:opacity-100 transition-opacity">Order Online</a></li>
              <li><a href="/locations" className="opacity-90 hover:opacity-100 transition-opacity">Join Waitlist</a></li>
              <li><a href="/catering" className="opacity-90 hover:opacity-100 transition-opacity">Catering</a></li>
              <li><a href="https://toastallday.com/rewards/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">Rewards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="opacity-90 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="/locations" className="opacity-90 hover:opacity-100 transition-opacity">Locations</a></li>
              <li><a href="https://toastallday.com/contact-us/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="/catering" className="opacity-90 hover:opacity-100 transition-opacity">Catering</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/ToastofCharleston/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/toastofcharleston/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@toast.all.day" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
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
