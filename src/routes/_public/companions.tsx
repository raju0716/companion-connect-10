import { createFileRoute } from "@tanstack/react-router";
import CompanionListing from "@/pages/CompanionListing";

export const Route = createFileRoute("/_public/companions")({
  head: () => ({
    meta: [
      { title: "Browse Companions — ÉLITE" },
      { name: "description", content: "Browse verified companion profiles with filters for city, age, price and availability." },
      { property: "og:title", content: "Browse Companions — ÉLITE" },
      { property: "og:description", content: "Browse verified companion profiles with filters for city, age, price and availability." },
    ],
  }),
  component: CompanionListing,
});
