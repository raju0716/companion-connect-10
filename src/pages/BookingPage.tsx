import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Check, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { companions } from "@/data/mockData";
import { motion } from "framer-motion";
import { toast } from "sonner";

const timeSlots = [
  "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00",
  "20:00", "21:00", "22:00", "23:00",
];

const locationTypes = [
  { id: "incall", label: "In-Call", desc: "Visit the companion's location" },
  { id: "outcall", label: "Out-Call", desc: "Companion visits your location" },
  { id: "hotel", label: "Hotel", desc: "Meet at a hotel of your choice" },
];

const durations = [
  { id: "1hr", label: "1 Hour", multiplier: 1 },
  { id: "3hr", label: "3 Hours", multiplier: 2.5 },
  { id: "overnight", label: "Overnight", multiplier: 6 },
];

const BookingPage = () => {
  const { id } = useParams();
  const companion = companions.find((c) => c.id === id);

  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const selectedDuration = durations.find((d) => d.id === duration);
  const totalPrice = useMemo(() => {
    if (!companion || !selectedDuration) return 0;
    return companion.pricePerHour * selectedDuration.multiplier;
  }, [companion, selectedDuration]);

  const canProceedStep1 = date && time && location && duration && selectedServices.length > 0;
  const canProceedStep2 = name.trim() && email.trim() && phone.trim();

  const handleConfirm = () => {
    toast.success("Booking request submitted! We'll contact you shortly to confirm.");
    setStep(3);
  };

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

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to={`/companion/${companion.id}`} className="inline-flex items-center text-muted-foreground hover:text-primary text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to profile
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Book <span className="text-gradient-rose">{companion.name}</span>
        </h1>
        <p className="text-muted-foreground mb-8">Complete the details below to request a booking</p>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-10">
          {["Details", "Contact", "Confirm"].map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
                step > i + 1 ? "bg-primary text-primary-foreground" :
                step === i + 1 ? "bg-primary text-primary-foreground" :
                "bg-muted text-muted-foreground"
              )}>
                {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className={cn(
                "text-sm hidden sm:block",
                step >= i + 1 ? "text-foreground" : "text-muted-foreground"
              )}>{label}</span>
              {i < 2 && <div className={cn("flex-1 h-px", step > i + 1 ? "bg-primary" : "bg-border")} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                {/* Date */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Select Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}>
                        <Calendar className="w-4 h-4 mr-2" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarUI
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Select Time</label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTime(t)}
                        className={cn(
                          "px-3 py-2 rounded-md text-sm border transition-colors",
                          time === t
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card border-border text-foreground hover:border-primary/40"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Location Type</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {locationTypes.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => setLocation(loc.id)}
                        className={cn(
                          "p-4 rounded-lg border text-left transition-all",
                          location === loc.id
                            ? "border-primary bg-accent shadow-rose"
                            : "border-border bg-card hover:border-primary/40"
                        )}
                      >
                        <MapPin className={cn("w-4 h-4 mb-1", location === loc.id ? "text-primary" : "text-muted-foreground")} />
                        <p className="font-semibold text-sm text-foreground">{loc.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{loc.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Duration</label>
                  <div className="grid grid-cols-3 gap-3">
                    {durations.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setDuration(d.id)}
                        className={cn(
                          "p-4 rounded-lg border text-center transition-all",
                          duration === d.id
                            ? "border-primary bg-accent shadow-rose"
                            : "border-border bg-card hover:border-primary/40"
                        )}
                      >
                        <Clock className={cn("w-4 h-4 mx-auto mb-1", duration === d.id ? "text-primary" : "text-muted-foreground")} />
                        <p className="font-semibold text-sm text-foreground">{d.label}</p>
                        <p className="text-primary font-bold mt-1">${companion.pricePerHour * d.multiplier}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Select Services</label>
                  <div className="grid grid-cols-2 gap-2">
                    {companion.services.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleService(s)}
                        className={cn(
                          "flex items-center gap-2 p-3 rounded-lg border text-sm text-left transition-all",
                          selectedServices.includes(s)
                            ? "border-primary bg-accent text-foreground"
                            : "border-border bg-card text-muted-foreground hover:border-primary/40"
                        )}
                      >
                        <div className={cn(
                          "w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0",
                          selectedServices.includes(s) ? "bg-primary border-primary" : "border-border"
                        )}>
                          {selectedServices.includes(s) && <Check className="w-3 h-3 text-primary-foreground" />}
                        </div>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  Continue to Contact Details
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Full Name</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className="bg-card border-border" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Email</label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="bg-card border-border" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Phone / WhatsApp</label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 000-0000" className="bg-card border-border" />
                </div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="border-border">Back</Button>
                  <Button
                    onClick={handleConfirm}
                    disabled={!canProceedStep2}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    Confirm Booking
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Booking Request Sent!</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We'll confirm your booking via WhatsApp or email within 30 minutes.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <MessageCircle className="w-4 h-4 mr-2" /> Contact via WhatsApp
                  </Button>
                  <Link to="/companions">
                    <Button variant="outline" className="border-primary text-primary">Browse More</Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border rounded-lg p-5 space-y-4">
              <div className="flex items-center gap-3">
                <img src={companion.image} alt={companion.name} className="w-14 h-14 rounded-lg object-cover" />
                <div>
                  <h3 className="font-display font-semibold text-foreground">{companion.name}</h3>
                  <p className="text-muted-foreground text-xs">{companion.city} · {companion.age} yrs</p>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="text-foreground">{date ? format(date, "MMM d, yyyy") : "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="text-foreground">{time || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground capitalize">{location ? locationTypes.find(l => l.id === location)?.label : "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="text-foreground">{selectedDuration?.label || "—"}</span>
                </div>
                {selectedServices.length > 0 && (
                  <div>
                    <span className="text-muted-foreground">Services</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedServices.map((s) => (
                        <span key={s} className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded">{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-primary">${totalPrice || "—"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
