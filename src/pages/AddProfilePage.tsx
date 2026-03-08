import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2, Upload, User, MapPin, DollarSign, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { cities, categories } from "@/data/mockData";

const serviceOptions = [
  "Dinner Date", "Event Companion", "Travel", "Private Meeting",
  "Nightlife", "City Tour", "Beach Companion", "Yacht Party",
  "Hotel Visit", "Overnight Stay",
];

const availabilityOptions = ["Morning", "Afternoon", "Evening", "Night", "24/7"];

interface ProfileForm {
  name: string;
  age: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  description: string;
  services: string[];
  pricePerHour: string;
  availability: string[];
  photos: File[];
  photoPreviewUrls: string[];
}

const emptyProfile: ProfileForm = {
  name: "",
  age: "",
  city: "",
  phone: "",
  whatsapp: "",
  email: "",
  description: "",
  services: [],
  pricePerHour: "",
  availability: [],
  photos: [],
  photoPreviewUrls: [],
};

type UserType = "escort" | "hotel" | "independent" | "divorce" | "hookup";

const userTypeConfig: Record<UserType, { label: string; description: string; allowMultiple: boolean }> = {
  escort: { label: "Escort Agency", description: "Add multiple companion profiles for your agency", allowMultiple: true },
  hotel: { label: "Hotel Companion", description: "Add multiple hotel companion profiles", allowMultiple: true },
  independent: { label: "Independent Girl", description: "Create your own personal profile", allowMultiple: false },
  divorce: { label: "Divorce Women", description: "Create your own personal profile", allowMultiple: false },
  hookup: { label: "Hookup Women", description: "Create your own personal profile", allowMultiple: false },
};

const AddProfilePage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType | null>(null);
  const [profiles, setProfiles] = useState<ProfileForm[]>([{ ...emptyProfile }]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const config = userType ? userTypeConfig[userType] : null;
  const activeProfile = profiles[activeIndex];

  const updateProfile = (index: number, updates: Partial<ProfileForm>) => {
    setProfiles((prev) => prev.map((p, i) => (i === index ? { ...p, ...updates } : p)));
  };

  const toggleArrayItem = (index: number, field: "services" | "availability", item: string) => {
    const current = profiles[index][field];
    const updated = current.includes(item) ? current.filter((x) => x !== item) : [...current, item];
    updateProfile(index, { [field]: updated });
  };

  const handlePhotoUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    const newPhotos = [...profiles[index].photos, ...files];
    const newUrls = [...profiles[index].photoPreviewUrls, ...files.map((f) => URL.createObjectURL(f))];
    updateProfile(index, { photos: newPhotos, photoPreviewUrls: newUrls });
  };

  const removePhoto = (profileIndex: number, photoIndex: number) => {
    const p = profiles[profileIndex];
    URL.revokeObjectURL(p.photoPreviewUrls[photoIndex]);
    updateProfile(profileIndex, {
      photos: p.photos.filter((_, i) => i !== photoIndex),
      photoPreviewUrls: p.photoPreviewUrls.filter((_, i) => i !== photoIndex),
    });
  };

  const addNewProfile = () => {
    setProfiles((prev) => [...prev, { ...emptyProfile }]);
    setActiveIndex(profiles.length);
  };

  const removeProfile = (index: number) => {
    if (profiles.length <= 1) return;
    profiles[index].photoPreviewUrls.forEach(URL.revokeObjectURL);
    setProfiles((prev) => prev.filter((_, i) => i !== index));
    setActiveIndex(Math.max(0, activeIndex - 1));
  };

  const isProfileValid = (p: ProfileForm) =>
    p.name.trim() && p.age && p.city && p.phone.trim() && p.description.trim() && p.services.length > 0 && p.pricePerHour;

  const handleSubmit = () => {
    const invalidIndex = profiles.findIndex((p) => !isProfileValid(p));
    if (invalidIndex !== -1) {
      setActiveIndex(invalidIndex);
      toast.error(`Please complete all required fields for profile ${invalidIndex + 1}`);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(
        profiles.length > 1
          ? `${profiles.length} profiles submitted for review!`
          : "Profile submitted for review!"
      );
      navigate("/");
    }, 1500);
  };

  // Step 1: Choose user type
  if (!userType) {
    return (
      <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
            Add Your <span className="text-gradient-rose">Profile</span>
          </h1>
          <p className="text-muted-foreground text-sm mb-6 md:mb-10">Choose your profile type to get started</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {(Object.entries(userTypeConfig) as [UserType, typeof userTypeConfig.escort][]).map(([key, val], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Card
                  className="cursor-pointer hover:border-primary/40 hover:shadow-rose transition-all"
                  onClick={() => setUserType(key)}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-5 h-5 text-primary" />
                      <h3 className="font-display text-base md:text-lg font-semibold text-foreground">
                        {val.label}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm">{val.description}</p>
                    {val.allowMultiple && (
                      <Badge variant="secondary" className="mt-3 text-xs">Multiple profiles</Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <div>
            <button onClick={() => setUserType(null)} className="text-xs text-muted-foreground hover:text-primary mb-1">
              ← Change type
            </button>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {config!.label} <span className="text-gradient-rose">Profile</span>
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm">{config!.description}</p>
          </div>
          {config!.allowMultiple && (
            <Button onClick={addNewProfile} size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground self-start sm:self-auto">
              <Plus className="w-4 h-4 mr-1" /> Add Another
            </Button>
          )}
        </div>

        {/* Profile tabs for multi-profile */}
        {config!.allowMultiple && profiles.length > 1 && (
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {profiles.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm border transition-all whitespace-nowrap",
                  activeIndex === i
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-foreground hover:border-primary/40"
                )}
              >
                Profile {i + 1}{p.name ? ` — ${p.name}` : ""}
                {profiles.length > 1 && (
                  <Trash2
                    className="w-3.5 h-3.5 opacity-60 hover:opacity-100"
                    onClick={(e) => { e.stopPropagation(); removeProfile(i); }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Profile form */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8"
          >
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {/* Basic info */}
              <div className="bg-card border border-border rounded-lg p-5 space-y-4">
                <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" /> Basic Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Name / Alias *</label>
                    <Input
                      value={activeProfile.name}
                      onChange={(e) => updateProfile(activeIndex, { name: e.target.value })}
                      placeholder="Display name"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Age *</label>
                    <Input
                      type="number"
                      min="18"
                      max="60"
                      value={activeProfile.age}
                      onChange={(e) => updateProfile(activeIndex, { age: e.target.value })}
                      placeholder="Must be 18+"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">City *</label>
                    <Select
                      value={activeProfile.city}
                      onValueChange={(val) => updateProfile(activeIndex, { city: val })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((c) => (
                          <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Price Per Hour ($) *</label>
                    <Input
                      type="number"
                      min="0"
                      value={activeProfile.pricePerHour}
                      onChange={(e) => updateProfile(activeIndex, { pricePerHour: e.target.value })}
                      placeholder="e.g. 300"
                      className="bg-background border-border"
                    />
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-card border border-border rounded-lg p-5 space-y-4">
                <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Contact Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Phone *</label>
                    <Input
                      value={activeProfile.phone}
                      onChange={(e) => updateProfile(activeIndex, { phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">WhatsApp</label>
                    <Input
                      value={activeProfile.whatsapp}
                      onChange={(e) => updateProfile(activeIndex, { whatsapp: e.target.value })}
                      placeholder="WhatsApp number"
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                    <Input
                      type="email"
                      value={activeProfile.email}
                      onChange={(e) => updateProfile(activeIndex, { email: e.target.value })}
                      placeholder="your@email.com"
                      className="bg-background border-border"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-card border border-border rounded-lg p-5 space-y-4">
                <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" /> About
                </h2>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Description *</label>
                  <Textarea
                    value={activeProfile.description}
                    onChange={(e) => updateProfile(activeIndex, { description: e.target.value })}
                    placeholder="Write an attractive description about yourself or the companion..."
                    rows={4}
                    className="bg-background border-border resize-none"
                  />
                </div>
              </div>

              {/* Services */}
              <div className="bg-card border border-border rounded-lg p-5 space-y-4">
                <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" /> Services *
                </h2>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((s) => (
                    <button
                      key={s}
                      onClick={() => toggleArrayItem(activeIndex, "services", s)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm border transition-all",
                        activeProfile.services.includes(s)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border text-foreground hover:border-primary/40"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-card border border-border rounded-lg p-5 space-y-4">
                <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Availability
                </h2>
                <div className="flex flex-wrap gap-2">
                  {availabilityOptions.map((a) => (
                    <button
                      key={a}
                      onClick={() => toggleArrayItem(activeIndex, "availability", a)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm border transition-all",
                        activeProfile.availability.includes(a)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border text-foreground hover:border-primary/40"
                      )}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photos */}
              <div className="bg-card border border-border rounded-lg p-5 space-y-4">
                <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <Upload className="w-5 h-5 text-primary" /> Photos
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {activeProfile.photoPreviewUrls.map((url, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-border group">
                      <img src={url} alt="" className="w-full h-full object-cover" />
                      <button
                        onClick={() => removePhoto(activeIndex, i)}
                        className="absolute top-1 right-1 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  <label className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary/40 flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <Upload className="w-6 h-6 text-muted-foreground mb-1" />
                    <span className="text-xs text-muted-foreground">Add Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handlePhotoUpload(activeIndex, e)}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-xs text-muted-foreground">Upload up to 10 photos. Clear, well-lit photos perform best.</p>
              </div>
            </div>

            {/* Sidebar preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-5 space-y-4">
                <h3 className="font-display font-semibold text-foreground text-sm">Profile Preview</h3>

                {activeProfile.photoPreviewUrls[0] ? (
                  <div className="aspect-[3/4] rounded-lg overflow-hidden border border-border">
                    <img src={activeProfile.photoPreviewUrls[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="aspect-[3/4] rounded-lg bg-muted flex items-center justify-center">
                    <User className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}

                <div>
                  <h4 className="font-display text-lg text-foreground">
                    {activeProfile.name || "Your Name"}{activeProfile.age ? `, ${activeProfile.age}` : ""}
                  </h4>
                  {activeProfile.city && (
                    <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {activeProfile.city}
                    </p>
                  )}
                  {activeProfile.pricePerHour && (
                    <p className="text-primary font-semibold text-sm mt-1">From ${activeProfile.pricePerHour}/hr</p>
                  )}
                </div>

                {activeProfile.services.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {activeProfile.services.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                    ))}
                  </div>
                )}

                {activeProfile.description && (
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-4">{activeProfile.description}</p>
                )}

                <div className="border-t border-border pt-4 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="text-foreground">{config!.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Photos</span>
                    <span className="text-foreground">{activeProfile.photos.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="text-primary">Pending Review</span>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {submitting ? "Submitting..." : `Submit ${profiles.length > 1 ? `${profiles.length} Profiles` : "Profile"}`}
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AddProfilePage;
