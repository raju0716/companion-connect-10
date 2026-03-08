import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Companion } from "@/data/mockData";

interface Props {
  companion: Companion;
  index?: number;
}

const CompanionCard = ({ companion, index = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <Link to={`/companion/${companion.id}`} className="group block">
      <Card className="relative overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-rose border-border">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={companion.image}
            alt={companion.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
        </div>

        {companion.featured && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground border-0 text-[10px] md:text-xs px-1.5 md:px-2">
            Featured
          </Badge>
        )}

        {!companion.available && (
          <Badge variant="secondary" className="absolute top-2 right-2 text-[10px] md:text-xs">
            Unavailable
          </Badge>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-4">
          <h3 className="font-display text-sm md:text-lg text-foreground leading-tight">{companion.name}, {companion.age}</h3>
          <div className="flex items-center gap-1 text-muted-foreground text-[10px] md:text-sm mt-0.5 md:mt-1">
            <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3" />
            <span>{companion.city}</span>
            <span className="mx-1 md:mx-2">·</span>
            <Star className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
            <span>{companion.rating}</span>
          </div>
          <p className="text-primary font-semibold text-xs md:text-sm mt-1 md:mt-2">
            From ${companion.pricePerHour}/hr
          </p>
        </div>
      </Card>
    </Link>
  </motion.div>
);

export default CompanionCard;
