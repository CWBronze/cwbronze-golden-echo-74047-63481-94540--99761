import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface OpcaoTempo {
  tempo: number;
  preco: string;
}

interface SessaoIndividualSelectorProps {
  equipamentoNome: string;
  opcoes: OpcaoTempo[];
  onConfirm: (tempo: number, preco: string) => void;
}

const SessaoIndividualSelector = ({ equipamentoNome, opcoes, onConfirm }: SessaoIndividualSelectorProps) => {
  const [tempoSelecionado, setTempoSelecionado] = useState<string>("");

  const handleConfirm = () => {
    if (tempoSelecionado) {
      const opcaoSelecionada = opcoes.find(op => op.tempo.toString() === tempoSelecionado);
      if (opcaoSelecionada) {
        onConfirm(opcaoSelecionada.tempo, opcaoSelecionada.preco);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Escolha a duração da sua sessão:</h3>
        <p className="text-sm text-foreground/70 mb-4">{equipamentoNome}</p>
      </div>

      <RadioGroup value={tempoSelecionado} onValueChange={setTempoSelecionado}>
        <div className="space-y-3">
          {opcoes.map((opcao) => (
            <div
              key={opcao.tempo}
              className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                tempoSelecionado === opcao.tempo.toString()
                  ? 'border-gold bg-gold/10'
                  : 'border-border hover:border-gold/50'
              }`}
              onClick={() => setTempoSelecionado(opcao.tempo.toString())}
            >
              <RadioGroupItem value={opcao.tempo.toString()} id={`tempo-${opcao.tempo}`} />
              <Label
                htmlFor={`tempo-${opcao.tempo}`}
                className="flex-1 flex items-center justify-between cursor-pointer"
              >
                <span className="font-medium text-foreground">
                  {opcao.tempo} minutos
                </span>
                <span className="text-gold font-bold">
                  R$ {opcao.preco}
                </span>
              </Label>
              {tempoSelecionado === opcao.tempo.toString() && (
                <Check className="w-5 h-5 text-gold" />
              )}
            </div>
          ))}
        </div>
      </RadioGroup>

      <Button
        variant="cta"
        size="lg"
        className="w-full"
        disabled={!tempoSelecionado}
        onClick={handleConfirm}
      >
        CONFIRMAR E PROSSEGUIR
      </Button>
    </div>
  );
};

export default SessaoIndividualSelector;
