import { useState } from "react";
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import TurnstileWidget from "@/components/TurnstileWidget";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle2, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import pageBackgroundTexture from "@/assets/page-background-texture.png";
import { motion } from "framer-motion";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const form = useForm<FranchiseFormData>({
    resolver: zodResolver(franchiseSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", city: "", state: "", investmentCapital: "", experience: "", message: "" },
  });

  const onSubmit = async (data: FranchiseFormData) => {
    if (!turnstileToken) {
      toast({ title: "Verification Required", description: "Please complete the spam verification.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data: response, error } = await supabase.functions.invoke("send-form-email", {
        body: { formType: "franchise", turnstileToken, data: { ...data, experience: data.experience || "" } },
      });
      if (error) throw new Error(error.message);
      if (response?.error) throw new Error(response.error);
      setIsSubmitted(true);
      toast({ title: "Inquiry Submitted!", description: "Thank you for your interest in franchising with Toast All Day." });
      form.reset();
      setTurnstileToken(null);
    } catch (error) {
      console.error("Error submitting franchise inquiry:", error);
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to submit inquiry.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <FestiveBackdrop />
      <SEO 
        title="Franchise Opportunities - Toast All Day | Own a Breakfast Restaurant"
        description="Own a Toast All Day franchise. Award-winning breakfast & brunch concept with proven business model."
        keywords="franchise opportunity, breakfast franchise, brunch restaurant franchise"
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-highlight/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-highlight/10 rounded-full blur-[120px]" />
        <FloatingElement className="absolute top-1/4 right-10 opacity-15 hidden lg:block" delay={1} distance={15}>
          <Sparkles className="w-20 h-20 text-accent" />
        </FloatingElement>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">Join Our Family</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-primary">
              Franchise <span className="text-complementary italic">Opportunities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the Toast All Day family and bring award-winning breakfast to your community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats overlay */}
      <section className="relative z-20 -mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 py-6 px-6 md:px-12 ring-1 ring-accent/10">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
              <div><span className="text-3xl font-bold text-highlight">7</span><p className="text-sm text-muted-foreground">Locations</p></div>
              <div className="h-8 w-px bg-accent/20 hidden md:block" />
              <div><span className="text-3xl font-bold text-accent">20+</span><p className="text-sm text-muted-foreground">Years</p></div>
              <div className="h-8 w-px bg-accent/20 hidden md:block" />
              <div><span className="text-3xl font-bold text-highlight">Top 1%</span><p className="text-sm text-muted-foreground">TripAdvisor</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Info */}
      <section className="py-20 relative"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 mb-16 bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl ring-1 ring-accent/10">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Why Toast All Day?</h2>
                  <ul className="space-y-4 text-muted-foreground">
                    {[
                      "Award-winning brand with TripAdvisor Top 25 recognition",
                      "Proven business model with multiple successful locations",
                      "Comprehensive training and ongoing support",
                      "Strong brand identity and marketing resources",
                      "Growing breakfast and brunch market",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-highlight font-bold">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Investment Details</h2>
                  <div className="bg-gradient-to-br from-accent/10 to-highlight/5 rounded-2xl p-6 space-y-4">
                    <div><p className="text-muted-foreground">Initial Franchise Fee</p><p className="text-2xl font-bold text-primary">Contact for Details</p></div>
                    <div><p className="text-muted-foreground">Total Investment Range</p><p className="text-2xl font-bold text-primary">Varies by Location</p></div>
                    <div><p className="text-muted-foreground">Net Worth Requirement</p><p className="text-2xl font-bold text-primary">Inquire Below</p></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl ring-1 ring-accent/10 p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">Start Your Franchise Journey</h2>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <div className="rounded-full bg-accent/10 p-4"><CheckCircle2 className="h-12 w-12 text-accent" /></div>
                    <h3 className="text-2xl font-bold text-primary">Inquiry Submitted!</h3>
                    <p className="text-muted-foreground max-w-sm">Our team will review your inquiry and be in touch soon.</p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4 rounded-full">Submit Another Inquiry</Button>
                  </div>
                ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="firstName" render={({ field }) => (<FormItem><FormLabel>First Name *</FormLabel><FormControl><Input placeholder="John" {...field} /></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name="lastName" render={({ field }) => (<FormItem><FormLabel>Last Name *</FormLabel><FormControl><Input placeholder="Doe" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email *</FormLabel><FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Phone *</FormLabel><FormControl><Input type="tel" placeholder="(555) 123-4567" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="city" render={({ field }) => (<FormItem><FormLabel>City *</FormLabel><FormControl><Input placeholder="Charleston" {...field} /></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name="state" render={({ field }) => (<FormItem><FormLabel>State *</FormLabel><FormControl><Input placeholder="South Carolina" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                    <FormField control={form.control} name="investmentCapital" render={({ field }) => (<FormItem><FormLabel>Available Investment Capital *</FormLabel><FormControl><Input placeholder="e.g., $250,000 - $500,000" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="experience" render={({ field }) => (<FormItem><FormLabel>Restaurant/Business Experience</FormLabel><FormControl><Input placeholder="Brief description of your experience" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="message" render={({ field }) => (<FormItem><FormLabel>Tell Us About Yourself *</FormLabel><FormControl><Textarea placeholder="Why are you interested in a Toast All Day franchise?" className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <div className="flex justify-center">
                      <TurnstileWidget onVerify={setTurnstileToken} onError={() => setTurnstileToken(null)} onExpire={() => setTurnstileToken(null)} />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-highlight hover:bg-highlight/90 text-highlight-foreground text-lg rounded-full" disabled={isSubmitting || !turnstileToken}>
                      {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</>) : "Submit Franchise Inquiry"}
                    </Button>
                  </form>
                </Form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;
