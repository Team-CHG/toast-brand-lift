import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { ArrowLeft, PartyPopper, Gift, Calendar, MapPin } from "lucide-react";

const Anniversary = () => {
  const events = [
    {
      location: "Mount Pleasant Celebration",
      address: "835 Coleman Blvd",
      date: "February 8th 2025",
      time: "7AM – 3PM",
      link: "https://www.facebook.com/share/1BTgaxKMCd/"
    },
    {
      location: "West Ashley Celebration",
      address: "2026 Savannah Hwy",
      date: "February 15th 2025",
      time: "7AM – 3PM",
      link: "https://www.facebook.com/share/1BTgaxKMCd/"
    },
    {
      location: "Summerville Celebration",
      address: "717 Old Trolley Road",
      date: "February 22nd 2025",
      time: "7AM – 3PM",
      link: "https://www.facebook.com/share/15dwskFnLU/"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SideDrawer />
      
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <Link to="/news-events" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4 mx-auto justify-center">
            <ArrowLeft className="w-4 h-4" />
            Back to News & Events
          </Link>
          <span className="block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full w-fit mx-auto mb-4">Celebration</span>
          <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Toast's Two Decades of Delight
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join Our 20th Anniversary Celebration!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Celebrating 20 Years of Toast</h2>
            <p className="text-lg text-muted-foreground">
              Toast is turning 20 and we want you to celebrate with us! We are having a party at our locations, and you're invited!
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 text-center border border-border/50">
                <Gift className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Complimentary Bubbles</h4>
                <p className="text-muted-foreground text-sm">Every meal comes with a glass of complimentary bubbles!</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center border border-border/50">
                <PartyPopper className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Win Brunch for a Year!</h4>
                <p className="text-muted-foreground text-sm">First 100 guests get entered to win BRUNCH for a YEAR!</p>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-muted-foreground mb-12">
            Come join us for brunch and see what has made Toast so special for all of these years! We're celebrating and you're invited!
          </p>

          {/* Events */}
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Toast's 20th Anniversary Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                <h4 className="font-bold text-foreground mb-4">{event.location}</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{event.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <p className="text-sm text-primary font-semibold">{event.time}</p>
                </div>
                <a 
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Anniversary;
