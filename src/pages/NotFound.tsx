import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="min-h-screen bg-complementary">
    <SEO
      title="Page Not Found | Toast All Day"
      description="Sorry, we couldn't find that page. Browse our menus or find your nearest Toast! All Day location."
      noIndex
    />
    <Navigation />
    <main className="px-4 pb-24 pt-36 text-center md:pt-44">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-highlight">404</p>
      <h1 className="text-4xl font-bold text-primary md:text-5xl">Page not found</h1>
      <p className="mx-auto mt-5 max-w-md text-muted-foreground">
        That page may have moved or no longer exists. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild><a href="/">Home</a></Button>
        <Button asChild variant="outline"><a href="/menus">Menus</a></Button>
        <Button asChild variant="outline"><a href="/locations">Locations</a></Button>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;
