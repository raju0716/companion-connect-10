import { useParams, Link } from "@/lib/router-compat";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import { companions, cities } from "@/data/mockData";

const CityPage = () => {
  const { cityId } = useParams();
  const city = cities.find((c) => c.id === cityId);
  const cityCompanions = companions.filter(
    (c) => c.city.toLowerCase().replace(/\s+/g, "-") === cityId || c.city.toLowerCase() === city?.name.toLowerCase()
  );

  if (!city) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">City not found</h1>
          <Link to="/cities"><Button variant="outline" className="border-primary text-primary">View all cities</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/cities" className="inline-flex items-center text-muted-foreground hover:text-primary text-sm mb-6">
          <ArrowLeft className="w-4 h-4 mr-1" /> All cities
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-6 h-6 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Companions in <span className="text-gradient-gold">{city.name}</span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-xl">{city.description}</p>
        </div>

        {cityCompanions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cityCompanions.map((c, i) => (
              <CompanionCard key={c.id} companion={c} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p>No companions currently available in {city.name}. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityPage;
