import { createFileRoute } from "@tanstack/react-router";
import BookingPage from "@/pages/BookingPage";

export const Route = createFileRoute("/_public/booking/$id")({
  head: () => ({
    meta: [
      { title: "Book a Companion — ÉLITE" },
      { name: "description", content: "Choose date, time, location and services to confirm your booking." },
      { property: "og:title", content: "Book a Companion — ÉLITE" },
      { property: "og:description", content: "Choose date, time, location and services to confirm your booking." },
    ],
  }),
  component: BookingPage,
});
