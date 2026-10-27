import { createFileRoute } from "@tanstack/react-router";
import ToastSavannah from "@/pages/locations/ToastSavannah";

export const Route = createFileRoute("/locations/toast-savannah/")({
  component: ToastSavannah,
});
