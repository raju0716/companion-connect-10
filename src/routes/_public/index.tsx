import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/_public/")({
  head: () => ({
    meta: [
      { title: "ÉLITE — Premium Companion Services in India" },
      { name: "description", content: "Discover verified, elegant companions across India's top cities. Discreet bookings, safety first." },
      { property: "og:title", content: "ÉLITE — Premium Companion Services in India" },
      { property: "og:description", content: "Discover verified, elegant companions across India's top cities. Discreet bookings, safety first." },
    ],
  }),
  component: Index,
});
