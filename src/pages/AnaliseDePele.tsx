import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import ResultadoAnaliseModal from "@/components/ResultadoAnaliseModal";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Eye, 
  Palette, 
  Sparkles, 
  Sun, 
  Droplet, 
  Calendar, 
  AlertCircle,
  Award,
  Info,
  ChevronRight
} from "lucide-react";
import ModalInfo from "@/components/ModalInfo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Tipos de dados
interface Question {
  id: number;
  title: string;
  icon: any;
  options: {
    text: string;
    points: number;
  }[];
}

interface FototipoResult {
  type: string;
  name: string;
  description: string;
  recommendations: string;
  color: string;
}

// Perguntas do questionário
const questions: Question[] = [
  {
    id: 1,
    title: "Qual é a cor natural do seu cabelo?",
    icon: User,
    options: [
      { text: "Loiro claro ou ruivo", points: 1 },
      { text: "Loiro escuro ou castanho claro", points: 2 },
      { text: "Castanho médio", points: 3 },
      { text: "Castanho escuro", points: 4 },
      { text: "Preto", points: 5 }
    ]
  },
  {
    id: 2,
    title: "Qual é a cor natural dos seus olhos?",
    icon: Eye,
    options: [
      { text: "Azul, cinza ou verde claro", points: 1 },
      { text: "Verde, cinza ou azul escuro", points: 2 },
      { text: "Castanho claro ou mel", points: 3 },
      { text: "Castanho escuro", points: 4 },
      { text: "Preto", points: 5 }
    ]
  },
  {
    id: 3,
    title: "Qual é a cor natural da sua pele (sem bronzeado)?",
    icon: Palette,
    options: [
      { text: "Muito clara, branca rosada", points: 1 },
      { text: "Clara, bege claro", points: 2 },
      { text: "Média, bege dourado", points: 3 },
      { text: "Morena clara, bege escuro", points: 4 },
      { text: "Morena escura ou negra", points: 5 }
    ]
  },
  {
    id: 4,
    title: "Você tem sardas em áreas expostas ao sol?",
    icon: Sparkles,
    options: [
      { text: "Muitas sardas", points: 1 },
      { text: "Algumas sardas", points: 2 },
      { text: "Poucas sardas", points: 3 },
      { text: "Raras sardas", points: 4 },
      { text: "Nenhuma sarda", points: 5 }
    ]
  },
  {
    id: 5,
    title: "Como sua pele reage após 30 minutos de exposição solar (sem proteção)?",
    icon: Sun,
    options: [
      { text: "Fica vermelha, sensível", points: 1 },
      { text: "Fica levemente avermelhada", points: 2 },
      { text: "Bronzeia levemente", points: 3 },
      { text: "Bronzeia facilmente", points: 4 },
      { text: "Bronzeia muito facilmente", points: 5 }
    ]
  },
  {
    id: 6,
    title: "Como sua pele reage após uma semana de exposição solar?",
    icon: Droplet,
    options: [
      { text: "Descama, não bronzeia", points: 1 },
      { text: "Descama um pouco, bronzeia levemente", points: 2 },
      { text: "Bronzeia moderadamente", points: 3 },
      { text: "Não descama, bronzeia bem", points: 4 },
      { text: "Bronzeia intensamente", points: 5 }
    ]
  },
  {
    id: 7,
    title: "Com que frequência você se bronzeia?",
    icon: Calendar,
    options: [
      { text: "Nunca bronzeio, sou muito sensível", points: 1 },
      { text: "Raramente bronzeio", points: 2 },
      { text: "Às vezes bronzeio", points: 3 },
      { text: "Frequentemente bronzeio", points: 4 },
      { text: "Sempre bronzeio facilmente", points: 5 }
    ]
  },
  {
    id: 8,
    title: "Quão sensível é sua pele ao sol?",
    icon: AlertCircle,
    options: [
      { text: "Extremamente sensível", points: 1 },
      { text: "Muito sensível", points: 2 },
      { text: "Moderadamente sensível", points: 3 },
      { text: "Pouco sensível", points: 4 },
      { text: "Não é sensível", points: 5 }
    ]
  }
];

// Resultados dos fototipos
const fototipos: { [key: string]: FototipoResult } = {
  "I": {
    type: "I",
    name: "Pele Muito Clara",
    description: "Pele muito clara, cabelos ruivos ou loiros, olhos claros. Muito sensível ao sol, bronzeia com dificuldade.",
    recommendations: "Requer cuidados extremos. Recomendamos sessões curtas e supervisionadas.",
    color: "bg-red-100 border-red-300"
  },
  "II": {
    type: "II",
    name: "Pele Clara",
    description: "Pele clara, cabelos loiros ou castanho claro. Sensível ao sol, bronzeia gradualmente.",
    recommendations: "Necessita atenção especial. Sessões iniciais devem ser breves.",
    color: "bg-orange-100 border-orange-300"
  },
  "III": {
    type: "III",
    name: "Pele Média Clara",
    description: "Pele média, cabelos castanhos. Moderadamente sensível, bronzeia gradualmente.",
    recommendations: "Bom candidato para bronzeamento artificial com protocolo adequado.",
    color: "bg-yellow-100 border-yellow-300"
  },
  "IV": {
    type: "IV",
    name: "Pele Média Escura",
    description: "Pele morena clara, cabelos castanho escuro. Pouco sensível, bronzeia facilmente.",
    recommendations: "Excelente candidato! Bronzeia com facilidade e segurança.",
    color: "bg-amber-100 border-amber-300"
  },
  "V": {
    type: "V",
    name: "Pele Escura",
    description: "Pele morena escura, cabelos pretos. Baixa sensibilidade, bronzeia muito facilmente.",
    recommendations: "Ótimo para bronzeamento artificial. Resultados rápidos e duradouros.",
    color: "bg-brown-100 border-brown-300"
  },
  "VI": {
    type: "VI",
    name: "Pele Negra",
    description: "Pele negra, cabelos pretos. Mínima sensibilidade, bronzeia profundamente.",
    recommendations: "Ideal para bronzeamento artificial intenso com resultados excepcionais.",
    color: "bg-gray-700 border-gray-900 text-white"
  }
};

const AnaliseDePele = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<FototipoResult | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(true);
  const [showResultadoModal, setShowResultadoModal] = useState(false);
  const navigate = useNavigate();

  // Scroll para o topo quando a página carregar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleStartClick = () => {
    // setShowLeadModal(true); // Desabilitado a pedido do usuário. O modal agora só abrirá ao clicar no botão 'Agendar Avaliação' no final.
    setStarted(true); // Inicia o questionário diretamente
  };

  const handleLeadSuccess = () => {
    setStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const total = finalAnswers.reduce((sum, points) => sum + points, 0);
    const average = total / finalAnswers.length;

    let fototipoType: string;
    if (average <= 1.5) fototipoType = "I";
    else if (average <= 2.5) fototipoType = "II";
    else if (average <= 3.5) fototipoType = "III";
    else if (average <= 4.0) fototipoType = "IV";
    else if (average <= 4.5) fototipoType = "V";
    else fototipoType = "VI";

    const resultadoFototipo = fototipos[fototipoType];
    setResult(resultadoFototipo);
    
    // Abrir modal de resultado após calcular
    setTimeout(() => {
      setShowResultadoModal(true);
    }, 500);
  };

  const handleEnviarParaServicos = () => {
    // Salvar resultado no sessionStorage para usar na página de serviços
    if (result) {
      sessionStorage.setItem('analise_pele_resultado', JSON.stringify({
        fototipo: result.type,
        nome: result.name,
        descricao: result.description,
        recomendacoes: result.recommendations
      }));
    }
    // Redirecionar para página de serviços
    navigate('/servicos');
  };

  const handleReset = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Modal Informativo */}
      <ModalInfo 
        isOpen={showInfoModal} 
        onClose={() => setShowInfoModal(false)} 
        title="Análise de Pele"
        description="Complete o questionário para descobrir seu fototipo e receber recomendações personalizadas de bronzeamento."
      />

      {/* Modal de Captura de Leads */}
      <LeadCaptureModal
        isOpen={showLeadModal}
        onClose={() => setShowLeadModal(false)}
        onSuccess={handleLeadSuccess}
        source="analise"
      />

      {/* HERO SECTION */}
      {!started && !result && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Imagem única */}
          <div className="absolute inset-0">
            <img 
              src="/fototipoherosite.jpeg" 
              alt="Escala de Fitzpatrick - 6 Fototipos"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
          
          <div className="relative z-10 container mx-auto px-6 py-20 text-center">
            <div className="text-center mb-8">
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">
                Descubra Seu Fototipo
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-4 drop-shadow-md">
                Questionário científico baseado na Escala de Fitzpatrick
              </p>
              
              {/* Tooltip com informações científicas */}
              
            </div>

            <Button 
              onClick={handleStartClick}
              variant="cta"
              size="lg"
              className="text-lg px-12 py-6 bg-primary text-white hover:bg-primary/90 shadow-2xl"
            >
              INICIAR ANÁLISE
            </Button>
          </div>
        </section>
      )}

      {/* QUESTIONÁRIO */}
      {started && !result && (
        <section className="flex-1 py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6 max-w-3xl">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-600">
                  Pergunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-gold transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">{
                (() => {
                  const IconComponent = questions[currentQuestion].icon;
                  return IconComponent ? <IconComponent className="w-12 h-12 text-primary" /> : null;
                })()
              }  <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
                  {questions[currentQuestion].title}
                </h2>
              </div>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.points)}
                    className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-gray-700 group-hover:text-primary font-medium">
                        {option.text}
                      </span>
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RESULTADO */}
      {result && (
        <section className="flex-1 py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <Award className="w-20 h-20 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
                Seu Resultado
              </h2>
              <p className="text-lg text-gray-600">
                Análise completa baseada em suas respostas
              </p>
            </div>

            {/* Result Card */}
            <div className={`rounded-3xl shadow-2xl p-8 md:p-12 border-4 ${result.color} mb-8`}>
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-3 bg-white rounded-full shadow-lg mb-4">
                  <span className="text-3xl font-bold text-primary">Fototipo {result.type}</span>
                </div>
                <h3 className="text-3xl font-serif mb-4">{result.name}</h3>
                <p className="text-lg text-gray-700 mb-6">{result.description}</p>
                <div className="bg-white/80 rounded-xl p-6">
                  <p className="font-semibold text-gray-800 mb-2">Recomendações:</p>
                  <p className="text-gray-700">{result.recommendations}</p>
                </div>
              </div>
            </div>

            {/* Info Box - Todos os Fototipos */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h4 className="text-2xl font-serif text-gray-800 mb-6 text-center">
                Conheça Todos os Fototipos
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.values(fototipos).map((fototipo) => (
                  <div 
                    key={fototipo.type}
                    className={`p-4 rounded-xl border-2 ${fototipo.color}`}
                  >
                    <div className="font-bold mb-1">Fototipo {fototipo.type}</div>
                    <div className="text-sm font-medium mb-2">{fototipo.name}</div>
                    <div className="text-xs opacity-90">{fototipo.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aviso sobre Anamnese e Personal Bronze */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 mb-8">
              <h4 className="text-2xl font-serif text-blue-900 mb-4 flex items-center gap-2">
                <Info className="w-6 h-6" />
                Importante: Pré-Avaliação
              </h4>
              <div className="space-y-4 text-blue-800">
                <p className="text-lg">
                  Esta análise de pele é uma <strong>pré-avaliação inicial</strong> baseada na Escala de Fitzpatrick.
                </p>
                <p>
                  No dia do seu atendimento presencial, você receberá:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Anamnese Completa:</strong> Questionário detalhado sobre sua saúde, histórico e objetivos</li>
                  <li><strong>Avaliação Profissional:</strong> Análise presencial realizada por nossas <strong>Personais Bronze certificadas</strong></li>
                  <li><strong>Protocolo Personalizado:</strong> Plano de sessões adaptado especificamente para você</li>
                </ul>
                <p className="font-semibold text-blue-900 bg-blue-100 p-4 rounded-lg">
                  👩‍⚕️ Nossa equipe de Personais Bronze está preparada para garantir sua segurança e os melhores resultados!
                </p>
              </div>
            </div>

            {/* Card Responsabilidades - CORRIGIDO */}
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 mb-8">
              <h4 className="text-2xl font-serif text-red-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                Responsabilidades e Obrigações do Cliente
              </h4>
              <div className="space-y-4 text-red-800">
                <div>
                  <p className="font-semibold mb-2">6.1. Informações de Saúde</p>
                  <p className="mb-2">Você <strong>deve informar</strong> à CWBronze sobre:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Uso de medicamentos fotossensibilizantes</li>
                    <li>Histórico de câncer de pele ou doenças dermatológicas</li>
                    <li>Gravidez ou amamentação</li>
                    <li>Alergias ou sensibilidades cutâneas</li>
                    <li>Qualquer condição médica relevante</li>
                  </ul>
                </div>
                <p className="font-semibold text-red-900">
                  A omissão de informações de saúde pode resultar em riscos à sua segurança e isentar a CWBronze de responsabilidade.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleReset}
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                Refazer Análise
              </Button>
              <Button 
                onClick={() => setShowLeadModal(true)}
                variant="cta"
                size="lg"
                className="text-lg px-8"
              >
                Agendar Avaliação
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Modal de Resultado da Análise */}
      {result && (
        <ResultadoAnaliseModal
          isOpen={showResultadoModal}
          onClose={() => setShowResultadoModal(false)}
          resultado={{
            fototipo: result.type,
            nome: result.name,
            descricao: result.description,
            recomendacoes: result.recommendations
          }}
          onEnviarParaServicos={handleEnviarParaServicos}
        />
      )}

      <Footer />
    </div>
  );
};

export default AnaliseDePele;
