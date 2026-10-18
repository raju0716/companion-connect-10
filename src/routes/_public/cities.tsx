import { createFileRoute } from "@tanstack/react-router";
import CitiesPage from "@/pages/CitiesPage";

export const Route = createFileRoute("/_public/cities")({
  head: () => ({
    meta: [
      { title: "All Cities — ÉLITE" },
      { name: "description", content: "Find companions in 35+ Indian cities." },
      { property: "og:title", content: "All Cities — ÉLITE" },
      { property: "og:description", content: "Find companions in 35+ Indian cities." },
    ],
  }),
  component: CitiesPage,
});
