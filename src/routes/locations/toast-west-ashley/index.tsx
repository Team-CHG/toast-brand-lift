import { createFileRoute } from "@tanstack/react-router";
import ToastWestAshley from "@/pages/locations/ToastWestAshley";

export const Route = createFileRoute("/locations/toast-west-ashley/")({
  component: ToastWestAshley,
});
