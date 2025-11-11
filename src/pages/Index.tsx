import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import iconTanningBed from "@/assets/icon-tanning-bed-circle.jpg";
import iconSprayGun from "@/assets/icon-spray-gun-circle.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      {/* SEÇÃO 2 - SERVIÇOS PREVIEW */}
      <section className="py-20 px-10 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-script text-4xl md:text-5xl text-gold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-foreground/70">
              Tratamentos personalizados para cada tipo de pele
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Card 1 */}
            <div className="bg-card rounded-2xl shadow-soft p-8 text-center space-y-4 hover:shadow-gold transition-all duration-300">
              <div className="inline-flex">
                <img src={iconTanningBed} alt="Bronzeamento Artificial" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gold">Bronzeamento Artificial</h3>
              <p className="text-sm text-foreground/70">
                Tom dourado e uniforme que realça sua beleza natural com técnicas avançadas.
              </p>
              <Link to="/servicos">
                <Button variant="outline" className="mt-4">
                  Ver Mais
                </Button>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-2xl shadow-soft p-8 text-center space-y-4 hover:shadow-gold transition-all duration-300">
              <div className="inline-flex">
                <img src={iconSprayGun} alt="Instant Bronze" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gold">Instant Bronze</h3>
              <p className="text-sm text-foreground/70">
                Aplicação rápida e profissional para um bronze instantâneo e duradouro.
              </p>
              <Link to="/servicos">
                <Button variant="outline" className="mt-4">
                  Ver Mais
                </Button>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-2xl shadow-soft p-8 text-center space-y-4 hover:shadow-gold transition-all duration-300">
              <div className="inline-flex p-4 bg-gold/10 rounded-full">
                <Sparkles className="w-16 h-16 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gold">Análise de Pele</h3>
              <p className="text-sm text-foreground/70">
                Avaliação profissional do seu fototipo para tratamento personalizado e seguro.
              </p>
              <Link to="/analise-de-pele">
                <Button variant="outline" className="mt-4">
                  Ver Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - CTA */}
      <section className="py-20 px-10 bg-gradient-gold">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-script text-4xl md:text-6xl text-white">
              Descubra Seu Tom Perfeito
            </h2>
            <p className="text-xl text-white/90">
              Análise profissional e personalizada para cada tipo de pele
            </p>
            <Link to="/analise-de-pele">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-12 py-6 bg-white text-gold hover:bg-white/90 shadow-2xl"
              >
                FAZER ANÁLISE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
