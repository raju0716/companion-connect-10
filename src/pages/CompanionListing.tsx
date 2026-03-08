import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import CompanionCard from "@/components/CompanionCard";
import { companions, cities } from "@/data/mockData";

const CompanionListing = () => {
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    let result = [...companions];
    if (search) result = result.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
    if (cityFilter !== "all") result = result.filter((c) => c.city.toLowerCase() === cityFilter.toLowerCase());
    if (sortBy === "price-low") result.sort((a, b) => a.pricePerHour - b.pricePerHour);
    else if (sortBy === "price-high") result.sort((a, b) => b.pricePerHour - a.pricePerHour);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    else result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return result;
  }, [search, cityFilter, sortBy]);

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
          Our <span className="text-gradient-rose">Companions</span>
        </h1>
        <p className="text-muted-foreground text-sm md:text-base mb-6">Discover your perfect match</p>

        {/* Filters */}
        <Card className="p-3 md:p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {cities.map((c) => (
                    <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low → High</SelectItem>
                  <SelectItem value="price-high">Price: High → Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {filtered.map((c, i) => (
            <CompanionCard key={c.id} companion={c} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No companions found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanionListing;
