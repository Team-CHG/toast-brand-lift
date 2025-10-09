import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const locations = [
    {
      name: "Toast! All Day - Concord",
      address: "8621 Concord Mills Blvd, Concord, NC 28027",
      phone: "(980) 258-8278",
      hours: "Mon-Sun: 8:00 AM - 3:00 PM"
    },
    {
      name: "Toast! All Day - South Park",
      address: "6401 Morrison Blvd, Charlotte, NC 28211",
      phone: "(704) 369-1811",
      hours: "Mon-Sun: 8:00 AM - 3:00 PM"
    },
    {
      name: "Toast! All Day - Park Road Shopping Center",
      address: "4321 Park Rd, Charlotte, NC 28209",
      phone: "(704) 295-8278",
      hours: "Mon-Sun: 8:00 AM - 3:00 PM"
    },
    {
      name: "Toast! All Day - Birkdale Village",
      address: "8708 Lindholm Dr Suite 110, Huntersville, NC 28078",
      phone: "(704) 895-8278",
      hours: "Mon-Sun: 8:00 AM - 3:00 PM"
    },
    {
      name: "Toast! All Day - Mint Hill",
      address: "7044 Lawyers Rd, Mint Hill, NC 28227",
      phone: "(980) 585-8278",
      hours: "Mon-Sun: 8:00 AM - 3:00 PM"
    },
    {
      name: "Toast! All Day - Ballantyne",
      address: "14815 John J Delaney Dr, Charlotte, NC 28277",
      phone: "(704) 369-2345",
      hours: "Mon-Sun: 8:00 AM - 3:00 PM"
    },
    {
      name: "Toast! All Day - Fort Mill",
      address: "705 Stockbridge Dr Suite B, Fort Mill, SC 29708",
      phone: "(803) 684-8278",
      hours: "Mon-Sun: 8:00 AM - 3:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Visit us at any of our locations or reach out to us
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{location.name}</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{location.address}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <a 
                          href={`tel:${location.phone}`}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{location.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* General Contact */}
            <div className="mt-16 p-8 bg-secondary rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We'd love to hear from you! Reach out to us for general inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href="mailto:info@toastallday.com" 
                    className="text-primary hover:underline"
                  >
                    info@toastallday.com
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg">
                  <a href="/catering">Catering Inquiries</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
