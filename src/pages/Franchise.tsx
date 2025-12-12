import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const franchiseSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number is required").max(20),
  city: z.string().min(1, "City is required").max(100),
  state: z.string().min(1, "State is required").max(100),
  investmentCapital: z.string().min(1, "Please specify your investment capital").max(100),
  experience: z.string().max(1000).optional(),
  message: z.string().min(10, "Please tell us more about yourself").max(2000),
});

type FranchiseFormData = z.infer<typeof franchiseSchema>;

const Franchise = () => {
  const { toast } = useToast();

  const form = useForm<FranchiseFormData>({
    resolver: zodResolver(franchiseSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      investmentCapital: "",
      experience: "",
      message: "",
    },
  });

  const onSubmit = (data: FranchiseFormData) => {
    console.log("Franchise inquiry submitted:", data);
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your interest in franchising with Toast All Day. We'll be in touch soon!",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SideDrawer />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Franchise Opportunities</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join the Toast All Day family and bring award-winning breakfast to your community.
          </p>
        </div>
      </section>

      {/* Franchise Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Why Toast All Day?</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    Award-winning brand with TripAdvisor Top 25 recognition
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    Proven business model with multiple successful locations
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    Comprehensive training and ongoing support
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    Strong brand identity and marketing resources
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    Growing breakfast and brunch market
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Investment Details</h2>
                <div className="bg-secondary rounded-lg p-6 space-y-4">
                  <div>
                    <p className="text-muted-foreground">Initial Franchise Fee</p>
                    <p className="text-2xl font-bold text-primary">Contact for Details</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Investment Range</p>
                    <p className="text-2xl font-bold text-primary">Varies by Location</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Net Worth Requirement</p>
                    <p className="text-2xl font-bold text-primary">Inquire Below</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Franchise Form */}
            <div className="bg-card rounded-2xl shadow-lg p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Start Your Franchise Journey
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input placeholder="Charleston" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State *</FormLabel>
                          <FormControl>
                            <Input placeholder="South Carolina" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="investmentCapital"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Available Investment Capital *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., $250,000 - $500,000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Restaurant/Business Experience</FormLabel>
                        <FormControl>
                          <Input placeholder="Brief description of your experience" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell Us About Yourself *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Why are you interested in a Toast All Day franchise? What makes you a great fit?"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg"
                  >
                    Submit Franchise Inquiry
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;
