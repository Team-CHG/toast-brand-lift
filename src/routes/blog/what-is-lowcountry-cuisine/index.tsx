import { createFileRoute } from "@tanstack/react-router";
import WhatIsLowcountryCuisine from "@/pages/blog/WhatIsLowcountryCuisine";

export const Route = createFileRoute("/blog/what-is-lowcountry-cuisine/")({
  component: WhatIsLowcountryCuisine,
});
