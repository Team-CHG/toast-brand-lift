import { Button } from "@/components/ui/button";

const RewardsCtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join our rewards program today and start enjoying the benefits!
        </p>
        <Button asChild size="lg" className="text-lg px-10">
          <a target="_blank" rel="noopener noreferrer" href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup">
            Sign Up Now
          </a>
        </Button>
      </div>
    </section>
  );
};

export default RewardsCtaSection;
