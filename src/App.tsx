import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnaliseDePele from "./pages/AnaliseDePele";
import Servicos from "./pages/Servicos";
import NossaEssencia from "./pages/NossaEssencia";
import Resultados from "./pages/Resultados";
import Contato from "./pages/Contato";
import Agendamento from "./pages/Agendamento";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analise-de-pele" element={<AnaliseDePele />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/nossa-essencia" element={<NossaEssencia />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/agendamento" element={<Agendamento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
