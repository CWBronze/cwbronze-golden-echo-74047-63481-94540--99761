import { useState } from "react";
import ModalInteracaoPacote from "@/components/ModalInteracaoPacote";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import logoShield from "@/assets/logo-cwbronze-3d.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const [showInteracaoModal, setShowInteracaoModal] = useState(false);
  const [showAgendamentoModal, setShowAgendamentoModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "INÍCIO", href: "/" },
    { label: "NOSSA ESSÊNCIA", href: "/nossa-essencia" },
    { label: "SERVIÇOS", href: "/servicos" },
    { label: "RESULTADOS", href: "/resultados" },
    { label: "CONTATO", href: "/contato" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <TooltipProvider>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between w-full">
            {/* Logo - Larger and Clickable */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
                  <div className="relative h-20 w-auto">
                    <img 
                      src={logoShield} 
                      alt="CWBronze Logo - Brasão Premium 3D" 
                      className="h-20 w-auto transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110 cursor-pointer"
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
                  <h1 
                    className="text-2xl font-bold tracking-wide transition-all duration-500 group-hover:scale-105 text-gold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    CWBronze
                  </h1>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-gold/95 text-white border-gold">
                <p>Nossa Essência</p>
              </TooltipContent>
            </Tooltip>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
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

          {/* Desktop Agendar Button */}
          <div className="hidden md:flex items-center ml-auto">
            <Button 
              variant="cta" 
              size="default" 
              className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:brightness-110"
              onClick={() => setShowInteracaoModal(true)} // Abre o modal de interesse em agendar
            >
              <Calendar className="w-4 h-4" />
              AGENDAR
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gold p-2 hover:bg-gold/10 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-[88px] right-0 bottom-0 w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={closeMobileMenu}
              className="text-base font-medium text-gold tracking-wide hover:text-gold-light transition-colors py-3 border-b border-gray-100 hover:border-gold/30"
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile Agendar Button */}
          <Button 
            variant="cta" 
            size="default" 
            className="w-full gap-2 mt-4"
            onClick={() => {
              closeMobileMenu();
              setShowInteracaoModal(true); // Abre o modal de interesse em agendar
            }}
          >
            <Calendar className="w-4 h-4" />
            AGENDAR
          </Button>
        </nav>
      </div>
    </header>
    </TooltipProvider>

    <ModalInteracaoPacote
      isOpen={showInteracaoModal}
      onClose={() => setShowInteracaoModal(false)}
      pacote={{ nome: "Agendamento", origem: "header_agendar" }}
      onNewClient={() => {
        setShowInteracaoModal(false);
        setShowAgendamentoModal(true);
      }}
    />

    <LeadCaptureModal 
      isOpen={showAgendamentoModal} 
      onClose={() => setShowAgendamentoModal(false)} 
      onSuccess={() => {
        // Ação após o sucesso do agendamento (pode ser uma mensagem de sucesso)
        setShowAgendamentoModal(false);
      }}
      source="agendar_header"
    />
    </>
  );
};

export default Header;