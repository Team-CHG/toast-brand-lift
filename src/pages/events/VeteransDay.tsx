import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Shield, MapPin, Utensils } from "lucide-react";

const VeteransDay = () => {
  return (
    <BlogArticleLayout
      seoTitle="Veterans Day Free Meal - Toast All Day | Honor Our Heroes"
      seoDescription="Veterans eat FREE at Toast All Day on Veterans Day! Choose classic breakfast or smash burger. Valid at all locations with military ID."
      seoKeywords="Veterans Day free meal, free food veterans, military free meal, Veterans Day restaurant"
      heroImage="https://toastallday.com/wp-content/uploads/2024/11/unnamed-22-1080x675.png"
      heroImageAlt="Veterans Day Free Meal"
      category="Events"
      title="Veterans Eat FREE This Veterans Day"
      date="November 2024"
      currentSlug="veterans-day"
    >
      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
        <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-foreground mb-4">FREE Meal for All Veterans</h2>
        <p className="text-xl text-muted-foreground">November 11th, 2024</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Choose Your Free Meal</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 text-center border border-border/50">
            <Utensils className="w-10 h-10 text-primary mx-auto mb-3" />
            <h4 className="text-xl font-bold text-foreground mb-2">Classic Breakfast</h4>
            <p className="text-muted-foreground">Our signature breakfast plate with eggs, bacon, and all the fixings.</p>
          </div>
          <div className="bg-card rounded-xl p-6 text-center border border-border/50">
            <Utensils className="w-10 h-10 text-primary mx-auto mb-3" />
            <h4 className="text-xl font-bold text-foreground mb-2">Smash Burger</h4>
            <p className="text-muted-foreground">Our famous smash burger served with your choice of sides.</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-8 border border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">How to Redeem</h3>
        <ul className="space-y-3 max-w-md mx-auto">
          <li className="flex items-center gap-3 text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
            Present valid Military ID or wear uniform
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
            Available at all Charleston locations
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
            Valid on November 11th, 2024 only
          </li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-lg text-muted-foreground mb-6">Thank you for your service. We look forward to serving you!</p>
        <Link to="/locations" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
          <MapPin className="w-5 h-5" />
          Find a Location
        </Link>
      </div>
    </BlogArticleLayout>
  );
};

export default VeteransDay;
