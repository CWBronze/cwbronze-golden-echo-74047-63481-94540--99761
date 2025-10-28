import logoShield from "@/assets/logo-cwbronze-3d.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const navItems = [
    { label: "INÍCIO", href: "/" },
    { label: "NOSSA ESSÊNCIA", href: "/nossa-essencia" },
    { label: "SERVIÇOS", href: "/servicos" },
    { label: "RESULTADOS", href: "/resultados" },
    { label: "CONTATO", href: "/contato" },
  ];

  return (
    <TooltipProvider>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Larger and Clickable */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/nossa-essencia" className="flex items-center group">
                  <div className="relative h-48 w-auto">
                    <img 
                      src={logoShield} 
                      alt="CWBronze Logo - Brasão Premium 3D" 
                      className="h-48 w-auto transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110 cursor-pointer"
                      style={{ 
                        objectFit: 'contain',
                        filter: 'brightness(1.05) contrast(1.1)',
                        mixBlendMode: 'multiply'
                      }}
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 blur-2xl bg-gold/30"></div>
                    </div>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-gold/95 text-white border-gold">
                <p>Nossa Essência</p>
              </TooltipContent>
            </Tooltip>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-sm font-medium text-gold tracking-wide hover:text-gold-light transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-light group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Agendar Button */}
          <div className="hidden md:flex items-center">
            <Link to="/agendamento">
              <Button variant="cta" size="default" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:brightness-110">
                <Calendar className="w-4 h-4" />
                AGENDAR
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    </TooltipProvider>
  );
};

export default Header;
