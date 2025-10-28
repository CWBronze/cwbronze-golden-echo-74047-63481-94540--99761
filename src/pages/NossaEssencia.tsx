import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Sparkles, Shield, User } from "lucide-react";

const NossaEssencia = () => {
  const valores = [
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com os mais altos padrões de qualidade em cada tratamento."
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Atenção personalizada e dedicada ao bem-estar de cada cliente."
    },
    {
      icon: Sparkles,
      title: "Personalização",
      description: "Tratamentos sob medida respeitando as características únicas de cada pele."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Protocolos rigorosos e produtos certificados para sua tranquilidade."
    }
  ];

  const equipe = [
    {
      name: "Carolina Weber",
      role: "Fundadora & Especialista em Bronzeamento",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Ana Silva",
      role: "Especialista em Análise de Pele",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Mariana Costa",
      role: "Terapeuta & Consultora de Beleza",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* HERO SECTION */}
      <section 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-0 pt-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold/70 to-bronze/70"></div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="font-script text-5xl md:text-7xl">Nossa Essência</h1>
          <p className="text-xl md:text-2xl font-medium tracking-wide">
            Beleza, Bem-Estar e Autoestima
          </p>
        </div>
      </section>

      {/* SEÇÃO 1 - QUEM SOMOS */}
      <section className="py-20 px-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-4xl md:text-5xl font-script text-gold">Quem Somos</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  A CWBronze nasceu da paixão por realçar a beleza natural de cada pessoa, respeitando e valorizando todos os tons de pele. Somos especialistas em bronzeamento premium, combinando técnicas avançadas com produtos de altíssima qualidade.
                </p>
                <p>
                  Nossa missão é proporcionar não apenas um bronzeado perfeito, mas uma experiência transformadora que eleva a autoestima e celebra a individualidade de cada cliente. Acreditamos que cada tom de pele tem sua própria beleza única, e nosso papel é realçá-la com segurança e elegância.
                </p>
                <p>
                  Com anos de experiência e formação especializada, nossa equipe está preparada para oferecer análises detalhadas e tratamentos personalizados que respeitam as características individuais de cada pele.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=1000&fit=crop"
                alt="Clínica CWBronze"
                className="w-full h-[500px] rounded-3xl shadow-gold object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - NOSSOS VALORES */}
      <section className="py-20 px-10 bg-champagne">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script text-gold mb-4">
              Nossos Valores
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Princípios que guiam cada detalhe do nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-gold transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/10 rounded-lg">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gold mb-2">
                        {valor.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {valor.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - EQUIPE */}
      <section className="py-20 px-10 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script text-gold mb-4">
              Nossa Equipe
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Profissionais especializados dedicados à sua beleza e bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {equipe.map((membro, index) => (
              <div 
                key={index}
                className="text-center space-y-4 group"
              >
                <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden shadow-soft group-hover:shadow-gold transition-all duration-300">
                  <img 
                    src={membro.image}
                    alt={membro.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gold">
                    {membro.name}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {membro.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO CTA */}
      <section className="py-20 px-10 bg-gradient-gold">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-script text-4xl md:text-5xl text-white">
              Conheça Nossa Clínica Pessoalmente
            </h2>
            <p className="text-xl text-white/90">
              Agende uma visita e descubra como podemos realçar sua beleza natural
            </p>
            <Link to="/agendamento">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-12 py-6 bg-white text-gold hover:bg-white/90 shadow-2xl"
              >
                AGENDAR VISITA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NossaEssencia;
