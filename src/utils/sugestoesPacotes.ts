// Sistema de sugestões de pacotes baseado no fototipo

export interface SugestaoPacote {
  equipamento: string;
  tempoRecomendado: string;
  sessoes: number;
  motivo: string;
  prioridade: number; // 1 = mais recomendado
}

export const getSugestoesPorFototipo = (fototipo: string): SugestaoPacote[] => {
  const sugestoes: { [key: string]: SugestaoPacote[] } = {
    "I": [
      {
        equipamento: "Ferrari Yellow",
        tempoRecomendado: "10-20 minutos",
        sessoes: 10,
        motivo: "Pele muito sensível requer sessões curtas e maior número de aplicações para resultados seguros",
        prioridade: 1
      },
      {
        equipamento: "Ferrari Red",
        tempoRecomendado: "10-20 minutos",
        sessoes: 10,
        motivo: "Equipamento versátil ideal para peles claras com protocolo gradual",
        prioridade: 2
      },
      {
        equipamento: "Ferrari Yellow",
        tempoRecomendado: "10-20 minutos",
        sessoes: 8,
        motivo: "Opção intermediária para resultados progressivos",
        prioridade: 3
      }
    ],
    "II": [
      {
        equipamento: "Ferrari Red",
        tempoRecomendado: "10-20 minutos",
        sessoes: 10,
        motivo: "Pele clara se beneficia de protocolo gradual com mais sessões",
        prioridade: 1
      },
      {
        equipamento: "Ferrari Yellow",
        tempoRecomendado: "10-20 minutos",
        sessoes: 8,
        motivo: "Conforto premium para sessões mais longas com segurança",
        prioridade: 2
      },
      {
        equipamento: "Ferrari Red",
        tempoRecomendado: "10-20 minutos",
        sessoes: 8,
        motivo: "Pacote equilibrado para resultados consistentes",
        prioridade: 3
      }
    ],
    "III": [
      {
        equipamento: "Ferrari Red",
        tempoRecomendado: "30-40 minutos",
        sessoes: 8,
        motivo: "Pele média responde bem a sessões mais longas com protocolo de 8 sessões",
        prioridade: 1
      },
      {
        equipamento: "Ferrari Yellow",
        tempoRecomendado: "30-40 minutos",
        sessoes: 8,
        motivo: "Conforto excepcional para sessões de maior duração",
        prioridade: 2
      },
      {
        equipamento: "Ferrari Red",
        tempoRecomendado: "30-40 minutos",
        sessoes: 5,
        motivo: "Opção para manutenção ou intensificação de bronze existente",
        prioridade: 3
      }
    ],
    "IV": [
      {
        equipamento: "Ferrari Black",
        tempoRecomendado: "30 minutos",
        sessoes: 5,
        motivo: "Pele morena se beneficia da alta potência com protocolo otimizado",
        prioridade: 1
      },
      {
        equipamento: "Ferrari Red",
        tempoRecomendado: "30-40 minutos",
        sessoes: 5,
        motivo: "Alternativa versátil para resultados consistentes",
        prioridade: 2
      },
      {
        equipamento: "Ferrari Black",
        tempoRecomendado: "30 minutos",
        sessoes: 4,
        motivo: "Pacote básico para manutenção rápida",
        prioridade: 3
      }
    ],
    "V": [
      {
        equipamento: "Ferrari Black",
        tempoRecomendado: "30-40 minutos",
        sessoes: 5,
        motivo: "Pele escura requer alta potência para resultados intensos e duradouros",
        prioridade: 1
      },
      {
        equipamento: "Ferrari Black",
        tempoRecomendado: "40 minutos",
        sessoes: 5,
        motivo: "Máxima intensidade para resultados profundos",
        prioridade: 2
      },
      {
        equipamento: "Ferrari Black",
        tempoRecomendado: "30 minutos",
        sessoes: 4,
        motivo: "Opção para manutenção de bronze já estabelecido",
        prioridade: 3
      }
    ],
    "VI": [
      {
        equipamento: "Ferrari Black",
        tempoRecomendado: "40 minutos",
        sessoes: 5,
        motivo: "Pele negra responde melhor à máxima potência com sessões mais longas",
        prioridade: 1
      },
      {
        equipamento: "Ferrari Black",
        tempoRecomendado: "30-40 minutos",
        sessoes: 5,
        motivo: "Protocolo intensivo para resultados excepcionais",
        prioridade: 2
      },
      {
        equipamento: "Ferrari Black",
        tempoRecomendado: "40 minutos",
        sessoes: 4,
        motivo: "Pacote básico com alta intensidade",
        prioridade: 3
      }
    ]
  };

  return sugestoes[fototipo] || sugestoes["III"]; // Default para fototipo III se não encontrar
};

// Função para formatar mensagem de sugestão para o cliente
export const formatarMensagemSugestao = (fototipo: string, sugestoes: SugestaoPacote[]): string => {
  const principal = sugestoes[0];
  
  return `Com base no seu Fototipo ${fototipo}, recomendamos:\n\n` +
    `🎯 SUGESTÃO PRINCIPAL\n` +
    `Equipamento: ${principal.equipamento}\n` +
    `Tempo: ${principal.tempoRecomendado}\n` +
    `Pacote: ${principal.sessoes} sessões\n` +
    `Motivo: ${principal.motivo}`;
};

// Função para obter recomendação de equipamento e tempo para mensagem do WhatsApp
export const getRecomendacaoParaWhatsApp = (fototipo: string): string => {
  const sugestoes = getSugestoesPorFototipo(fototipo);
  const principal = sugestoes[0];
  
  return `Fototipo: ${fototipo}\n` +
    `Equipamento recomendado: ${principal.equipamento}\n` +
    `Tempo recomendado: ${principal.tempoRecomendado}\n` +
    `Pacote sugerido: ${principal.sessoes} sessões`;
};
