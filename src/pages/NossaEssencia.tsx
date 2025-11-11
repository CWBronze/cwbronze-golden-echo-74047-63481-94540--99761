import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Sparkles, Shield, Trophy } from "lucide-react";

const NossaEssencia = () => {
  const valores = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Protocolos rigorosos e equipamentos certificados com laudos Espectrômetro e ART."
    },
    {
      icon: Sparkles,
      title: "Personalização",
      description: "Cada pele é única e merece cuidado específico baseado na Escala de Fitzpatrick."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com qualidade em cada detalhe, do atendimento aos resultados."
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Atendimento humanizado e acolhedor que prioriza seu bem-estar."
    }
  ];

  const equipe = [
    {
      name: "Déborah Izidoro",
      role: "Fundadora & CEO",
      image: "/deb.png",
      bio: "Idealizadora da CWBronze e força visionária por trás da primeira clínica legalizada de bronzeamento artificial em Curitiba. Desde 2018, Déborah lidera com excelência e autenticidade, transformando o mercado de estética com equipamentos Ferrary rigorosamente inspecionados e protocolos personalizados. Sua experiência, dedicação e espírito inovador posicionaram a CWBronze como referência no Paraná."
    },
    {
      name: "Carolyna Fonseca",
      role: "Diretora Executiva & Sócia",
      image: "/Carol.jpg",
      bio: "Presente desde os primeiros passos da CWBronze, Carolyna atua lado a lado com sua mãe, Déborah, na construção e expansão da marca. Com talento, gestão moderna e olhar estratégico, impulsiona a empresa com inovação e conexão genuína com o público. Juntas, mãe e filha representam a união de gerações, dedicação e visão de futuro que fazem da CWBronze mais do que uma clínica — uma marca construída com alma, técnica e amor."
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
            Pioneirismo, Ciência e Cuidado Desde 2018
          </p>
        </div>
      </section>

      {/* BADGE DE PIONEIRISMO */}
      <section className="py-12 px-10 bg-gold/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <Trophy className="w-12 h-12 text-gold" />
              <div>
                <h3 className="text-2xl font-semibold text-gold">Primeira Clínica Legalizada</h3>
                <p className="text-foreground/70">Curitiba-PR • Desde 2018</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gold/30"></div>
            <div className="text-foreground/80 max-w-2xl">
              <p className="leading-relaxed">
                Desde 2018, a CWBronze faz história como a <strong>primeira clínica legalizada a atuar com bronzeamento artificial por máquinas no Paraná</strong>. Um marco pioneiro que nasceu da visão, coragem e determinação de duas mulheres extraordinárias: mãe e filha, empreendedoras que transformaram propósito em referência de mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 1 - NOSSA HISTÓRIA */}
      <section className="py-20 px-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-4xl md:text-5xl font-script text-gold">Nossa História</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  <strong>Em 2018</strong>, nasceu o sonho de oferecer bronzeamento artificial de qualidade com foco em segurança e personalização. Começamos com um espaço acolhedor e a determinação de fazer diferente, tornando-nos a primeira clínica legalizada de Curitiba-PR.
                </p>
                <p>
                  <strong>Entre 2020 e 2022</strong>, nos tornamos referência no Paraná. Investimos em equipamentos Ferrary rigorosamente inspecionados e desenvolvemos protocolos personalizados baseados em análise científica de fototipo através da Escala de Fitzpatrick.
                </p>
                <p>
                  <strong>De 2023 a 2025</strong>, redesenhamos nosso espaço para refletir a sofisticação e elegância que nossos clientes merecem. Um ambiente clean, moderno e acolhedor, mantendo a essência do cuidado pessoal que nos define.
                </p>
              </div>

              {/* Certificação */}
              <div className="mt-8 p-6 bg-champagne rounded-xl">
                <h4 className="text-lg font-semibold text-gold mb-3">Certificação Profissional</h4>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  Certificadas pela mentoria de <strong>Camila Taconi</strong>, referência nacional em bronzeamento artificial. Treinamento completo em técnicas avançadas, segurança e protocolos personalizados.
                </p>
                <a 
                  href="https://www.instagram.com/p/BqPNMeahiNK/?igsh=MXNidDRmOHR5eGxqMw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light text-sm font-medium underline"
                >
                  Ver certificação no Instagram →
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <img 
                src="/certificacao_camila_taconi.jpg"
                alt="Certificação com Camila Taconi - CWBronze"
                className="w-full h-[500px] rounded-3xl shadow-gold object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - MISSÃO, VISÃO E VALORES */}
      <section className="py-20 px-10 bg-champagne">
        <div className="container mx-auto max-w-6xl">
          {/* Missão e Visão */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-gold mb-4">Nossa Missão</h3>
              <p className="text-foreground/80 leading-relaxed">
                Proporcionar experiências de bronzeamento artificial seguras, personalizadas e transformadoras, respeitando a individualidade de cada pele e promovendo autoestima com responsabilidade.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-gold mb-4">Nossa Visão</h3>
              <p className="text-foreground/80 leading-relaxed">
                Ser reconhecida como a referência em bronzeamento artificial no Sul do Brasil, unindo equipamentos certificados, ciência e cuidado humano para elevar padrões de qualidade no setor.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-script text-gold mb-4">
              Nossos Valores
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e cada atendimento na CWBronze
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
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

      {/* SEÇÃO 3 - FUNDADORAS */}
      <section className="py-20 px-10 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script text-gold mb-4">
              Nossas Fundadoras
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Juntas, elas representam a união de gerações, dedicação e visão de futuro. CWBronze é mais do que uma clínica — <strong>é uma marca construída com alma, técnica e amor ao que faz</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {equipe.map((membro, index) => (
              <div 
                key={index}
                className="space-y-6 group"
              >
                <div className="relative mx-auto w-full h-96 rounded-2xl overflow-hidden shadow-soft group-hover:shadow-gold transition-all duration-300">
                  <img 
                    src={membro.image}
                    alt={membro.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gold mb-1">
                    {membro.name}
                  </h3>
                  <p className="text-foreground/60 text-sm font-medium mb-4">
                    {membro.role}
                  </p>
                  <p className="text-foreground/80 text-sm leading-relaxed text-left">
                    {membro.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-16 px-10 bg-gold/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">7+</div>
              <div className="text-foreground/70 text-sm">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">5000+</div>
              <div className="text-foreground/70 text-sm">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">98%</div>
              <div className="text-foreground/70 text-sm">Satisfação Garantida</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">3</div>
              <div className="text-foreground/70 text-sm">Equipamentos Ferrary</div>
            </div>
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
              Agende uma visita e descubra como podemos realçar sua beleza natural com segurança e excelência
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
