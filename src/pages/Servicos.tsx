import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ModalInteracaoPacote from "@/components/ModalInteracaoPacote";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import SessaoIndividualSelector from "@/components/SessaoIndividualSelector";
import ServicoSelector from "@/components/ServicoSelector";
import { Link } from "react-router-dom";
import { Check, AlertCircle, Clock, Shield, Heart, Droplets, X, Sparkles, Package, Award, TrendingUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { getSugestoesPorFototipo } from "@/utils/sugestoesPacotes";

const Servicos = () => {
  const [modalAberto, setModalAberto] = useState<string | null>(null);
  const [pacoteInteracao, setPacoteInteracao] = useState<{ nome: string; origem: string; tempo?: number; preco?: string; fototipo?: string } | null>(null);
  const [showAgendamentoModal, setShowAgendamentoModal] = useState(false);
  const [modalSessaoIndividual, setModalSessaoIndividual] = useState<string | null>(null);
  const [modalServico, setModalServico] = useState<{ nome: string; descricao: string; itens: any[] } | null>(null);
  const [analiseResult, setAnaliseResult] = useState<any>(null);
  const [mostrarSugestoes, setMostrarSugestoes] = useState(false);

  // Verificar se há resultado de análise de pele
  useEffect(() => {
    const resultadoSalvo = sessionStorage.getItem('analise_pele_resultado');
    if (resultadoSalvo) {
      const resultado = JSON.parse(resultadoSalvo);
      setAnaliseResult(resultado);
      setMostrarSugestoes(true);
      // Scroll suave para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleAdquirirPacote = (pacoteNome: string, equipamentoNome: string) => {
    console.log('handleAdquirirPacote chamado:', { pacoteNome, equipamentoNome });
    setModalAberto(null); // Fecha o modal de detalhes do equipamento
    setTimeout(() => {
      console.log('Abrindo modal de interação...');
      setPacoteInteracao({ nome: pacoteNome, origem: `pacote_${equipamentoNome}` });
    }, 300); // Aguarda 300ms para garantir que o modal de detalhes seja fechado
  };

  const handleNewClient = () => {
    setPacoteInteracao(null); // Fecha o modal de interação
    setShowAgendamentoModal(true); // Abre o modal de agendamento
  };

  const equipamentos = [
    {
      id: "yellow",
      nome: "Ferrary Yellow",
      subtitulo: "Conforto Premium",
      preco30: "120",
      preco40: "140",
      tempo: "30 ou 40 minutos",
      image: "/ferrary_yellow.jpg",
      destaque: false,
      diferenciais: [
        "Cabine semi-aberta",
        "Ideal para claustrofóbicos",
        "Mesma potência da Red",
        "Tecnologia Ferrary original"
      ],
      descricao: "Equipamento com design aberto que oferece conforto excepcional para quem tem desconforto em espaços fechados, mantendo a mesma qualidade e eficiência.",
      pacotes: [
        {
          nome: "Pacote Básico (30 min)",
          sessoes: 4,
          tempo: 30,
          preco: 349,
          valorAvulso: 480,
          economia: 131,
          tipo: "basico"
        },
        {
          nome: "Pacote (40 min)",
          sessoes: 4,
          tempo: 40,
          preco: 460,
          valorAvulso: 560,
          economia: 100,
          tipo: "basico"
        },
        {
          nome: "Pacote Premium (10 Sessões)",
          sessoes: 10,
          tempo: 30,
          goldenGlow: 2,
          preco: 899,
          valorAvulso: 1270,
          economia: 371,
          tipo: "premium"
        }
      ]
    },
    {
      id: "red",
      nome: "Ferrary Red",
      subtitulo: "Clássico & Versátil",
      preco30: "120",
      preco40: "140",
      tempo: "30 ou 40 minutos",
      image: "/ferrary_red.jpg",
      destaque: true,
      diferenciais: [
        "Ideal para todos os fototipos",
        "Perfeita para iniciantes",
        "Bronzeado uniforme",
        "Tecnologia confiável"
      ],
      descricao: "Equipamento clássico e versátil, ideal para quem está começando ou busca um bronzeado gradual e natural. Indicado para todos os tipos de pele.",
      pacotes: [
        {
          nome: "Pacote Básico (30 min)",
          sessoes: 4,
          tempo: 30,
          preco: 349,
          valorAvulso: 480,
          economia: 131,
          tipo: "basico"
        },
        {
          nome: "Pacote (40 min)",
          sessoes: 4,
          tempo: 40,
          preco: 460,
          valorAvulso: 560,
          economia: 100,
          tipo: "basico"
        },
        {
          nome: "Pacote Premium (10 Sessões)",
          sessoes: 10,
          tempo: 30,
          goldenGlow: 2,
          preco: 899,
          valorAvulso: 1270,
          economia: 371,
          tipo: "premium"
        }
      ]
    },
    {
      id: "black",
      nome: "Ferrary Black",
      subtitulo: "Máxima Potência",
      preco20: "120",
      preco30: "140",
      preco40: "160",
      tempo: "20, 30 ou 40 minutos",
      image: "/ferrary_black_new.jpg",
      destaque: false,
      diferenciais: [
        "Dobro de potência",
        "Ideal para peles mais escuras",
        "Perfeito para quem já é bronzeado",
        "Resultados acelerados"
      ],
      descricao: "Equipamento de alta potência ideal para peles mais escuras e clientes que já possuem bronzeado. Oferece resultados mais rápidos e intensos com segurança.",
      avisoEspecial: "⚠️ Recomendado para peles mais escuras (fototipos IV-VI) e clientes já bronzeados",
      pacotes: [
        {
          nome: "Pacote (20 min)",
          sessoes: 4,
          tempo: 20,
          preco: 389,
          valorAvulso: 480,
          economia: 91,
          tipo: "basico"
        },
        {
          nome: "Pacote (30 min)",
          sessoes: 5,
          tempo: 30,
          preco: 589,
          valorAvulso: 700,
          economia: 111,
          tipo: "basico"
        },
        {
          nome: "Pacote (40 min)",
          sessoes: 5,
          tempo: 40,
          preco: 715,
          valorAvulso: 800,
          economia: 85,
          tipo: "basico"
        },
        {
          nome: "Pacote Premium (10 Sessões)",
          sessoes: 10,
          tempo: 30,
          goldenGlow: 2,
          preco: 1099,
          valorAvulso: 1470,
          economia: 371,
          tipo: "premium"
        }
      ]
    }
  ];

  const outrosServicos = [
    {
      nome: "Protocolos Exclusivos",
      descricao: "Tratamentos especializados para resultados superiores",
      itens: [
        { nome: "Golden Glow (Acelerador Premium)", preco: "R$ 35" },
        { nome: "Hidratação Pós-Bronze", preco: "R$ 40" },
        { nome: "Protocolo Anti-Idade + Bronze", preco: "R$ 80" }
      ]
    },
    {
      nome: "Banho de Lua",
      descricao: "Bronzeamento natural sem exposição solar",
      itens: [
        { nome: "Corpo Completo", preco: "R$ 150" },
        { nome: "Meio Corpo (pernas ou tronco)", preco: "R$ 90" },
        { nome: "Retoque/Manutenção", preco: "R$ 60" }
      ]
    },
    {
      nome: "Bronze Instantâneo",
      descricao: "Aplicação profissional com efeito imediato",
      itens: [
        { nome: "Corpo Completo", preco: "R$ 180" },
        { nome: "Meio Corpo", preco: "R$ 100" },
        { nome: "Pacote 3 Aplicações", preco: "R$ 450" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-0 pt-20">
        <div className="absolute inset-0">
          <img 
            src="/fotomarquinhaherosite.png" 
            alt="Bronzeamento com Marquinha"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="font-script text-6xl md:text-7xl">Nossos Serviços</h1>
          <p className="text-2xl md:text-3xl">Equipamentos Certificados • Protocolos Personalizados</p>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-10 py-20">
        {/* Banner de Sugestões da Análise de Pele */}
        {mostrarSugestoes && analiseResult && (
          <div className="bg-gradient-to-r from-gold/20 to-bronze/20 border-2 border-gold rounded-2xl p-8 mb-16 relative overflow-hidden">
            <button
              onClick={() => {
                setMostrarSugestoes(false);
                sessionStorage.removeItem('analise_pele_resultado');
              }}
              className="absolute top-4 right-4 text-foreground/50 hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <Award className="w-12 h-12 md:w-16 md:h-16 text-gold flex-shrink-0" />
              <div className="flex-1 w-full">
                <h3 className="text-xl md:text-2xl font-script text-gold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                  Sugestões Personalizadas para Você
                </h3>
                <p className="text-base md:text-lg mb-4">
                  Com base na sua análise de pele (<strong>Fototipo {analiseResult.fototipo} - {analiseResult.nome}</strong>), recomendamos:
                </p>
                
                <div className="bg-white/80 rounded-xl p-3 md:p-6 space-y-3 md:space-y-4">
                  {getSugestoesPorFototipo(analiseResult.fototipo).slice(0, 3).map((sugestao, idx) => (
                    <div key={idx} className={`p-3 md:p-4 rounded-lg ${
                      idx === 0 ? 'bg-gold/20 border-2 border-gold' : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm md:text-base ${
                          idx === 0 ? 'bg-gold text-white' : 'bg-gray-300 text-gray-700'
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base md:text-lg mb-1">
                            {sugestao.equipamento} - {sugestao.sessoes} sessões
                          </h4>
                          <p className="text-xs md:text-sm text-foreground/70 mb-2">
                            Tempo recomendado: <strong>{sugestao.tempoRecomendado}</strong>
                          </p>
                          <p className="text-xs md:text-sm text-foreground/80">
                            {sugestao.motivo}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-xs md:text-sm text-foreground/70 mt-3 md:mt-4">
                  👇 Role para baixo e escolha o equipamento e serviço que mais se adequa ao seu perfil!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Banner de Segurança */}
        <div className="bg-accent/30 border-l-4 border-gold p-6 rounded-lg mb-16 flex items-start gap-4">
          <Shield className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
          <div>
            <p className="text-lg">
              <strong className="text-gold">Equipamentos Ferrary rigorosamente inspecionados</strong> com laudos Espectrômetro e ART em conformidade com todas as leis e normas vigentes. Segurança comprovada para sua tranquilidade.
            </p>
          </div>
        </div>

        {/* Equipamentos Ferrary */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl text-gold mb-4">Equipamentos Ferrary</h2>
            <p className="text-xl text-foreground/70">Três opções certificadas para atender todos os perfis e necessidades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipamentos.map((equip) => (
              <Card 
                key={equip.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                  equip.destaque ? 'ring-2 ring-gold shadow-gold' : ''
                }`}
                onClick={() => setModalAberto(equip.id)}
              >
                {equip.destaque && (
                  <div className="absolute top-4 right-4 bg-gold text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={equip.image} 
                    alt={equip.nome}
                    className="w-full h-full object-contain transition-transform duration-500"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-gold">{equip.nome}</CardTitle>
                  <CardDescription className="text-base">{equip.subtitulo}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/70">{equip.descricao}</p>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Sessão Individual</p>
                    <div className="flex items-baseline gap-2">
                      {equip.preco20 && <span className="text-sm text-foreground/70">R$ {equip.preco20}</span>}
                      {equip.preco30 && <span className="text-sm text-foreground/70">R$ {equip.preco30}</span>}
                      {equip.preco40 && <span className="text-sm text-foreground/70">R$ {equip.preco40}</span>}
                    </div>
                    <p className="text-sm text-foreground/60">{equip.tempo}</p>
                  </div>

                  <ul className="space-y-2">
                    {equip.diferenciais.map((diff, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span>{diff}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex-col gap-3">
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalSessaoIndividual(equip.id);
                    }}
                  >
                    ADQUIRIR SESSÃO INDIVIDUAL
                  </Button>
                  <Button variant="secondary" className="w-full group bg-bronze hover:bg-bronze/90 text-white">
                    <Package className="w-4 h-4 mr-2" />
                    VER PACOTES DISPONÍVEIS
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Modal de Pacotes */}
        {equipamentos.map((equip) => (
          <Dialog key={`modal-${equip.id}`} open={modalAberto === equip.id} onOpenChange={() => setModalAberto(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl font-script text-gold">
                  Pacotes - {equip.nome}
                </DialogTitle>
                <DialogDescription className="text-base">
                  Economia garantida com nossos pacotes exclusivos
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Imagem do Equipamento */}
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img 
                    src={equip.image} 
                    alt={equip.nome}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Aviso Especial para Black */}
                {equip.avisoEspecial && (
                  <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">{equip.avisoEspecial}</p>
                  </div>
                )}

                {/* Grid de Pacotes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {equip.pacotes.map((pacote, idx) => (
                    <Card 
                      key={idx}
                      className={`${
                        pacote.tipo === 'premium' 
                          ? 'bg-gradient-to-br from-gold/20 to-bronze/20 border-gold/50 md:col-span-2' 
                          : 'bg-white'
                      }`}
                    >
                      <CardHeader>
                        <CardTitle className="text-xl text-gold flex items-center gap-2">
                          {pacote.tipo === 'premium' && <Sparkles className="w-5 h-5" />}
                          {pacote.nome}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <p className="font-semibold mb-2 text-sm">O que inclui:</p>
                          <ul className="space-y-1">
                            <li className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                              <span>{pacote.sessoes} sessões de bronzeamento artificial ({pacote.tempo} minutos cada)</span>
                            </li>
                            {pacote.goldenGlow && (
                              <li className="flex items-start gap-2 text-sm">
                                <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                <span>{pacote.goldenGlow} aplicações do protocolo exclusivo "Golden Glow"</span>
                              </li>
                            )}
                            <li className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                              <span>Protetor solar, ativador, acelerador e biquíni de fita</span>
                            </li>
                          </ul>
                        </div>

                        <div className="border-t pt-3">
                          <p className="text-sm font-semibold mb-1">Preço Final do Pacote:</p>
                          <p className="text-3xl font-bold text-gold">R$ {pacote.preco},00</p>
                        </div>

                        <div className="bg-white/70 p-3 rounded-lg text-sm">
                          <p className="font-semibold mb-1">Análise de Valor:</p>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-foreground/70">Valor avulso:</span>
                              <span className="font-semibold">R$ {pacote.valorAvulso},00</span>
                            </div>
                            <div className="flex justify-between text-gold font-bold">
                              <span>Economia Total:</span>
                              <span>R$ {pacote.economia},00</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-foreground/60">
                          <Clock className="w-3 h-3" />
                          <span>Validade: 90 dias</span>
                        </div>

                        {/* Botão de Ação */}
                        <Button 
                          variant="cta" 
                          size="lg" 
                          className="w-full mt-4"
                          onClick={() => handleAdquirirPacote(pacote.nome, equip.id)}
                        >
                          ADQUIRIR PACOTE
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </DialogContent>
	          </Dialog>
	        ))}
	
	        {/* Modais de Interação e Captura de Lead */}
        <ModalInteracaoPacote
          isOpen={!!pacoteInteracao}
          onClose={() => setPacoteInteracao(null)}
          pacote={pacoteInteracao}
          onNewClient={handleNewClient}
        />
	
        <LeadCaptureModal
          isOpen={showAgendamentoModal}
          onClose={() => setShowAgendamentoModal(false)}
          onSuccess={(dadosCliente) => {
            setShowAgendamentoModal(false);
            
            // Preparar mensagem completa para WhatsApp
            let mensagem = `Olá, CWBronze!\n\nSou um novo cliente e tenho interesse em:`;
            
            // Adicionar análise de pele se existir
            if (pacoteInteracao?.fototipo) {
              mensagem += `\n\n📊 ANÁLISE DE PELE\nFototipo: ${pacoteInteracao.fototipo}`;
            }
            
            if (pacoteInteracao) {
              mensagem += `\n\n🎯 SERVIÇO DE INTERESSE\n${pacoteInteracao.nome}`;
              if (pacoteInteracao.tempo) {
                mensagem += `\nDuração: ${pacoteInteracao.tempo} minutos`;
              }
              if (pacoteInteracao.preco) {
                mensagem += `\nValor: R$ ${pacoteInteracao.preco}`;
              }
            }
            
            if (dadosCliente) {
              mensagem += `\n\n👤 MEUS DADOS\nNome: ${dadosCliente.nome}\nTelefone: ${dadosCliente.telefone}\nE-mail: ${dadosCliente.email}`;
            }
            
            mensagem += `\n\nGostaria de agendar uma sessão.`;
            
            // Mostrar mensagem de feedback
            alert("Seu interesse foi registrado! Você será direcionado para nosso WhatsApp.");
            
            // Redirecionar para WhatsApp
            const whatsappUrl = `https://wa.me/5541998661792?text=${encodeURIComponent(mensagem)}`;
            window.open(whatsappUrl, '_blank');
          }}
          source={pacoteInteracao ? `${pacoteInteracao.origem}_novo` : "servicos_pacote_novo"}
          servicoInfo={pacoteInteracao ? { nome: pacoteInteracao.nome, tempo: pacoteInteracao.tempo, preco: pacoteInteracao.preco } : undefined}
        />
	
	        {/* Incluso em Todas as Sessões */}
        <section className="mb-20 bg-gradient-to-r from-gold/10 to-bronze/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gold text-center mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            Incluso em Todas as Sessões
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <Shield className="w-10 h-10 text-gold mx-auto" />
              <p className="font-medium">Protetor Solar Corporal</p>
            </div>
            <div className="space-y-2">
              <Heart className="w-10 h-10 text-gold mx-auto" />
              <p className="font-medium">Ativador de Marquinha</p>
            </div>
            <div className="space-y-2">
              <Droplets className="w-10 h-10 text-gold mx-auto" />
              <p className="font-medium">Acelerador de Bronze</p>
            </div>
            <div className="space-y-2">
              <Sparkles className="w-10 h-10 text-gold mx-auto" />
              <p className="font-medium">Biquíni de Fita (opcional)</p>
            </div>
          </div>
        </section>

        {/* Outros Serviços */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl text-gold mb-4">Outros Serviços</h2>
            <p className="text-xl text-foreground/70">Tratamentos complementares para resultados ainda melhores</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outrosServicos.map((servico, idx) => (
              <Card key={idx} className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gold">{servico.nome}</CardTitle>
                  <CardDescription>{servico.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {servico.itens.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                        <span className="text-sm">{item.nome}</span>
                        <span className="font-semibold text-gold">{item.preco}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    onClick={() => setModalServico(servico)}
                  >
                    ADQUIRIR SERVIÇO
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Tabelas de Tempo */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl text-gold mb-4">Tempo e Máquina Indicados</h2>
            <p className="text-xl text-foreground/70">Recomendações baseadas na Escala de Fitzpatrick para sua segurança</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-gold">Para Iniciantes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Fototipo</th>
                        <th className="text-left py-3 px-2">Ferrary Red</th>
                        <th className="text-left py-3 px-2">Ferrary Black</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-2 text-sm">I-II (Pele muito clara)</td>
                        <td className="py-3 px-2 text-sm">10/20 minutos</td>
                        <td className="py-3 px-2 text-sm">10 minutos</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-2 text-sm">III-IV (Pele média)</td>
                        <td className="py-3 px-2 text-sm">30/40 minutos</td>
                        <td className="py-3 px-2 text-sm">30 minutos</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 text-sm">V-VI (Pele escura)</td>
                        <td className="py-3 px-2 text-sm">30/40 minutos</td>
                        <td className="py-3 px-2 text-sm">30/40 minutos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-gold">Para Retoques/Manutenção</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Fototipo</th>
                        <th className="text-left py-3 px-2">Ferrary Red</th>
                        <th className="text-left py-3 px-2">Ferrary Black</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-2 text-sm">Peles claras a médias</td>
                        <td className="py-3 px-2 text-sm">30/40 min</td>
                        <td className="py-3 px-2 text-sm">30/40 min</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 text-sm">Peles morenas e negras</td>
                        <td className="py-3 px-2 text-sm">40 min</td>
                        <td className="py-3 px-2 text-sm">40 min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cuidados Essenciais */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl text-gold mb-4">Cuidados Essenciais</h2>
            <p className="text-xl text-foreground/70">Siga nossas orientações para resultados seguros e duradouros</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-gold">Antes da Sessão</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Remova toda maquiagem e produtos cosméticos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Tome banho antes da sessão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Não use perfumes ou desodorantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Evite exposição solar no dia anterior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Hidrate bem a pele nas 24h anteriores</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-gold">Após a Sessão</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Hidrate intensamente a pele</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Evite banhos muito quentes nas próximas 4 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Use protetor solar ao sair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Aguarde 48h para próxima sessão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Beba bastante água</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contraindicações */}
        <section className="mb-20">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                Contraindicações
              </CardTitle>
              <CardDescription className="text-red-600">
                O bronzeamento artificial não é recomendado para:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Gravidez ou amamentação</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Uso de medicamentos fotossensibilizantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Histórico de câncer de pele</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Queimaduras ou feridas na pele</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Menores de 18 anos (sem autorização dos pais)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Doenças autoimunes ou fotossensibilidade</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-red-700">
                Dúvidas sobre contraindicações? Consulte nossa equipe antes de agendar.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl text-gold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-foreground/70">Tire suas dúvidas sobre nossos serviços</p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Qual a diferença entre os equipamentos Ferrary?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-foreground/80">
                  A <strong>Ferrary Yellow</strong> possui design semi-aberto, ideal para quem tem claustrofobia. A <strong>Ferrary Red</strong> é o equipamento clássico, perfeito para iniciantes e todos os fototipos. Já a <strong>Ferrary Black</strong> tem o dobro de potência, ideal para peles mais escuras e clientes já bronzeados.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Como escolher o tempo ideal de sessão?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-foreground/80">
                  O tempo depende do seu fototipo (tipo de pele) baseado na Escala de Fitzpatrick. Peles mais claras (I-II) começam com sessões mais curtas (10-20min), enquanto peles médias e escuras (III-VI) podem fazer sessões de 30-40min. Nossa equipe faz a análise gratuita para recomendar o tempo ideal.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Os equipamentos são seguros?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-foreground/80">
                  Sim! Todos os nossos equipamentos Ferrary são rigorosamente inspecionados e possuem laudos Espectrômetro e ART em conformidade com todas as leis e normas vigentes. Segurança é nossa prioridade máxima.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Quanto tempo dura o bronzeado?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-foreground/80">
                  Com os cuidados adequados (hidratação e proteção solar), o bronzeado pode durar de 7 a 15 dias. Para manter o tom, recomendamos sessões de manutenção a cada 10-14 dias.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Posso fazer bronzeamento se tenho pele sensível?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-foreground/80">
                  Sim, mas com cuidados especiais. Recomendamos começar com a Ferrary Red em sessões mais curtas e sempre usar os produtos de proteção que fornecemos. Nossa equipe fará uma avaliação completa antes da primeira sessão.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                O que está incluso nas sessões?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-foreground/80">
                  Todas as sessões incluem: protetor solar corporal, ativador de marquinha, acelerador de bronze e biquíni de fita (opcional). Tudo que você precisa para uma sessão segura e eficaz!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Final */}
        <section className="text-center bg-gradient-gold rounded-2xl p-12">
          <h2 className="font-script text-5xl text-white mb-6">
            Pronto para Seu Bronzeado Perfeito?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende sua sessão e descubra a diferença de um bronzeamento seguro e personalizado
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-12 py-6"
            onClick={() => {
              setPacoteInteracao({ 
                nome: "Agendamento de Sess\u00e3o", 
                origem: "agendar_agora_footer" 
              });
            }}
          >
            📆 AGENDAR AGORA
          </Button>
        </section>
      </main>

      {/* Modal de Seleção de Sessão Individual */}
      {equipamentos.map((equip) => (
        <Dialog key={`sessao-${equip.id}`} open={modalSessaoIndividual === equip.id} onOpenChange={() => setModalSessaoIndividual(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-script text-gold">Sessão Individual</DialogTitle>
              <DialogDescription>
                Escolha a duração da sua sessão no equipamento {equip.nome}
              </DialogDescription>
            </DialogHeader>
            <SessaoIndividualSelector
              equipamentoNome={equip.nome}
              opcoes={[
                ...(equip.preco20 ? [{ tempo: 20, preco: equip.preco20 }] : []),
                ...(equip.preco30 ? [{ tempo: 30, preco: equip.preco30 }] : []),
                ...(equip.preco40 ? [{ tempo: 40, preco: equip.preco40 }] : [])
              ]}
              onConfirm={(tempo, preco) => {
                setModalSessaoIndividual(null);
                setTimeout(() => {
                  setPacoteInteracao({ 
                    nome: `Sessão Individual - ${equip.nome} (${tempo} min)`, 
                    origem: `sessao_${equip.id}`,
                    tempo,
                    preco,
                    fototipo: analiseResult?.fototipo
                  });
                }, 300);
              }}
            />
          </DialogContent>
        </Dialog>
      ))}

      {/* Modal de Seleção de Outros Serviços */}
      {modalServico && (
        <Dialog open={!!modalServico} onOpenChange={() => setModalServico(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-script text-gold">{modalServico.nome}</DialogTitle>
              <DialogDescription>
                {modalServico.descricao}
              </DialogDescription>
            </DialogHeader>
            <ServicoSelector
              servicoNome={modalServico.nome}
              descricao="Escolha o serviço desejado:"
              opcoes={modalServico.itens}
              onConfirm={(servicoEscolhido, preco) => {
                setModalServico(null);
                setTimeout(() => {
                  setPacoteInteracao({ 
                    nome: `${modalServico.nome} - ${servicoEscolhido}`, 
                    origem: 'outros_servicos',
                    preco,
                    fototipo: analiseResult?.fototipo
                  });
                }, 300);
              }}
            />
          </DialogContent>
        </Dialog>
      )}
      
      <Footer />
    </div>
  );
};

export default Servicos;
