import { createFileRoute, redirect } from "@tanstack/react-router";

// Downtown split into two menus; old item links go to the Meeting Street menu.
export const Route = createFileRoute("/menus/downtown/$category/$item/")({
  beforeLoad: ({ params }) => {
    throw redirect({ href: `/menus/meeting-street/${params.category}/${params.item}`, statusCode: 301 });
  },
});
