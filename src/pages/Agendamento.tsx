import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";

const Agendamento = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-32">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-script text-5xl md:text-6xl text-gold">
              Agende sua Sessão
            </h1>
            <p className="text-lg text-foreground/80">
              Escolha a melhor data e horário para sua transformação.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-soft p-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <Input placeholder="Seu nome" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <Input type="tel" placeholder="(11) 99999-9999" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Data Preferida</label>
                <Input type="date" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Horário Preferido</label>
                <Input type="time" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Serviço</label>
                <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option>Bronzeamento Natural</option>
                  <option>Bronzeamento Express</option>
                  <option>Análise de Pele</option>
                  <option>Pacote Premium</option>
                </select>
              </div>
            </div>

            <Button variant="cta" size="lg" className="w-full gap-2">
              <Calendar className="w-5 h-5" />
              CONFIRMAR AGENDAMENTO
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agendamento;
