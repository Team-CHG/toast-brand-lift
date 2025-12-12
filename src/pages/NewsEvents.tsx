import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";

const newsItems = [
  {
    title: "Celebrate Mother's Day with Us",
    description: "Treat Mom to a special brunch! Free Mimosa and Beignets for all moms on Mother's Day.",
    image: "https://toastallday.com/wp-content/uploads/2025/05/Toast-Mothers-Day-Horizontal-Header-Post-1920-x-1080-px-1-1-1080x675.jpg",
    category: "Events",
    link: "https://toastallday.com/celebrate-mothers-day-with-us-with-a-free-mimosa-and-beignets/"
  },
  {
    title: "Download Our App and Earn $5",
    description: "Get rewarded just for downloading! Sign up through our app and receive $5 towards your next meal.",
    image: "https://toastallday.com/wp-content/uploads/2025/04/Toast-APP-Loyalty-Sign-Up-1920-x-1080-px-1080x675.jpg",
    category: "Promotions",
    link: "https://toastallday.com/download-our-app-and-earn-5/"
  },
  {
    title: "Unlimited Drink Pass",
    description: "Enjoy unlimited coffee, tea, and soft drinks with our new drink pass subscription.",
    image: "https://toastallday.com/wp-content/uploads/2025/03/Toast-Bridge-Run-Mimosa-Festival-1920-x-1080-px-web.jpg",
    category: "Promotions",
    link: "https://toastallday.com/get-the-unlimited-drink-pass-at-toast-all-day-eat-drink-and-celebrate-at-toast-all-day/"
  },
  {
    title: "10% Military Discount",
    description: "We proudly offer 10% off to all active duty military and veterans. Thank you for your service!",
    image: "https://toastallday.com/wp-content/uploads/2025/05/Toast-Military-10-Discount-1920-x-1080-px-1080x675.jpg",
    category: "Offers",
    link: "https://toastallday.com/serving-those-who-serve-enjoy-10-military-discount/"
  },
  {
    title: "Toast 20th Anniversary Celebration",
    description: "Join us in celebrating 20 years of serving delicious breakfast and brunch to our community!",
    image: "https://toastallday.com/wp-content/uploads/2025/02/Toast-20th-Anniversary-Event-Post-web.jpg",
    category: "Celebration",
    link: "https://toastallday.com/toast-20th-anniversary-celebration/"
  },
  {
    title: "New Soup, Salad or Sandwich Combo",
    description: "Try our new lunch combo featuring fresh soup, crisp salads, and handcrafted sandwiches.",
    image: "https://toastallday.com/wp-content/uploads/2025/01/toast-soup-salad-sandwich-combo.jpg",
    category: "Menu",
    link: "https://toastallday.com/new-soup-salad-or-sandwich-combo/"
  },
  {
    title: "Black Friday $20 Bonus Gift Card",
    description: "Purchase $100 in gift cards and receive a $20 bonus card. Perfect for the holiday season!",
    image: "https://toastallday.com/wp-content/uploads/2024/12/Toast_Giving_is_the_Greatest_Gift_web-1.jpg",
    category: "Promotions",
    link: "https://toastallday.com/a-free-20-gift-card-our-black-friday-toast-to-you/"
  },
  {
    title: "Veterans Eat FREE This Veterans Day",
    description: "We honor our veterans with a free meal on Veterans Day. Thank you for your service!",
    image: "https://toastallday.com/wp-content/uploads/2024/11/unnamed-22-1080x675.png",
    category: "Events",
    link: "https://toastallday.com/veterans-eat-free-this-veterans-day/"
  },
  {
    title: "Best Brunch in Charleston, SC",
    description: "Discover why Toast! All Day is voted the best brunch spot in Charleston.",
    image: "https://toastallday.com/wp-content/uploads/2022/02/Toast-All-Day-syrup-pour-chicken-800x675.jpg",
    category: "News",
    link: "https://toastallday.com/the-best-brunch-in-charleston-sc/"
  },
  {
    title: "Love Is In The Air At Toast!",
    description: "Celebrate love with our special Valentine's Day menu and romantic brunch experience.",
    image: "https://toastallday.com/wp-content/uploads/2022/02/49a9faa3-d3c4-4d48-82a7-ea3a05d30e61-copy-1-496x620-1.jpeg",
    category: "Events",
    link: "https://toastallday.com/love-is-in-the-air-at-toast/"
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
            {newsItems.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 block"
              >
                {/* Card Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
              </a>
            ))}
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
