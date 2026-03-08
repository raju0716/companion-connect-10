import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
import profile4 from "@/assets/profile-4.jpg";
import profile5 from "@/assets/profile-5.jpg";
import profile6 from "@/assets/profile-6.jpg";

export interface Companion {
  id: string;
  name: string;
  age: number;
  city: string;
  image: string;
  images: string[];
  description: string;
  services: string[];
  pricePerHour: number;
  rating: number;
  reviews: number;
  available: boolean;
  featured: boolean;
  tags: string[];
}

export interface City {
  id: string;
  name: string;
  count: number;
  description: string;
}

export const cities: City[] = [
  // International
  { id: "dubai", name: "Dubai", count: 42, description: "The city of luxury and glamour, where world-class companions await." },
  { id: "london", name: "London", count: 38, description: "Sophisticated elegance in the heart of the British capital." },
  { id: "paris", name: "Paris", count: 29, description: "The city of love, home to the most refined companions." },
  { id: "new-york", name: "New York", count: 35, description: "The city that never sleeps offers unforgettable encounters." },
  { id: "miami", name: "Miami", count: 24, description: "Sun-kissed beauty and vibrant nightlife companions." },
  { id: "istanbul", name: "Istanbul", count: 20, description: "Where East meets West in an alluring blend of cultures." },
  // India
  { id: "mumbai", name: "Mumbai", count: 55, description: "The city of dreams — glamour, Bollywood, and unforgettable nightlife." },
  { id: "delhi", name: "Delhi", count: 48, description: "The capital's blend of heritage and modern luxury." },
  { id: "bangalore", name: "Bangalore", count: 40, description: "India's tech hub with a vibrant cosmopolitan social scene." },
  { id: "hyderabad", name: "Hyderabad", count: 32, description: "The city of pearls, offering regal charm and elegance." },
  { id: "chennai", name: "Chennai", count: 28, description: "Cultural richness meets modern sophistication by the coast." },
  { id: "kolkata", name: "Kolkata", count: 26, description: "The city of joy — art, culture, and timeless beauty." },
  { id: "pune", name: "Pune", count: 30, description: "A youthful, vibrant city with an energetic nightlife." },
  { id: "ahmedabad", name: "Ahmedabad", count: 22, description: "Heritage city with a growing cosmopolitan lifestyle." },
  { id: "jaipur", name: "Jaipur", count: 25, description: "The Pink City — royal elegance and unforgettable experiences." },
  { id: "goa", name: "Goa", count: 35, description: "Beach paradise with a legendary party and nightlife scene." },
  { id: "lucknow", name: "Lucknow", count: 20, description: "The city of nawabs — grace, culture, and warm hospitality." },
  { id: "chandigarh", name: "Chandigarh", count: 18, description: "India's most planned city with a chic lifestyle." },
  { id: "indore", name: "Indore", count: 16, description: "The cleanest city in India with a lively social scene." },
  { id: "kochi", name: "Kochi", count: 19, description: "Coastal charm and cosmopolitan vibes in God's own country." },
  { id: "surat", name: "Surat", count: 15, description: "The diamond city — sparkling energy and warm encounters." },
  { id: "nagpur", name: "Nagpur", count: 14, description: "The orange city at the heart of India." },
  { id: "visakhapatnam", name: "Visakhapatnam", count: 13, description: "A beautiful port city with stunning coastal views." },
  { id: "bhopal", name: "Bhopal", count: 12, description: "The city of lakes — serene beauty and rich culture." },
  { id: "patna", name: "Patna", count: 14, description: "An ancient city with a vibrant modern energy." },
  { id: "thiruvananthapuram", name: "Thiruvananthapuram", count: 11, description: "Kerala's capital — tropical beauty and sophistication." },
  { id: "coimbatore", name: "Coimbatore", count: 13, description: "The Manchester of South India with a growing nightlife." },
  { id: "vadodara", name: "Vadodara", count: 10, description: "A cultural capital with royal heritage and charm." },
  { id: "agra", name: "Agra", count: 12, description: "Home of the Taj Mahal — romance and timeless beauty." },
  { id: "varanasi", name: "Varanasi", count: 10, description: "The spiritual capital with an enchanting mystique." },
  { id: "dehradun", name: "Dehradun", count: 11, description: "Gateway to the hills — natural beauty and peaceful charm." },
  { id: "mysore", name: "Mysore", count: 10, description: "The palace city — royal elegance in South India." },
  { id: "udaipur", name: "Udaipur", count: 14, description: "The city of lakes — romantic settings and regal beauty." },
  { id: "jodhpur", name: "Jodhpur", count: 11, description: "The Blue City — majestic forts and desert charm." },
  { id: "amritsar", name: "Amritsar", count: 10, description: "Golden Temple city with warm Punjabi hospitality." },
  { id: "ranchi", name: "Ranchi", count: 9, description: "A charming city surrounded by waterfalls and nature." },
  { id: "guwahati", name: "Guwahati", count: 10, description: "Gateway to Northeast India with vibrant culture." },
  { id: "shimla", name: "Shimla", count: 8, description: "The queen of hills — scenic beauty and colonial charm." },
  { id: "manali", name: "Manali", count: 7, description: "Mountain paradise with adventure and serene beauty." },
  { id: "rishikesh", name: "Rishikesh", count: 8, description: "Yoga capital of the world with spiritual energy." },
];

export const companions: Companion[] = [
  {
    id: "1",
    name: "Anastasia",
    age: 24,
    city: "Dubai",
    image: profile1,
    images: [profile1, profile2],
    description: "An enchanting presence with a passion for fine dining and intellectual conversation. University-educated with a love for art and culture. Available for upscale events, private dinners, and travel companionship.",
    services: ["Dinner Date", "Event Companion", "Travel", "Private Meeting"],
    pricePerHour: 500,
    rating: 4.9,
    reviews: 47,
    available: true,
    featured: true,
    tags: ["VIP", "Multilingual", "Travel"],
  },
  {
    id: "2",
    name: "Valentina",
    age: 26,
    city: "London",
    image: profile2,
    images: [profile2, profile3],
    description: "A captivating blend of beauty and intelligence. Former model turned lifestyle consultant. Perfect for high-profile events and intimate evenings.",
    services: ["Event Companion", "Private Meeting", "Dinner Date"],
    pricePerHour: 450,
    rating: 4.8,
    reviews: 32,
    available: true,
    featured: true,
    tags: ["Model", "Bilingual"],
  },
  {
    id: "3",
    name: "Isabella",
    age: 23,
    city: "Paris",
    image: profile3,
    images: [profile3, profile1],
    description: "Parisian charm meets international sophistication. A delightful companion for gallery openings, luxury travel, and unforgettable evenings in the City of Light.",
    services: ["Travel", "Dinner Date", "City Tour", "Event Companion"],
    pricePerHour: 550,
    rating: 5.0,
    reviews: 28,
    available: true,
    featured: true,
    tags: ["VIP", "Luxury", "Francophone"],
  },
  {
    id: "4",
    name: "Sophia",
    age: 25,
    city: "New York",
    image: profile4,
    images: [profile4, profile5],
    description: "Manhattan sophistication with a warm, engaging personality. Ideal for corporate events, exclusive nightlife, and private encounters in the Big Apple.",
    services: ["Dinner Date", "Nightlife", "Event Companion", "Private Meeting"],
    pricePerHour: 400,
    rating: 4.7,
    reviews: 51,
    available: true,
    featured: false,
    tags: ["Nightlife", "Corporate"],
  },
  {
    id: "5",
    name: "Elena",
    age: 22,
    city: "Miami",
    image: profile5,
    images: [profile5, profile6],
    description: "Sun-kissed beauty with an adventurous spirit. Perfect for beach getaways, yacht parties, and vibrant Miami nightlife experiences.",
    services: ["Beach Companion", "Yacht Party", "Nightlife", "Travel"],
    pricePerHour: 350,
    rating: 4.8,
    reviews: 19,
    available: true,
    featured: false,
    tags: ["Beach", "Party"],
  },
  {
    id: "6",
    name: "Natalia",
    age: 27,
    city: "Istanbul",
    image: profile6,
    images: [profile6, profile1],
    description: "An exotic beauty bridging cultures with grace. Multilingual and well-traveled, she brings warmth and sophistication to every encounter.",
    services: ["City Tour", "Dinner Date", "Travel", "Event Companion"],
    pricePerHour: 380,
    rating: 4.9,
    reviews: 23,
    available: false,
    featured: false,
    tags: ["Multilingual", "Cultural"],
  },
];
