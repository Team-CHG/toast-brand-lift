import { useEffect, Suspense, lazy, type ReactNode } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import ErrorBoundary from "@/components/ErrorBoundary";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

const RewardsWidget = lazy(() => import("@/components/RewardsWidget"));

// Third-party scripts (GA + PX Grabber lead tracking) are deferred until the
// browser is idle so they never compete with the hero image for first paint.
const DEFERRED_THIRD_PARTY = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
var loadThirdParty = function () {
  var ga = document.createElement('script');
  ga.async = true;
  ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-TN04NYKSTP';
  document.head.appendChild(ga);
  gtag('config', 'G-TN04NYKSTP');
  if (!document.getElementById('px-grabber')) {
    var px = document.createElement('script');
    px.id = 'px-grabber';
    px.src = 'https://leads.goagency.com/px.min.js';
    px.type = 'text/javascript';
    px.onload = function () {
      if (window.PxGrabber) {
        PxGrabber.setOptions({ Label: '84452230|' + window.location.href });
        PxGrabber.render();
      }
    };
    document.head.appendChild(px);
  }
};
window.addEventListener('load', function () {
  setTimeout(loadThirdParty, 12000);
});
`;

const TITLE = "Toast All Day - Award-Winning Breakfast, Brunch & Lunch in Charleston";
const DESCRIPTION =
  "Toast All Day serves gourmet breakfast, brunch, and lunch with fresh, locally-sourced ingredients. TripAdvisor Top 25 Best Brunches in the U.S. Visit our Charleston, Mt. Pleasant, Summerville & Savannah locations.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "breakfast Charleston, brunch Charleston, lunch Mt Pleasant, best brunch Savannah, award winning breakfast, mimosas, french toast, eggs benedict, pancakes, waffles",
      },
      { name: "author", content: "Toast All Day" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Toast All Day - Award-Winning Breakfast, Brunch & Lunch" },
      {
        property: "og:description",
        content:
          "TripAdvisor Top 25 Best Brunches in the U.S. Fresh, locally-sourced ingredients. Locations in Charleston, Mt. Pleasant, Summerville & Savannah.",
      },
      { property: "og:image", content: "https://toastallday.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Toast All Day" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Toast All Day - Award-Winning Breakfast, Brunch & Lunch" },
      {
        name: "twitter:description",
        content: "TripAdvisor Top 25 Best Brunches in the U.S. Fresh, locally-sourced ingredients.",
      },
      { name: "twitter:image", content: "https://toastallday.com/og-image.jpg" },
      { name: "theme-color", content: "#2d5a27" },
      { name: "geo.region", content: "US-SC" },
      { name: "geo.placename", content: "Charleston" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      {
        rel: "preload",
        as: "font",
        type: "font/woff",
        href: "/fonts/telegraf-regular.woff",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [
      { src: "https://inkindscript.com/inkind.js", async: true },
      { children: DEFERRED_THIRD_PARTY },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LocalBusinessSchema />
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <RewardsWidget />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <div className="relative min-h-screen">
            <FestiveBackdrop />
            <Outlet />
          </div>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <h1 className="text-2xl font-bold">This page didn't load</h1>
      <p className="max-w-md text-muted-foreground">Something went wrong on our end. Please try again.</p>
      <div className="flex gap-3">
        <button
          type="button"
          className="rounded-full bg-highlight px-6 py-3 font-bold text-highlight-foreground"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Try again
        </button>
        <Link to="/" className="rounded-full border border-border px-6 py-3 font-bold">
          Go home
        </Link>
      </div>
    </div>
  );
}
