import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Search, ChevronDown, Sparkles, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cities } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Premium Companions", value: "500+" },
  { label: "Cities Covered", value: "50+" },
  { label: "Happy Clients", value: "10K+" },
  { label: "Client Rating", value: "4.9★" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Luxury evening ambiance"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(0, 52%, 61%) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, hsl(350, 50%, 55%) 0%, transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-8">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Badge className="bg-primary/15 text-primary border border-primary/30 px-4 py-1.5 text-xs md:text-sm font-body tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Premium Party Companion Service
          </Badge>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4 leading-[0.95]">
            <motion.span
              className="text-gradient-rose inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Exclusive
            </motion.span>
            <br />
            <span className="text-foreground">Party Girls</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-lg md:text-xl max-w-xl mx-auto mb-3 font-body font-light px-4">
            Your night deserves the best. Find stunning party companions for unforgettable evenings.
          </p>
          <p className="text-primary/70 text-xs md:text-sm font-body tracking-wider uppercase mb-8">
            Discretion · Elegance · Excellence
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-lg mx-auto px-4 mb-10"
        >
          <div className="bg-card/80 backdrop-blur-md rounded-xl border border-primary/20 p-2.5 flex gap-2 shadow-rose glow-rose">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="w-4 h-4 text-primary ml-2 flex-shrink-0" />
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="flex-1 border-0 bg-transparent shadow-none focus:ring-0">
                  <SelectValue placeholder="Choose your city..." />
                </SelectTrigger>
                <SelectContent>
                  {cities.slice(0, 20).map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={() => navigate(selectedCity ? `/city/${selectedCity}` : "/companions")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 md:px-8 rounded-lg font-semibold"
              size="lg"
            >
              <Search className="w-4 h-4 mr-1.5" />
              <span className="hidden sm:inline">Find Now</span>
              <span className="sm:hidden">Go</span>
            </Button>
          </div>
        </motion.div>

        {/* Quick action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12 px-4"
        >
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 text-foreground"
            onClick={() => navigate("/companions")}
          >
            <Star className="w-3.5 h-3.5 mr-1.5 text-primary" /> Browse All
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 text-foreground"
            onClick={() => navigate("/category/vip")}
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-primary" /> VIP Selection
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 text-foreground"
            onClick={() => navigate("/cities")}
          >
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary" /> All Cities
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-card/60 backdrop-blur-md rounded-xl border border-border/50 p-4 md:p-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground animate-bounce mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
