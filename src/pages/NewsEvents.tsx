import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { Calendar, Gift, Utensils, Users, Percent, MapPin } from "lucide-react";

const newsItems = [
  {
    title: "Celebrate Mother's Day with Us",
    description: "Treat Mom to a special brunch! Free Mimosa and Beignets for all moms on Mother's Day.",
    icon: Gift,
    category: "Events",
    link: "#"
  },
  {
    title: "Toast 20th Anniversary Celebration",
    description: "Join us in celebrating 20 years of serving delicious breakfast and brunch to our community!",
    icon: Calendar,
    category: "Celebration",
    link: "#"
  },
  {
    title: "Veterans Eat FREE This Veterans Day",
    description: "We honor our veterans with a free meal on Veterans Day. Thank you for your service!",
    icon: Users,
    category: "Events",
    link: "#"
  },
  {
    title: "Download Our App and Earn $5",
    description: "Get rewarded just for downloading! Sign up through our app and receive $5 towards your next meal.",
    icon: Gift,
    category: "Promotions",
    link: "#"
  },
  {
    title: "Unlimited Drink Pass",
    description: "Enjoy unlimited coffee, tea, and soft drinks with our new drink pass subscription.",
    icon: Utensils,
    category: "Promotions",
    link: "#"
  },
  {
    title: "10% Military Discount",
    description: "We proudly offer 10% off to all active duty military and veterans. Thank you for your service!",
    icon: Percent,
    category: "Offers",
    link: "#"
  },
  {
    title: "Black Friday $20 Bonus Gift Card",
    description: "Purchase $100 in gift cards and receive a $20 bonus card. Perfect for the holiday season!",
    icon: Gift,
    category: "Promotions",
    link: "#"
  },
  {
    title: "New Soup, Salad or Sandwich Combo",
    description: "Try our new lunch combo featuring fresh soup, crisp salads, and handcrafted sandwiches.",
    icon: Utensils,
    category: "Menu",
    link: "#"
  },
  {
    title: "New Toast Location on Upper King",
    description: "We're excited to announce our newest location on Upper King Street. Come visit us!",
    icon: MapPin,
    category: "News",
    link: "#"
  }
];

const NewsEvents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SideDrawer />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            News & Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest happenings, promotions, and special events at Toast! All Day.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <article 
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30"
                >
                  {/* Card Header with Icon */}
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Don't Miss Out!
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Sign up for our newsletter to get the latest news, events, and exclusive offers delivered to your inbox.
          </p>
          <a 
            href="https://www.toasttab.com/toast-charleston-155-meeting-st/marketing-signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsEvents;
