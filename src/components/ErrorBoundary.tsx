import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// A stale bundle (a deploy replaced the chunks under an already-open tab) makes a
// dynamic import fail, which blanks the page. One reload picks up the current
// build; the timestamp window keeps a genuine render bug from reloading forever.
const RELOAD_STAMP_KEY = "toast-allday-last-auto-reload";
const MIN_MS_BETWEEN_AUTO_RELOADS = 10000;

function shouldAutoReload(): boolean {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_STAMP_KEY) ?? 0);
    if (Date.now() - last < MIN_MS_BETWEEN_AUTO_RELOADS) return false;
    sessionStorage.setItem(RELOAD_STAMP_KEY, String(Date.now()));
    return true;
  } catch {
    // Storage can be unavailable (private mode); skip the auto-reload.
    return false;
  }
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("Page failed to load:", error, info.componentStack);
    if (shouldAutoReload()) {
      window.location.reload();
    }
  }

  render(): ReactNode {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="flex min-h-screen items-center justify-center bg-complementary px-6 py-24">
        <div className="w-full max-w-md rounded-2xl bg-card p-8 text-center shadow-xl ring-1 ring-border/60">
          <h1 className="text-2xl font-bold text-primary">
            We could not load this page
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The connection dropped before the page finished loading. Refresh to
            try again, or head back to the home page.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              onClick={() => window.location.reload()}
              className="bg-highlight hover:bg-highlight/90 text-highlight-foreground"
            >
              Refresh page
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-accent/30 text-primary"
            >
              <a href="/">Back to home</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
