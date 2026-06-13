import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CateringPage from "./pages/CateringPage";
import MenuPage from "./pages/MenuPage";
import ReviewsPage from "./pages/ReviewsPage";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

const HashScroller = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const elementId = location.hash.replace("#", "");
    window.setTimeout(() => {
      document.getElementById(elementId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <HashScroller />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/catering" element={<CateringPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
        <ChatBot />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
