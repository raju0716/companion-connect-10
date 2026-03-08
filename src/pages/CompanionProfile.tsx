import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Clock, MessageCircle, ArrowLeft, Check, User, ThumbsUp } from "lucide-react";
import ReportButton from "@/components/ReportButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { companions } from "@/data/mockData";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

const generateMockReviews = (companionName: string): Review[] => [
  { id: 1, name: "Rahul M.", rating: 5, comment: `${companionName} is absolutely wonderful. Very professional and great company for the evening. Highly recommended!`, date: "2 days ago", helpful: 12 },
  { id: 2, name: "Amit S.", rating: 4, comment: "Had a great time. Very punctual and well-mannered. Will definitely book again.", date: "1 week ago", helpful: 8 },
  { id: 3, name: "Vikram P.", rating: 5, comment: "Best experience ever! Very elegant and charming personality. Made the dinner date truly special.", date: "2 weeks ago", helpful: 15 },
  { id: 4, name: "Suresh K.", rating: 3, comment: "Good overall experience. Communication could be a bit better but service was fine.", date: "3 weeks ago", helpful: 3 },
  { id: 5, name: "Deepak R.", rating: 5, comment: "Absolutely stunning and very professional. Perfect companion for the corporate event.", date: "1 month ago", helpful: 20 },
];

const CompanionProfile = () => {
  const { id } = useParams();
  const companion = companions.find((c) => c.id === id);
  const [reviews, setReviews] = useState<Review[]>(() => 
    companion ? generateMockReviews(companion.name) : []
  );
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });
  const [showAllReviews, setShowAllReviews] = useState(false);

  if (!companion) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Companion not found</h1>
          <Link to="/companions">
            <Button variant="outline" className="border-primary text-primary">Back to listings</Button>
          </Link>
        </div>
      </div>
    );
  }

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    percent: Math.round((reviews.filter((r) => r.rating === star).length / reviews.length) * 100),
  }));

  const handleSubmitReview = () => {
    if (!newReview.name.trim() || !newReview.comment.trim()) {
      toast.error("Please fill in your name and review");
      return;
    }
    const review: Review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: "Just now",
      helpful: 0,
    };
    setReviews([review, ...reviews]);
    setNewReview({ name: "", rating: 5, comment: "" });
    toast.success("Review submitted successfully!");
  };

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  const packages = [
    { name: "1 Hour", price: companion.pricePerHour, desc: "Quick meeting" },
    { name: "3 Hours", price: companion.pricePerHour * 2.5, desc: "Dinner & evening" },
    { name: "Overnight", price: companion.pricePerHour * 6, desc: "Full evening experience" },
  ];

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/companions" className="inline-flex items-center text-muted-foreground hover:text-primary text-sm mb-4 md:mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to companions
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Images */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
            <div className="aspect-[3/4] sm:aspect-[4/5] rounded-lg overflow-hidden border border-border">
              <img src={companion.image} alt={companion.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {companion.images.map((img, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden border border-border">
                  <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 md:space-y-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    {companion.name}
                  </h1>
                  {companion.available && <Badge className="bg-primary text-primary-foreground border-0">Available</Badge>}
                </div>
                <ReportButton targetType="profile" targetId={companion.id} targetName={companion.name} />
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-muted-foreground text-xs md:text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {companion.city}</span>
                <span>Age: {companion.age}</span>
                <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-primary" /> {companion.rating} ({companion.reviews})</span>
              </div>
            </div>

            <div className="flex gap-1.5 flex-wrap">
              {companion.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>

            <Separator />

            <div>
              <h2 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">About</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{companion.description}</p>
            </div>

            <div>
              <h2 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3">Services</h2>
              <div className="grid grid-cols-2 gap-2">
                {companion.services.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" /> {s}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3">Packages</h2>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {packages.map((pkg) => (
                  <Card key={pkg.name} className="hover:border-primary/40 transition-colors">
                    <CardContent className="p-3 md:p-4 text-center">
                      <h3 className="font-semibold text-foreground text-sm">{pkg.name}</h3>
                      <p className="text-primary text-lg md:text-2xl font-bold mt-1">${pkg.price}</p>
                      <p className="text-muted-foreground text-[10px] md:text-xs mt-1">{pkg.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Mobile-friendly sticky CTA */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2 md:pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Book via WhatsApp
              </Button>
              <Link to={`/booking/${companion.id}`} className="flex-1">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Book Online
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 md:mt-12">
          <Separator className="mb-8" />
          
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">
            Reviews & Ratings
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Rating Summary */}
            <Card className="border-border">
              <CardContent className="p-5 text-center">
                <p className="text-4xl font-bold text-foreground">{avgRating}</p>
                <div className="flex justify-center gap-0.5 my-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-4 h-4 ${s <= Math.round(Number(avgRating)) ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{reviews.length} reviews</p>

                <div className="mt-4 space-y-2">
                  {ratingBreakdown.map((r) => (
                    <div key={r.star} className="flex items-center gap-2 text-sm">
                      <span className="w-3 text-muted-foreground">{r.star}</span>
                      <Star className="w-3 h-3 text-primary" />
                      <Progress value={r.percent} className="h-2 flex-1" />
                      <span className="w-6 text-xs text-muted-foreground text-right">{r.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Write Review */}
            <Card className="lg:col-span-2 border-border">
              <CardContent className="p-5 space-y-4">
                <h3 className="font-display font-semibold text-foreground">Write a Review</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input
                    placeholder="Your name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Rating:</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button key={s} onClick={() => setNewReview({ ...newReview, rating: s })}>
                          <Star className={`w-5 h-5 transition-colors ${s <= newReview.rating ? "text-primary fill-primary" : "text-muted-foreground hover:text-primary/50"}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <Textarea
                  placeholder="Share your experience..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  rows={3}
                  className="resize-none"
                />
                <Button onClick={handleSubmitReview} className="bg-primary text-primary-foreground">
                  Submit Review
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Review List */}
          <div className="space-y-4">
            {displayedReviews.map((review) => (
              <Card key={review.id} className="border-border">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-9 h-9 shrink-0">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {review.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div>
                          <span className="font-medium text-sm text-foreground">{review.name}</span>
                          <div className="flex gap-0.5 mt-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className={`w-3 h-3 ${s <= review.rating ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{review.comment}</p>
                      <button className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <ThumbsUp className="w-3 h-3" /> Helpful ({review.helpful})
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {reviews.length > 3 && (
            <div className="text-center mt-4">
              <Button variant="outline" onClick={() => setShowAllReviews(!showAllReviews)}>
                {showAllReviews ? "Show Less" : `View All ${reviews.length} Reviews`}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanionProfile;
