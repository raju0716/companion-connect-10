import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { cities } from "@/data/mockData";

const CitiesPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Browse by <span className="text-gradient-gold">City</span>
      </h1>
      <p className="text-muted-foreground mb-10">Find companions in your preferred destination</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {cities.map((city, i) => (
          <motion.div
            key={city.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/city/${city.id}`}
              className="block p-6 rounded-lg bg-card border border-border hover:border-primary/40 hover:shadow-gold transition-all group"
            >
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {city.name}
              </h2>
              <p className="text-muted-foreground text-sm mt-1">{city.count} companions</p>
              <p className="text-muted-foreground text-sm mt-2">{city.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default CitiesPage;
