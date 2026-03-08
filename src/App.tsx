import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import CompanionListing from "./pages/CompanionListing";
import CompanionProfile from "./pages/CompanionProfile";
import CityPage from "./pages/CityPage";
import CitiesPage from "./pages/CitiesPage";
import SafetyPage from "./pages/SafetyPage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/companions" element={<CompanionListing />} />
          <Route path="/companion/:id" element={<CompanionProfile />} />
          <Route path="/cities" element={<CitiesPage />} />
          <Route path="/city/:cityId" element={<CityPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
