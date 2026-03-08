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
  { id: "dubai", name: "Dubai", count: 42, description: "The city of luxury and glamour, where world-class companions await." },
  { id: "london", name: "London", count: 38, description: "Sophisticated elegance in the heart of the British capital." },
  { id: "paris", name: "Paris", count: 29, description: "The city of love, home to the most refined companions." },
  { id: "new-york", name: "New York", count: 35, description: "The city that never sleeps offers unforgettable encounters." },
  { id: "miami", name: "Miami", count: 24, description: "Sun-kissed beauty and vibrant nightlife companions." },
  { id: "istanbul", name: "Istanbul", count: 20, description: "Where East meets West in an alluring blend of cultures." },
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
