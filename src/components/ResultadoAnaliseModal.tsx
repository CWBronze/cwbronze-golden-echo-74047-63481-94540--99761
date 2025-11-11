import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Send, Download, User, Phone, Mail } from "lucide-react";
import { useState } from "react";

interface ResultadoAnaliseModalProps {
  isOpen: boolean;
  onClose: () => void;
  resultado: {
    fototipo: string;
    nome: string;
    descricao: string;
    recomendacoes: string;
  };
  onEnviarParaServicos: () => void;
}

const ResultadoAnaliseModal = ({ 
  isOpen, 
  onClose, 
  resultado,
  onEnviarParaServicos 
}: ResultadoAnaliseModalProps) => {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const [dadosPreenchidos, setDadosPreenchidos] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp é obrigatório";
    } else if (!/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(formData.whatsapp.replace(/\s/g, ""))) {
      newErrors.whatsapp = "WhatsApp inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (value: string) => {
    let formatted = value.replace(/\D/g, "");
    if (formatted.length <= 11) {
      if (formatted.length > 6) {
        formatted = `(${formatted.slice(0, 2)}) ${formatted.slice(2, 7)}-${formatted.slice(7)}`;
      } else if (formatted.length > 2) {
        formatted = `(${formatted.slice(0, 2)}) ${formatted.slice(2)}`;
      }
    }
    setFormData({ ...formData, whatsapp: formatted });
  };

  const handleReceberPDF = () => {
    if (validateForm()) {
      setDadosPreenchidos(true);
      setMostrarOpcoes(true);
    }
  };

  const handleApenasVer = () => {
    onClose();
  };

  const handleBaixarPDF = () => {
    // Gerar conteúdo do PDF
    const conteudo = `
═══════════════════════════════════════
    CWBRONZE ESTHETIC LTDA
    Análise de Pele - Escala Fitzpatrick
═══════════════════════════════════════

RESULTADO DA ANÁLISE
───────────────────────────────────────
Fototipo: ${resultado.fototipo}
Classificação: ${resultado.nome}

DESCRIÇÃO
───────────────────────────────────────
${resultado.descricao}

RECOMENDAÇÕES
───────────────────────────────────────
${resultado.recomendacoes}

INFORMAÇÕES DE CONTATO
───────────────────────────────────────
CWBronze Esthetic Ltda
WhatsApp: (41) 99866-1792
Site: www.cwbronze.com.br

IMPORTANTE
───────────────────────────────────────
Esta análise é apenas uma orientação inicial.
Para um atendimento personalizado e seguro,
agende uma avaliação presencial conosco.

═══════════════════════════════════════
Data: ${new Date().toLocaleDateString('pt-BR')}
═══════════════════════════════════════
`;

    // Criar blob e download
    const blob = new Blob([conteudo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analise-pele-cwbronze-fototipo-${resultado.fototipo}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert("Seu resultado foi baixado! Você pode consultar a qualquer momento.");
  };

  const handleEnviarParaCWBronze = () => {
    onClose();
    onEnviarParaServicos();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-script text-gold">
            Análise Concluída!
          </DialogTitle>
          <DialogDescription>
            Seu fototipo foi identificado como <strong>Fototipo {resultado.fototipo} - {resultado.nome}</strong>
          </DialogDescription>
        </DialogHeader>

        {!mostrarOpcoes ? (
          <div className="space-y-6 pt-4">
            <div className="bg-gold/10 rounded-lg p-6 text-center">
              <FileText className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Gostaria de receber seu resultado?</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Preencha seus dados e baixe o arquivo com seu resultado da análise de pele para consultar sempre que precisar!
              </p>
            </div>

            {/* Formulário de Dados */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="nome" className="text-gray-700 font-medium mb-2 block">
                  Nome Completo *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className={`pl-10 ${errors.nome ? "border-red-500" : ""}`}
                  />
                </div>
                {errors.nome && (
                  <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                  E-mail *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="whatsapp" className="text-gray-700 font-medium mb-2 block">
                  WhatsApp *
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.whatsapp}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className={`pl-10 ${errors.whatsapp ? "border-red-500" : ""}`}
                    maxLength={15}
                  />
                </div>
                {errors.whatsapp && (
                  <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-champagne bg-champagne/30 text-foreground hover:bg-champagne/50"
                onClick={handleReceberPDF}
              >
                <FileText className="w-5 h-5 mr-2" />
                SIM, QUERO RECEBER
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-bronze hover:bg-bronze/90 text-white"
                onClick={handleApenasVer}
              >
                NÃO, APENAS VER
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 pt-4">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <p className="text-sm text-green-800">
                ✅ Pronto! Agora escolha como deseja receber:
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-champagne bg-champagne/30 text-foreground hover:bg-champagne/50"
                onClick={handleBaixarPDF}
              >
                <Download className="w-5 h-5 mr-2" />
                BAIXAR RESULTADO
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-bronze hover:bg-bronze/90 text-white"
                onClick={handleEnviarParaCWBronze}
              >
                <Send className="w-5 h-5 mr-2" />
                ENVIAR PARA CWBRONZE E ESCOLHER SERVIÇO
              </Button>
            </div>

            <p className="text-xs text-center text-foreground/60">
              Ao enviar para CWBronze, você será direcionado para escolher o serviço de seu interesse
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ResultadoAnaliseModal;
