import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AnaliseDePele = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-script text-5xl md:text-6xl text-gold">
            Análise de Pele
          </h1>
          <p className="text-lg text-foreground/80">
            Descubra o melhor tratamento para sua pele com nossa análise profissional personalizada.
          </p>
          <Link to="/agendamento">
            <Button variant="cta" size="lg">
              AGENDAR ANÁLISE
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnaliseDePele;
