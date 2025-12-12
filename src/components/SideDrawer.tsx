import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sideMenuItems = [
  { name: "About Us", href: "/about" },
  { name: "Menus", href: "/locations" },
  { name: "Rewards", href: "/rewards" },
  { name: "News & Events", href: "/news-events" },
  { name: "Catering", href: "/catering" },
  { name: "Franchise", href: "/franchise" },
  { name: "Careers", href: "https://payroll.toasttab.com/jobs/chgllc", external: true },
  { name: "Locations", href: "/locations" },
  { name: "Contact Us", href: "/contact" },
];

const SideDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground p-3 rounded-r-lg shadow-lg hover:bg-primary/90 transition-all">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 bg-card p-0">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-bold text-primary">Quick Links</h2>
          </div>
          <nav className="flex-1 py-4">
            {sideMenuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => !item.external && setOpen(false)}
                className="block px-6 py-4 text-foreground hover:bg-accent/10 hover:text-primary transition-colors font-medium border-b border-border/50"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideDrawer;
