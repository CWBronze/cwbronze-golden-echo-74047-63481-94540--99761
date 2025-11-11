import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface OpcaoServico {
  nome: string;
  preco: string;
}

interface ServicoSelectorProps {
  servicoNome: string;
  descricao: string;
  opcoes: OpcaoServico[];
  onConfirm: (servicoEscolhido: string, preco: string) => void;
}

const ServicoSelector = ({ servicoNome, descricao, opcoes, onConfirm }: ServicoSelectorProps) => {
  const [servicoSelecionado, setServicoSelecionado] = useState<string>("");

  const handleConfirm = () => {
    if (servicoSelecionado) {
      const opcaoSelecionada = opcoes.find(op => op.nome === servicoSelecionado);
      if (opcaoSelecionada) {
        onConfirm(opcaoSelecionada.nome, opcaoSelecionada.preco);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{servicoNome}</h3>
        <p className="text-sm text-foreground/70 mb-4">{descricao}</p>
      </div>

      <RadioGroup value={servicoSelecionado} onValueChange={setServicoSelecionado}>
        <div className="space-y-3">
          {opcoes.map((opcao) => (
            <div
              key={opcao.nome}
              className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                servicoSelecionado === opcao.nome
                  ? 'border-gold bg-gold/10'
                  : 'border-border hover:border-gold/50'
              }`}
              onClick={() => setServicoSelecionado(opcao.nome)}
            >
              <RadioGroupItem value={opcao.nome} id={`servico-${opcao.nome}`} />
              <Label
                htmlFor={`servico-${opcao.nome}`}
                className="flex-1 flex items-center justify-between cursor-pointer"
              >
                <span className="font-medium text-foreground text-sm">
                  {opcao.nome}
                </span>
                <span className="text-gold font-bold">
                  {opcao.preco}
                </span>
              </Label>
              {servicoSelecionado === opcao.nome && (
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
        disabled={!servicoSelecionado}
        onClick={handleConfirm}
      >
        CONFIRMAR E PROSSEGUIR
      </Button>
    </div>
  );
};

export default ServicoSelector;
