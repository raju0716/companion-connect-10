import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cities } from "@/data/mockData";

const HeroSection = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/placeholder.svg"
      >
        <source src="/videos/luxury-nightlife.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
            <span className="text-gradient-rose">Exclusive</span>
            <br />
            <span className="text-foreground">Companionship</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 font-body font-light px-4">
            Discover refined companions for unforgettable moments. Discretion, elegance, and excellence — guaranteed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-md mx-auto px-4"
        >
          <div className="bg-card rounded-lg border border-border p-2 flex gap-2 shadow-rose">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {cities.slice(0, 20).map((c) => (
                  <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              onClick={() => navigate(selectedCity ? `/city/${selectedCity}` : "/companions")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 md:px-6"
            >
              <Search className="w-4 h-4 mr-1 md:mr-2" /> <span className="hidden sm:inline">Explore</span>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
