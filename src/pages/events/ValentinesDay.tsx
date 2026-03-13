import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Heart, Wine, Coffee, Cake } from "lucide-react";

const ValentinesDay = () => {
  const specials = [
    {
      category: "Cocktails",
      icon: Wine,
      items: [
        { name: "Be Mine Mimosa", description: "Our signature mimosa with a romantic twist" },
        { name: "Sweetheart Spiked Lemonade", description: "Sweet and refreshing with a kick" },
      ],
    },
    {
      category: "Specialty Lattes",
      icon: Coffee,
      items: [{ name: "Mocha-berry Bliss", description: "Rich mocha with berry undertones" }],
    },
    {
      category: "Sweet Treats",
      icon: Cake,
      items: [{ name: "Red Velvet Waffles", description: "Served with your choice of breakfast meats" }],
    },
  ];

  return (
    <BlogArticleLayout
      seoTitle="Valentine's Day Specials - Toast All Day | Romantic Brunch"
      seoDescription="Celebrate Valentine's Day at Toast All Day! Be Mine Mimosa, Red Velvet Waffles, Mocha-berry Bliss latte & more. Make it a romantic brunch date."
      seoKeywords="Valentine's Day brunch, romantic brunch Charleston, Valentine's restaurant, red velvet waffles"
      heroImage="https://toastallday.com/wp-content/uploads/2022/02/49a9faa3-d3c4-4d48-82a7-ea3a05d30e61-copy-1-496x620-1.jpeg"
      heroImageAlt="Valentine's Day at Toast"
      category="Events"
      title="Love Is In The Air At Toast!"
      date="February 2022"
      currentSlug="valentines-day"
    >
      <div className="text-center">
        <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
        <p className="text-xl text-muted-foreground">
          Celebrate love with our special Valentine's Day menu and romantic brunch experience.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-foreground text-center">Valentine's Day Specials</h2>
      <div className="space-y-8">
        {specials.map((cat, index) => {
          const IconComponent = cat.icon;
          return (
            <div key={index} className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{cat.category}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {cat.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-background rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">Make It a Date!</h3>
        <p className="text-muted-foreground mb-6">
          Treat your special someone to a romantic brunch at Toast All Day this Valentine's Day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/locations" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
            Find a Location
          </Link>
          <a href="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors">
            <Heart className="w-5 h-5" />
            Gift a Card
          </a>
        </div>
      </div>
    </BlogArticleLayout>
  );
};

export default ValentinesDay;
