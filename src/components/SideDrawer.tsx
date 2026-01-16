import { useState } from "react";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const locationSubItems = [
  { name: "All Locations", href: "/locations" },
  { name: "Toast! on Meeting", href: "/locations/toast-meeting" },
  { name: "Toast! on King", href: "/locations/toast-king" },
  { name: "Toast! on Coleman", href: "/locations/toast-coleman" },
  { name: "Toast! Mt. Pleasant", href: "/locations/toast-mt-pleasant" },
  { name: "Toast! West Ashley", href: "/locations/toast-west-ashley" },
  { name: "Toast! Summerville", href: "/locations/toast-summerville" },
  { name: "Toast! Savannah", href: "/locations/toast-savannah" },
];

const sideMenuItems = [
  { name: "About Us", href: "/about" },
  { name: "Menus", href: "/locations" },
  { name: "Rewards", href: "/rewards" },
  { name: "News & Events", href: "/news-events" },
  { name: "Catering", href: "/catering" },
  { name: "Franchise", href: "/franchise" },
  { name: "Careers", href: "https://payroll.toasttab.com/jobs/chgllc", external: true },
  { name: "Locations", href: "/locations", hasSubmenu: true },
  { name: "Contact Us", href: "/contact" },
];

const SideDrawer = () => {
  const [open, setOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="fixed left-0 top-1/2 -translate-y-1/2 z-40 p-2 transition-all hover:translate-x-1">
          <ChevronRight className="h-8 w-8 text-primary" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 bg-card p-0 overflow-y-auto">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-bold text-primary">Quick Links</h2>
          </div>
          <nav className="flex-1 py-4">
            {sideMenuItems.map((item, index) => (
              item.hasSubmenu ? (
                <Collapsible key={index} open={locationsOpen} onOpenChange={setLocationsOpen}>
                  <CollapsibleTrigger className="w-full flex items-center justify-between px-6 py-4 text-foreground hover:bg-accent/10 hover:text-primary transition-colors font-medium border-b border-border/50">
                    <span>{item.name}</span>
                    {locationsOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="bg-secondary/30">
                      {locationSubItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          onClick={() => setOpen(false)}
                          className="block px-8 py-3 text-sm text-foreground hover:bg-accent/10 hover:text-primary transition-colors border-b border-border/30"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
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
              )
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideDrawer;
