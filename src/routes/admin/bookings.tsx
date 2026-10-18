import { createFileRoute } from "@tanstack/react-router";
import AdminBookings from "@/pages/admin/AdminBookings";

export const Route = createFileRoute("/admin/bookings")({
  component: AdminBookings,
});
