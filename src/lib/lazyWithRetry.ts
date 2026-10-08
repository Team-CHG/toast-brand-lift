import { lazy, type ComponentType } from "react";

// A dynamic import can fail once when a deploy swaps the chunk files under an
// already-open tab, or while the dev server is mid-update. Retrying the same
// import usually succeeds; if it still fails, the error reaches ErrorBoundary
// instead of blanking the page.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(async () => {
    try {
      return await factory();
    } catch (firstError) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      try {
        return await factory();
      } catch {
        throw firstError;
      }
    }
  });
}
