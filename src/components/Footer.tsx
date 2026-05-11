import { useEffect } from "react";
import { Facebook, Instagram, Gift } from "lucide-react";
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
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-background to-accent/5 text-primary py-16 border-t border-accent/10" role="contentinfo">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-highlight to-accent" />
      
      <div className="container mx-auto px-4">
        {/* Sister Brands */}
        <div className="mb-12 pb-12 border-b border-accent/10">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">Part of the Family</p>
            <h3 className="text-2xl md:text-3xl font-bold text-primary">Our Sister Brands</h3>
            <p className="text-sm opacity-80 mt-2">Proud member of <a href="https://charlestonhospitalitygroup.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">Charleston Hospitality Group</a></p>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { name: "Eli's Table", tag: "Fine Dining", img: "/sister-brands/elis.jpg", url: "https://elistable.com/", rewardsUrl: null as string | null, instagram: "https://www.instagram.com/elistablechs/" },
              { name: "Toasted Crust", tag: "Pizza", img: "/sister-brands/toastedcrust.jpg", url: "https://toastedcrust.com/", rewardsUrl: "https://toastedcrust.com/rewards", instagram: "https://www.instagram.com/toastedcrustcharleston/" },
              { name: "HonkyTonk Saloon", tag: "Nightlife", img: "/sister-brands/honkytonk.jpg", url: "https://honkytonksaloon.com/", rewardsUrl: "https://www.toasttab.com/honky-tonk-saloon-192-college-park-road/rewardsSignup", instagram: "https://www.instagram.com/honkytonksaloonsc/" },
              { name: "John King Grill", tag: "Entertainment", img: "/sister-brands/johnking.jpg", url: "https://johnkinggrill.com/", rewardsUrl: "https://www.toasttab.com/john-king-grill-bar-428-king-street/rewardsSignup", instagram: "https://www.instagram.com/johnkinggrill_pianobar/" },
              { name: "Cachita's Kitchen", tag: "Latin Kitchen", img: "/sister-brands/cachitas.jpg", url: "https://cachitaskitchenchs.com/", rewardsUrl: null as string | null, instagram: "https://www.instagram.com/cachitaskitchenchs/" },
            ].map((brand) => (
              <li key={brand.name}>
                <div className="relative group">
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[4/5] overflow-hidden rounded-xl shadow-md hover:shadow-2xl ring-1 ring-accent/10 hover:ring-accent/40 group-hover:-translate-y-1 transition-all duration-300"
                  aria-label={`${brand.name} — ${brand.tag} by Charleston Hospitality Group`}
                >
                  <img
                    src={brand.img}
                    alt={`${brand.name} — ${brand.tag} restaurant by Charleston Hospitality Group`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-highlight font-semibold mb-1">{brand.tag}</p>
                    <p className="font-bold text-white text-base md:text-lg leading-tight">{brand.name}</p>
                    <p className="mt-2 text-xs text-white/90 font-semibold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore →</p>
                  </div>
                </a>
                {brand.rewardsUrl && (
                  <a
                    href={brand.rewardsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-highlight text-highlight-foreground text-[11px] font-bold uppercase tracking-wider shadow-lg hover:scale-105 hover:bg-highlight/90 transition-transform"
                    aria-label={`Get $5 rewards at ${brand.name}`}
                  >
                    Get $5
                  </a>
                )}
                </div>
              </li>
            ))}
          </ul>

          {/* CHG Gift Card CTA */}
          <div className="mt-8 max-w-3xl mx-auto">
            <a
              href="https://charlestonhospitalitygroup.com/#gift-cards"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-highlight/10 to-accent/10 ring-1 ring-accent/20 hover:ring-accent/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
              aria-label="Shop Charleston Hospitality Group gift cards"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-highlight/20 flex items-center justify-center ring-1 ring-highlight/30">
                  <Gift className="h-6 w-6 text-highlight" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">The Gift of Getting Is Giving</p>
                  <p className="font-bold text-primary text-lg md:text-xl">CHG Gift Cards — One Card, Every Venue</p>
                  <p className="text-xs opacity-80 mt-0.5">Delivered in minutes. Redeemable across the Charleston Hospitality Group family.</p>
                </div>
              </div>
              <span className="relative flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-highlight text-highlight-foreground text-sm font-bold uppercase tracking-wider shadow-lg group-hover:scale-105 transition-transform">
                Buy Now →
              </span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" aria-label="Toast All Day Home">
              <img src={toastLogo} alt="Toast All Day - Award-winning breakfast and brunch restaurant" className="h-24 w-auto mb-4" loading="lazy" />
            </Link>
            <p className="opacity-90 leading-relaxed text-center md:text-left">
              Serving exceptional breakfast, brunch, and lunch since 2005. TripAdvisor Top 25 Best Brunches.
            </p>
          </div>
          <nav aria-label="Quick Links">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/locations" className="opacity-90 hover:text-accent transition-colors">Order Online from Toast All Day</Link></li>
              <li><Link to="/locations" className="opacity-90 hover:text-accent transition-colors">Join Our Waitlist</Link></li>
              <li><Link to="/catering" className="opacity-90 hover:text-accent transition-colors">Catering for Events & Parties</Link></li>
              <li><Link to="/rewards" className="opacity-90 hover:text-accent transition-colors">Toast Rewards Program</Link></li>
              <li><Link to="/news-events" className="opacity-90 hover:text-accent transition-colors">News & Special Events</Link></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="opacity-90 hover:text-accent transition-colors">About Toast All Day</Link></li>
              <li><Link to="/locations" className="opacity-90 hover:text-accent transition-colors">Restaurant Locations</Link></li>
              <li><Link to="/franchise" className="opacity-90 hover:text-accent transition-colors">Franchise Opportunities</Link></li>
              <li><Link to="/contact" className="opacity-90 hover:text-accent transition-colors">Contact Us</Link></li>
              <li><a href="https://payroll.toasttab.com/jobs/chgllc" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-accent transition-colors">Careers at Toast</a></li>
            </ul>
          </nav>
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.facebook.com/ToastofCharleston/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-accent transition-colors" aria-label="Follow Toast All Day on Facebook">
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/toastofcharleston/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-accent transition-colors" aria-label="Follow Toast All Day on Instagram">
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="https://www.tiktok.com/@toast.all.day" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-accent transition-colors" aria-label="Follow Toast All Day on TikTok">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm opacity-80">Tag us in your photos: #ToastAllDay</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Follow the CHG Family</h4>
            <ul className="space-y-2">
              {[
                { handle: "@toastallday", url: "https://www.instagram.com/toastofcharleston/" },
                { handle: "@elistable", url: "https://www.instagram.com/elistablechs/" },
                { handle: "@johnkingchs", url: "https://www.instagram.com/johnkinggrill_pianobar/" },
                { handle: "@honkytonkchs", url: "https://www.instagram.com/honkytonksaloonsc/" },
                { handle: "@toastedcrustchs", url: "https://www.instagram.com/toastedcrustcharleston/" },
                { handle: "@cachitaskitchen", url: "https://www.instagram.com/cachitaskitchenchs/" },
                { handle: "@charlestongroup", url: "https://www.instagram.com/charlestonhospitalitygroup/" },
              ].map((item) => (
                <li key={item.handle}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 opacity-90 hover:text-accent transition-colors"
                    aria-label={`Follow ${item.handle} on Instagram`}
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                    <span className="text-sm">{item.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-accent/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-90 text-sm">© 2025 Toast All Day. All rights reserved. A Charleston Hospitality Group restaurant.</p>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm" aria-label="Legal">
              <Link to="/privacy-policy" className="opacity-90 hover:text-accent transition-colors whitespace-nowrap">Privacy Policy</Link>
              <Link to="/terms-of-service" className="opacity-90 hover:text-accent transition-colors whitespace-nowrap">Terms of Service</Link>
              <Link to="/contact" className="opacity-90 hover:text-accent transition-colors whitespace-nowrap">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
