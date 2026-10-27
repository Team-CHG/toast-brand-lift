import { createFileRoute, redirect } from "@tanstack/react-router";

// Old news-events URLs moved to the blog.
export const Route = createFileRoute("/news-events/")({
  beforeLoad: () => {
    throw redirect({ to: "/blog", replace: true });
  },
});
