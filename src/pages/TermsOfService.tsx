import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service - Toast All Day"
        description="Terms of Service for Toast All Day. Read our terms and conditions for using our services."
        keywords="terms of service, terms and conditions, Toast All Day, user agreement"
      />
      <Navigation />
      <SideDrawer />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs />
          
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 7, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the Toast All Day website, mobile application, or dining at our restaurants, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
              <h3 className="text-xl font-medium mb-2">Eligibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You must be at least 18 years old to create an account or make purchases through our services. By using our services, you represent that you meet this requirement.
              </p>
              
              <h3 className="text-xl font-medium mb-2">Account Registration</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Orders and Payments</h2>
              <h3 className="text-xl font-medium mb-2">Pricing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All prices are displayed in US dollars and are subject to change without notice. Prices may vary between locations and between dine-in, takeout, and delivery orders.
              </p>
              
              <h3 className="text-xl font-medium mb-2">Payment</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We accept major credit cards, debit cards, and other payment methods as indicated at checkout. By providing payment information, you represent that you are authorized to use the payment method.
              </p>
              
              <h3 className="text-xl font-medium mb-2">Order Acceptance</h3>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Rewards Program</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Participation in the Toast All Day Rewards program is subject to additional terms and conditions available at registration. Key terms include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Points have no cash value and cannot be transferred or sold</li>
                <li>Points may expire if your account is inactive for 12 consecutive months</li>
                <li>We reserve the right to modify or terminate the rewards program at any time</li>
                <li>Abuse of the rewards program may result in account termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Gift Cards</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gift cards are subject to the following terms:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Gift cards are redeemable at participating Toast All Day locations</li>
                <li>Gift cards cannot be redeemed for cash except where required by law</li>
                <li>Lost or stolen gift cards cannot be replaced</li>
                <li>Gift cards do not expire</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Catering Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Catering orders are subject to the following terms:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>A minimum order amount may be required</li>
                <li>Advance notice is required for catering orders (typically 24-72 hours)</li>
                <li>Cancellation policies vary by order size and notice given</li>
                <li>Delivery fees may apply based on location and order size</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website and mobile app, including text, graphics, logos, images, and software, is the property of Toast All Day or its content suppliers and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using our services, you agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Submit false or misleading information</li>
                <li>Interfere with the operation of our services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services for any fraudulent purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Toast All Day shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services. Our total liability shall not exceed the amount you paid for the specific product or service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Toast All Day, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of South Carolina, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Charleston County, South Carolina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-secondary/30 rounded-lg">
                <p className="font-medium">Toast All Day</p>
                <p className="text-muted-foreground">A Charleston Hospitality Group Restaurant</p>
                <p className="text-muted-foreground mt-2">Email: info@toastallday.com</p>
                <p className="text-muted-foreground">Phone: (843) 534-2547</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
