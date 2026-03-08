import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import { companions, categories } from "@/data/mockData";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);

  // For now show all companions (in a real app, filter by category)
  const categoryCompanions = companions;

  if (!category) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Category not found</h1>
          <Link to="/"><Button variant="outline" className="border-primary text-primary">Go Home</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary text-sm mb-6">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-6 h-6 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-gradient-rose">{category.name}</span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-xl">{category.description}</p>
          <p className="text-sm text-primary mt-1">{category.count} profiles available</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryCompanions.map((c, i) => (
            <CompanionCard key={c.id} companion={c} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
