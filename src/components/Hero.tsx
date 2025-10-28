import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroModel from "@/assets/hero-model.jpg";
import heroHands from "@/assets/hero-hands.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const Hero = () => {
  return (
    <TooltipProvider>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero mt-0 pt-20">
      {/* Bokeh/Light Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gold-light/25 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Image - Model */}
          <div className="flex justify-center lg:justify-end pt-24">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/analise-de-pele" className="relative group cursor-pointer">
                  <img
                    src={heroModel}
                    alt="Escala Fitzpatrick - Análise de Pele"
                    className="w-full max-w-xs rounded-2xl shadow-soft object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-gold"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-gold/95 text-white border-gold">
                <p>Análise de Pele</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-6">
              <h1 className="font-script text-6xl md:text-7xl lg:text-8xl text-gold leading-relaxed">
                Elegância & Cuidado
              </h1>
              <p className="text-2xl md:text-3xl text-gold-dark font-medium tracking-[0.2em] uppercase">
                EM CADA TOM
              </p>
            </div>

            <Link to="/servicos" className="mt-4">
              <Button variant="cta" size="lg" className="text-base px-12 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                DESCUBRA MAIS
              </Button>
            </Link>
          </div>

          {/* Right Image - Hands */}
          <div className="flex justify-center lg:justify-start pt-24">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/servicos" className="relative group cursor-pointer">
                  <img
                    src={heroHands}
                    alt="Tratamento Premium - Serviços CWBronze"
                    className="w-full max-w-xs rounded-2xl shadow-soft object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-gold"
                  />
                  {/* Additional golden particles effect */}
                  <div className="absolute top-10 right-10 w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                  <div className="absolute top-20 right-16 w-2 h-2 bg-gold-light rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-32 right-12 w-2 h-2 bg-accent rounded-full animate-pulse delay-1000"></div>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-gold/95 text-white border-gold">
                <p>Serviços, protocolos personalizados</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
    </TooltipProvider>
  );
};

export default Hero;
