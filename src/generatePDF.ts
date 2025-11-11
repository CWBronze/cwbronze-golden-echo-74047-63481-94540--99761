// Função para gerar PDF do resultado da análise de pele
export const generateAnalisePelePDF = (resultado: {
  fototipo: string;
  nome: string;
  descricao: string;
  recomendacoes: string;
}, dadosCliente?: {
  nome: string;
  telefone: string;
  email: string;
}) => {
  // Por enquanto, vamos criar um texto formatado que pode ser enviado
  // Em uma implementação futura, podemos usar bibliotecas como jsPDF
  
  let conteudo = `
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
`;

  if (dadosCliente) {
    conteudo += `

DADOS DO CLIENTE
───────────────────────────────────────
Nome: ${dadosCliente.nome}
Telefone: ${dadosCliente.telefone}
E-mail: ${dadosCliente.email}
`;
  }

  conteudo += `

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

  return conteudo;
};

// Função para criar um blob de texto que simula um PDF
export const createPDFBlob = (conteudo: string): Blob => {
  return new Blob([conteudo], { type: 'text/plain' });
};

// Função para baixar o "PDF" (por enquanto como TXT)
export const downloadPDF = (conteudo: string, nomeArquivo: string = 'analise-pele-cwbronze.txt') => {
  const blob = createPDFBlob(conteudo);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = nomeArquivo;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
