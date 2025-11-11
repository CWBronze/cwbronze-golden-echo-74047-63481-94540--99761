import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { X, User, Phone, Mail, FileText, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (formData?: any) => void;
  source: string; // "agendar", "analise", "servico_yellow", etc.
  servicoInfo?: { nome: string; tempo?: number; preco?: string };
}

const LeadCaptureModal = ({ isOpen, onClose, onSuccess, source, servicoInfo }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    termsAccepted: false,
    promotionsAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome completo é obrigatório";
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else if (!/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(formData.telefone.replace(/\s/g, ""))) {
      newErrors.telefone = "Telefone inválido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.termsAccepted) {
      newErrors.terms = "Você deve aceitar os termos para continuar";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Integração com Google Sheets via Google Apps Script
      const scriptUrl = "https://script.google.com/macros/s/AKfycbyKLZuOID5St8d6xvgRx60z-VXKfd2swzRXHA386GfC-6ln242fsZOpE6gdcqntcxu4/exec";
      
      const payload = {
        timestamp: new Date().toISOString(),
        nome: formData.nome,
        telefone: formData.telefone,
        email: formData.email,
        termos: formData.termsAccepted ? "Sim" : "Não",
        promocoes: formData.promotionsAccepted ? "Sim" : "Não",
        origem: source,
      };

      // Enviar para Google Sheets
      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Como é no-cors, não podemos ler a resposta, mas assumimos sucesso
      console.log("Lead capturado:", payload);
      
      // Sucesso
      onSuccess(formData);
      onClose();
      
      // Reset form
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        termsAccepted: false,
        promotionsAccepted: false,
      });
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      alert("Erro ao enviar dados. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (value: string) => {
    // Formatar telefone automaticamente
    let formatted = value.replace(/\D/g, "");
    if (formatted.length <= 11) {
      if (formatted.length > 6) {
        formatted = `(${formatted.slice(0, 2)}) ${formatted.slice(2, 7)}-${formatted.slice(7)}`;
      } else if (formatted.length > 2) {
        formatted = `(${formatted.slice(0, 2)}) ${formatted.slice(2)}`;
      }
    }
    setFormData({ ...formData, telefone: formatted });
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h3 className="text-2xl font-serif text-gray-800">
              Quase lá!
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Preencha seus dados para continuar
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            type="button"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Nome */}
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

          {/* Telefone */}
          <div>
            <Label htmlFor="telefone" className="text-gray-700 font-medium mb-2 block">
              Telefone *
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="telefone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.telefone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className={`pl-10 ${errors.telefone ? "border-red-500" : ""}`}
                maxLength={15}
              />
            </div>
            {errors.telefone && (
              <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>
            )}
          </div>

          {/* E-mail */}
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

          {/* Checkboxes */}
          <div className="space-y-4 pt-4 border-t">
            {/* Termos - Obrigatório */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, termsAccepted: checked as boolean })
                }
                className="mt-1"
              />
              <div className="flex-1">
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-700 cursor-pointer leading-relaxed"
                >
                  Aceito os{" "}
                  <a
                    href="/termos"
                    target="_blank"
                    className="text-primary hover:underline font-medium"
                  >
                    Termos de Agendamento e Cancelamento
                  </a>{" "}
                  *
                </label>
              </div>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms}</p>
            )}

            {/* Promoções - Opcional */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="promotions"
                checked={formData.promotionsAccepted}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, promotionsAccepted: checked as boolean })
                }
                className="mt-1"
              />
              <label
                htmlFor="promotions"
                className="text-sm text-gray-700 cursor-pointer leading-relaxed"
              >
                Desejo receber promoções da CWBronze
              </label>
            </div>
          </div>

          <p className="text-xs text-gray-500 pt-2">
            * Campos obrigatórios
          </p>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="cta"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              "Continuar"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
