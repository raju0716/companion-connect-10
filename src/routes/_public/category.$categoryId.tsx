import { createFileRoute } from "@tanstack/react-router";
import CategoryPage from "@/pages/CategoryPage";

export const Route = createFileRoute("/_public/category/$categoryId")({
  component: CategoryPage,
});
