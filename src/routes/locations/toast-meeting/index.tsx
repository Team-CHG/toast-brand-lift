import { createFileRoute } from "@tanstack/react-router";
import ToastMeeting from "@/pages/locations/ToastMeeting";

export const Route = createFileRoute("/locations/toast-meeting/")({
  component: ToastMeeting,
});
