import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Resultados = () => {
  const transformations = [
    { before: "Antes 1", after: "Depois 1", caption: "Fototipo III - 4 semanas" },
    { before: "Antes 2", after: "Depois 2", caption: "Fototipo IV - 3 semanas" },
    { before: "Antes 3", after: "Depois 3", caption: "Fototipo II - 5 semanas" },
    { before: "Antes 4", after: "Depois 4", caption: "Fototipo V - 6 semanas" },
    { before: "Antes 5", after: "Depois 5", caption: "Fototipo III - 4 semanas" },
    { before: "Antes 6", after: "Depois 6", caption: "Fototipo IV - 5 semanas" },
  ];

  const stats = [
    { number: "5000+", label: "Clientes Satisfeitos" },
    { number: "98%", label: "Taxa de Aprovação" },
    { number: "10", label: "Anos de Experiência" },
    { number: "100%", label: "Seguro e Certificado" },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Experiência incrível! O resultado superou todas as minhas expectativas. A equipe é super profissional e atenciosa.",
      rating: 5,
    },
    {
      name: "João Santos",
      text: "Fiquei impressionado com a qualidade do serviço. O bronze ficou perfeito e natural. Recomendo!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Melhor decisão que tomei! A transformação foi incrível e me sinto muito mais confiante.",
      rating: 5,
    },
    {
      name: "Pedro Oliveira",
      text: "Atendimento excepcional do início ao fim. Resultado impecável e duradouro.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-bronze/20 via-gold/10 to-bronze/20 mt-0 pt-24 pb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEQUE1MjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-script text-5xl md:text-7xl text-gold mb-6 animate-fade-in">
            Resultados Reais
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto animate-fade-in">
            A Transformação de Nossos Clientes
          </p>
        </div>
      </section>

      <main className="flex-1">
        {/* Galeria Antes/Depois */}
        <section className="py-20 px-10 bg-background">
          <div className="container mx-auto">
            <h2 className="font-script text-4xl md:text-5xl text-gold text-center mb-16">
              Transformações
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
              {transformations.map((item, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                  <div className="relative h-[500px]">
                    <div className="absolute inset-0 grid grid-cols-2">
                      <div className="bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center">
                        <span className="text-muted-foreground text-lg">Antes</span>
                      </div>
                      <div className="bg-gradient-to-br from-bronze/30 to-gold/20 flex items-center justify-center">
                        <span className="text-gold text-lg">Depois</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-card text-center">
                    <p className="text-sm font-medium text-foreground">{item.caption}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="py-20 px-10 bg-gradient-to-r from-bronze via-gold to-bronze">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 px-10 bg-background">
          <div className="container mx-auto">
            <h2 className="font-script text-4xl md:text-5xl text-gold text-center mb-16">
              O Que Dizem Nossos Clientes
            </h2>
            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <Card className="p-8 md:p-12 text-center bg-card/50 backdrop-blur">
                        <div className="mb-6">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bronze to-gold mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {testimonial.name}
                          </h3>
                          <div className="flex justify-center gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                            ))}
                          </div>
                        </div>
                        <div className="relative">
                          <span className="text-gold text-6xl absolute -top-6 -left-4 opacity-20">"</span>
                          <p className="text-foreground/80 text-lg leading-relaxed relative z-10">
                            {testimonial.text}
                          </p>
                          <span className="text-gold text-6xl absolute -bottom-10 -right-4 opacity-20">"</span>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-gold text-gold hover:bg-gold hover:text-white" />
                <CarouselNext className="border-gold text-gold hover:bg-gold hover:text-white" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-10 bg-gradient-to-br from-bronze/10 via-gold/10 to-bronze/10">
          <div className="container mx-auto text-center">
            <h2 className="font-script text-4xl md:text-5xl text-gold mb-8">
              Seja o Próximo Case de Sucesso
            </h2>
            <Link to="/agendamento">
              <Button variant="cta" size="lg" className="text-lg px-12 py-6">
                AGENDAR SESSÃO
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resultados;
