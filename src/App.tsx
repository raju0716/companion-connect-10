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
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProfiles from "./pages/admin/AdminProfiles";
import AdminBookings from "./pages/admin/AdminBookings";
import AdminPlaceholder from "./pages/admin/AdminPlaceholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PublicLayout = () => (
  <>
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
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="profiles" element={<AdminProfiles />} />
              <Route path="bookings" element={<AdminBookings />} />
              <Route path="cities" element={<AdminPlaceholder title="Cities" />} />
              <Route path="categories" element={<AdminPlaceholder title="Categories" />} />
              <Route path="reports" element={<AdminPlaceholder title="Reports" />} />
              <Route path="messages" element={<AdminPlaceholder title="Messages" />} />
              <Route path="subscriptions" element={<AdminPlaceholder title="Subscriptions" />} />
              <Route path="moderation" element={<AdminPlaceholder title="Moderation" />} />
              <Route path="settings" element={<AdminPlaceholder title="Settings" />} />
            </Route>
            <Route path="/*" element={<PublicLayout />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
