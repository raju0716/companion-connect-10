import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
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
import CategoryPage from "./pages/CategoryPage";
import AddProfilePage from "./pages/AddProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
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
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/add-profile" element={<AddProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
