import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Star, MapPin } from "lucide-react";

const BestBrunch = () => {
  const menuHighlights = [
    { name: "Eggs Meeting Street", description: "Crab cakes, fried green tomatoes, and perfectly poached eggs with hollandaise sauce." },
    { name: "Lowcountry Shrimp & Grits", description: "Creamy stone-ground grits topped with sautéed shrimp in our signature lobster cream sauce." },
    { name: "Chicken & Waffles", description: "Crispy fried chicken served atop a fluffy Belgian waffle with maple syrup." },
    { name: "Avocado Toast", description: "Fresh avocado on artisan bread with poached eggs and everything seasoning." },
  ];

  return (
    <BlogArticleLayout
      seoTitle="Best Brunch in Charleston SC - Toast All Day | TripAdvisor Top 25"
      seoDescription="Discover why Toast All Day is voted best brunch in Charleston! Try Eggs Meeting Street, Lowcountry Shrimp & Grits, Chicken & Waffles. 20+ years of excellence."
      seoKeywords="best brunch Charleston, top brunch SC, shrimp and grits, eggs benedict Charleston, chicken waffles"
      heroImage="https://toastallday.com/wp-content/uploads/2022/02/Toast-All-Day-syrup-pour-chicken-800x675.jpg"
      heroImageAlt="Best Brunch in Charleston"
      category="News"
      title="The Best Brunch in Charleston, SC"
      date="February 2022"
      currentSlug="best-brunch"
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-primary fill-primary" />
          ))}
        </div>
        <p className="text-xl text-muted-foreground">
          Discover why Toast! All Day has been voted the best brunch spot in Charleston for nearly two decades.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-foreground text-center">Must-Try Menu Items</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {menuHighlights.map((item, index) => (
          <div key={index} className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Toast All Day?</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <p className="text-muted-foreground">Years of Excellence</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">6</div>
            <p className="text-muted-foreground">Charleston Locations</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1000s</div>
            <p className="text-muted-foreground">Happy Guests Daily</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-muted-foreground mb-6">Experience the best brunch in Charleston for yourself!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/locations" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
            <MapPin className="w-5 h-5" />
            Find a Location
          </Link>
          <a href="https://toastallday.com/order-online/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors">
            Order Online
          </a>
        </div>
      </div>
    </BlogArticleLayout>
  );
};

export default BestBrunch;
