import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import TurnstileWidget from "@/components/TurnstileWidget";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "@/components/animations/ScrollReveal";
import pageBackgroundTexture from "@/assets/page-background-texture.png";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (!turnstileToken) {
      toast({ title: "Verification Required", description: "Please complete the spam verification.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data: response, error } = await supabase.functions.invoke("send-form-email", {
        body: { formType: "contact", turnstileToken, data: { name: data.name, email: data.email, phone: data.phone || "", message: data.message } },
      });
      if (error) throw new Error(error.message);
      if (response?.error) throw new Error(response.error);
      setIsSubmitted(true);
      toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll get back to you soon." });
      form.reset();
      setTurnstileToken(null);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - Toast All Day | Get in Touch"
        description="Contact Toast All Day for reservations, catering inquiries, or feedback."
        keywords="contact Toast All Day, Charleston restaurant contact, catering inquiry"
      />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-highlight/5" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
              Get in <span className="text-highlight italic">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you! Send us a message and we'll respond as soon as possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal direction="left">
                <Card className="bg-white/70 backdrop-blur-xl shadow-xl ring-1 ring-accent/10 rounded-3xl border-0">
                  <CardHeader>
                    <CardTitle className="text-primary">Send us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                        <div className="rounded-full bg-accent/10 p-4">
                          <CheckCircle2 className="h-12 w-12 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Message Sent!</h3>
                        <p className="text-muted-foreground max-w-sm">Thank you for contacting us.</p>
                        <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4 rounded-full">Send Another Message</Button>
                      </div>
                    ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your name" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem><FormLabel>Phone (Optional)</FormLabel><FormControl><Input type="tel" placeholder="(123) 456-7890" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="message" render={({ field }) => (
                          <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Tell us what's on your mind..." className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <div className="flex justify-center">
                          <TurnstileWidget onVerify={setTurnstileToken} onError={() => setTurnstileToken(null)} onExpire={() => setTurnstileToken(null)} />
                        </div>
                        <Button type="submit" size="lg" className="w-full bg-highlight hover:bg-highlight/90 text-highlight-foreground rounded-full" disabled={isSubmitting || !turnstileToken}>
                          {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending...</>) : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="space-y-6">
                  <Card className="bg-white/70 backdrop-blur-xl shadow-xl ring-1 ring-accent/10 rounded-3xl border-0">
                    <CardHeader><CardTitle className="text-primary">Contact Information</CardTitle><CardDescription>Other ways to reach us</CardDescription></CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <div><p className="font-medium text-primary">Email</p><a href="mailto:info@toastallday.com" className="text-muted-foreground hover:text-accent transition-colors">info@toastallday.com</a></div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <div><p className="font-medium text-primary">Phone</p><a href="tel:9802588278" className="text-muted-foreground hover:text-accent transition-colors">(980) 258-8278</a></div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <div><p className="font-medium text-primary">Visit Us</p><a href="/locations" className="text-muted-foreground hover:text-accent transition-colors">View all locations</a></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 backdrop-blur-xl shadow-xl ring-1 ring-accent/10 rounded-3xl border-0">
                    <CardHeader><CardTitle className="text-primary">Catering Inquiries</CardTitle></CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Planning an event? We'd love to cater your special occasion!</p>
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                        <a href="/catering">Learn About Catering</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
