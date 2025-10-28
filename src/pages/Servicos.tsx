import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Check, Sun, Sparkles, Award, Crown } from "lucide-react";
import iconTanningBed from "@/assets/icon-tanning-bed-circle.jpg";

const Servicos = () => {
  const servicos = [
    {
      title: "Bronzeamento Artificial",
      description: "Bronzeado uniforme e natural com tecnologia de ponta e segurança garantida.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
      benefits: [
        "Resultado natural e uniforme",
        "Tecnologia UV segura e controlada",
        "Sessões rápidas e eficientes",
        "Acompanhamento profissional"
      ],
      icon: iconTanningBed,
      isImage: true,
      link: "/agendamento",
      linkText: "AGENDAR"
    },
    {
      title: "Análise de Fototipo",
      description: "Análise personalizada baseada na Escala de Fitzpatrick para tratamento ideal.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop",
      benefits: [
        "Avaliação profissional completa",
        "Identificação do seu fototipo",
        "Recomendação personalizada",
        "Protocolo de segurança individual"
      ],
      icon: Sparkles,
      link: "/analise-de-pele",
      linkText: "FAZER ANÁLISE"
    },
    {
      title: "Protocolos Personalizados",
      description: "Tratamentos exclusivos desenvolvidos especialmente para suas necessidades.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
      benefits: [
        "Plano individual sob medida",
        "Acompanhamento contínuo",
        "Produtos premium selecionados",
        "Resultados otimizados"
      ],
      icon: Award,
      link: "/agendamento",
      linkText: "SAIBA MAIS"
    }
  ];

  const passos = [
    {
      numero: 1,
      title: "Análise",
      description: "Avaliação completa do seu tipo de pele e fototipo para garantir segurança e resultados."
    },
    {
      numero: 2,
      title: "Protocolo",
      description: "Criação de um plano personalizado com tempos e intensidades ideais para você."
    },
    {
      numero: 3,
      title: "Sessão",
      description: "Aplicação do tratamento em ambiente confortável e com equipamentos de última geração."
    },
    {
      numero: 4,
      title: "Acompanhamento",
      description: "Monitoramento dos resultados e ajustes conforme necessário para manutenção perfeita."
    }
  ];

  const planos = [
    {
      nome: "Básico",
      preco: "299",
      destaque: false,
      itens: [
        "3 sessões de bronzeamento",
        "Análise de pele inicial",
        "Produtos pós-sessão",
        "Suporte via WhatsApp"
      ]
    },
    {
      nome: "Premium",
      preco: "599",
      destaque: true,
      itens: [
        "8 sessões de bronzeamento",
        "Análise completa de fototipo",
        "Kit de produtos premium",
        "Acompanhamento personalizado",
        "Hidratação profunda incluída",
        "Suporte prioritário"
      ]
    },
    {
      nome: "VIP",
      preco: "999",
      destaque: false,
      itens: [
        "15 sessões de bronzeamento",
        "Análise premium + reavaliações",
        "Kit completo de produtos",
        "Personal Bronze (acompanhamento exclusivo)",
        "Tratamentos faciais inclusos",
        "Agendamento prioritário",
        "Descontos em renovações"
      ]
    }
  ];

  const faqs = [
    {
      pergunta: "Quanto tempo dura cada sessão?",
      resposta: "As sessões variam entre 8 e 20 minutos, dependendo do seu tipo de pele e do protocolo estabelecido na análise inicial. Nossa equipe determina o tempo ideal para garantir resultados seguros e eficazes."
    },
    {
      pergunta: "É seguro fazer bronzeamento artificial?",
      resposta: "Sim, quando feito com acompanhamento profissional e equipamentos certificados. Realizamos análise de pele prévia, estabelecemos protocolos personalizados e monitoramos cada sessão para garantir total segurança."
    },
    {
      pergunta: "Quanto tempo dura o bronzeado?",
      resposta: "Com manutenção adequada, o bronzeado pode durar de 7 a 14 dias. Recomendamos hidratação regular e uso de produtos específicos para prolongar os resultados. Oferecemos orientações completas de manutenção."
    },
    {
      pergunta: "Preciso fazer algum preparo antes da sessão?",
      resposta: "Sim, recomendamos esfoliação suave 24h antes, chegar com a pele limpa e sem maquiagem, evitar perfumes e cremes. Fornecemos um guia completo de preparação no momento do agendamento."
    },
    {
      pergunta: "Quais os cuidados após o bronzeamento?",
      resposta: "Hidratação intensiva, uso de protetor solar, banhos mornos (não quentes) e evitar esfoliação nos primeiros dias. Disponibilizamos produtos específicos e um protocolo detalhado de cuidados pós-sessão."
    },
    {
      pergunta: "Posso fazer bronzeamento se tenho pele sensível?",
      resposta: "Sim! A análise de fototipo é essencial justamente para adaptar o tratamento ao seu tipo de pele. Criamos protocolos especiais para peles sensíveis com tempos reduzidos e acompanhamento mais frequente."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* HERO SECTION */}
      <section 
        className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-0 pt-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="font-script text-5xl md:text-7xl">Nossos Serviços</h1>
          <p className="text-xl md:text-2xl font-medium">
            Protocolos Personalizados para Cada Tom
          </p>
        </div>
      </section>

      {/* SEÇÃO 1 - SERVIÇOS PRINCIPAIS */}
      <section className="py-20 px-10 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {servicos.map((servico, index) => {
              return (
                <Card key={index} className="overflow-hidden hover:shadow-gold transition-all duration-300">
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    <img 
                      src={servico.image}
                      alt={servico.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex">
                        {servico.isImage ? (
                          <img src={servico.icon as string} alt={servico.title} className="w-10 h-10 object-contain" />
                        ) : (
                          (() => {
                            const Icon = servico.icon as React.ComponentType<{ className?: string }>;
                            return <Icon className="w-10 h-10 text-gold" />;
                          })()
                        )}
                      </div>
                      <CardTitle className="text-gold">{servico.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {servico.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {servico.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to={servico.link} className="w-full">
                      <Button variant="cta" className="w-full">
                        {servico.linkText}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - COMO FUNCIONA */}
      <section className="py-20 px-10 bg-champagne">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script text-gold mb-4">
              Como Funciona
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Processo simples e seguro para resultados perfeitos
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {passos.map((passo, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-white text-2xl font-bold shadow-gold">
                    {passo.numero}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-gold mb-2">
                    {passo.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {passo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - PLANOS */}
      <section className="py-20 px-10 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script text-gold mb-4">
              Nossos Planos
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Escolha o plano ideal para suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {planos.map((plano, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden ${
                  plano.destaque 
                    ? 'border-gold border-4 shadow-gold scale-105' 
                    : 'border-border'
                }`}
              >
                {plano.destaque && (
                  <div className="absolute top-0 right-0 bg-gradient-gold text-white px-4 py-1 text-sm font-semibold">
                    MAIS POPULAR
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-10">
                  <CardTitle className="text-3xl text-gold mb-4">
                    {plano.nome}
                  </CardTitle>
                  <div className="space-y-1">
                    <div className="text-5xl font-bold text-gold">
                      R$ {plano.preco}
                    </div>
                    <p className="text-sm text-foreground/60">por mês</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plano.itens.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/agendamento" className="w-full">
                    <Button 
                      variant={plano.destaque ? "cta" : "outline"}
                      className="w-full"
                    >
                      ESCOLHER PLANO
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO FAQ */}
      <section className="py-20 px-10 bg-champagne">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script text-gold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:text-gold text-lg font-semibold py-6">
                    {faq.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
