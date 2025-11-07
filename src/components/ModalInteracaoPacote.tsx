import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Zap } from "lucide-react";

interface ModalInteracaoPacoteProps {
  isOpen: boolean;
  onClose: () => void;
  pacote: { nome: string; origem: string; tempo?: number; preco?: string; fototipo?: string } | null;
  onNewClient: () => void;
}

const ModalInteracaoPacote = ({ isOpen, onClose, pacote, onNewClient }: ModalInteracaoPacoteProps) => {
  console.log('ModalInteracaoPacote renderizado:', { isOpen, pacote });
  const whatsappNumber = "5541998661792";
  const pacoteNome = pacote?.nome || "";
  const tempo = pacote?.tempo;
  const preco = pacote?.preco;
  const fototipo = pacote?.fototipo;
  
  let whatsappMessage = `Olá, CWBronze!`;
  
  if (fototipo) {
    whatsappMessage += `\n\n📊 ANÁLISE DE PELE\nFototipo: ${fototipo}\n`;
  }
  
  whatsappMessage += `\n🎯 SERVIÇO DE INTERESSE\n${pacoteNome}`;
  
  if (tempo) {
    whatsappMessage += `\nDuração: ${tempo} minutos`;
  }
  
  if (preco) {
    whatsappMessage += `\nValor: R$ ${preco}`;
  }
  
  whatsappMessage += `\n\nJá sou cliente e gostaria de agendar.`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-script text-gold">Interesse no Serviço</DialogTitle>
          <DialogDescription>
            Você demonstrou interesse em <strong>{pacoteNome}</strong>. Para um atendimento personalizado, gostaríamos de saber:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 pt-4">
          
          {/* Opção 1: Já sou cliente */}
          <Link 
            to={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <Button variant="outline" className="w-full h-12 text-lg gap-2 border-champagne bg-champagne/30 text-foreground hover:bg-champagne/50">
              <Zap className="w-5 h-5" />
              SIM, JÁ SOU CLIENTE
            </Button>
          </Link>

          {/* Opção 2: Novo cliente */}
          <Button 
            variant="secondary" 
            className="w-full h-12 text-lg gap-2 bg-bronze hover:bg-bronze/90 text-white"
            onClick={onNewClient}
          >
            <User className="w-5 h-5" />
            SOU UM NOVO CLIENTE
          </Button>

        </div>
        <p className="text-sm text-center text-gray-500 pt-2">
          Ao clicar em "Novo Cliente", você será direcionado para o formulário de agendamento.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ModalInteracaoPacote;
