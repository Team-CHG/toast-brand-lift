import { createFileRoute, redirect } from "@tanstack/react-router";

// Downtown split into two menus; old category links go to the Meeting Street menu.
export const Route = createFileRoute("/menus/downtown/$category/")({
  beforeLoad: ({ params }) => {
    throw redirect({ href: `/menus/meeting-street/${params.category}`, statusCode: 301 });
  },
});
