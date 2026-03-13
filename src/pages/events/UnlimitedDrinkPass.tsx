import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Calendar, MapPin, Wine } from "lucide-react";

const UnlimitedDrinkPass = () => {
  return (
    <BlogArticleLayout
      seoTitle="Unlimited Mimosa Wristband - Toast All Day 20th Anniversary"
      seoDescription="Celebrate Toast All Day's 20th anniversary at the Bridge Run! Get unlimited mimosas with our special wristband offer."
      seoKeywords="unlimited mimosas, Bridge Run Charleston, 20th anniversary, mimosa festival, brunch event"
      heroImage="https://toastallday.com/wp-content/uploads/2025/03/Toast-Bridge-Run-Mimosa-Festival-1920-x-1080-px-web.jpg"
      heroImageAlt="Toast Bridge Run Mimosa Festival"
      category="Promotions"
      title="Celebrate the 20th Anniversary with Unlimited Fun!"
      date="March 2025"
      currentSlug="unlimited-drink-pass"
    >
      <p className="text-xl text-muted-foreground">
        Join us for a day of endless enjoyment at Toast in Mount Pleasant at the starting line, and our Toast on King at the finish! Get your exclusive wristband offer, featuring unlimited mimosas. A perfect way to toast your achievements at the Bridge Run!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="https://www.toasttab.com/toast-king-st-451-king-st/rewardsSignup" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
          Sign Up Here!
        </a>
        <a href="https://www.eventbrite.com/e/toast-bridge-run-mimosa-festival-tickets-1304651721419?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">
          Get Your Wristband
        </a>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Toast's 20th Anniversary Event</h2>
        <div className="flex items-center justify-center">
          <Wine className="w-16 h-16 text-primary mb-4" />
        </div>
        <p className="text-center text-lg text-muted-foreground mb-8">
          Join us on April 5th for a day filled with celebration and indulgence. Enjoy unlimited mimosas with our special wristband offer. Perfect for celebrating your Bridge Run success!
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 text-center border border-border/50">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-1">Date</h4>
            <p className="text-muted-foreground">April 5, 2024</p>
          </div>
          <div className="bg-card rounded-xl p-6 text-center border border-border/50">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-1">Location</h4>
            <p className="text-muted-foreground">Check-in at Toast Mt Pleasant or Toast King St, Charleston, SC</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">20th Anniversary Extravaganza</h3>
        <p className="text-xl text-primary font-semibold">Unlimited Mimosas Await!</p>
      </div>
    </BlogArticleLayout>
  );
};

export default UnlimitedDrinkPass;
