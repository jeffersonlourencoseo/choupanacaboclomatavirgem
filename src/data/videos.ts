// Vídeos da Choupana. Arquivos em public/videos/<id>.mp4, capa <id>-capa-720.webp / -360.webp / .jpg e legenda <id>.vtt.
// Para adicionar: gere os arquivos com o mesmo padrão de nome e inclua um item no topo da lista (o mais novo primeiro).

export interface Video {
  id: string;
  titulo: string;
  descricao: string;
  /** duração em segundos */
  duracao: number;
  /** data de publicação (AAAA-MM-DD) */
  data: string;
  /** texto da narração, para quem prefere ler e para o Google */
  narracao: string;
}

export const videos: Video[] = [
  {
    id: 'ponto-cantado-matta-e-silva',
    titulo: 'Ponto cantado: o que ensinava Mestre Yapacany',
    descricao:
      'Por que o ponto cantado não é música, segundo W. W. da Matta e Silva, fundador da Umbanda Esotérica: a função de cada ponto e a ponte entre o fundamento e a gira.',
    duracao: 67.5,
    data: '2026-11-11',
    narracao:
      'Ponto cantado não é música. Não é samba. Não é entretenimento. É prece. É mantra. É magia. Assim ensinava Woodrow Wilson da Matta e Silva, o Mestre Yapacany, fundador da Umbanda Esotérica, a Raiz de Pai Guiné. Em 1956, ele lança “Umbanda de Todos Nós”. Para ele, o ponto é uma prece invocatória: fixa a vibração no ambiente e prepara o campo mental para a entidade trabalhar. O ponto tem força pelo som. O som, a palavra e a intenção são a magia. Por isso, ponto não pode virar samba. Cantar sem fundamento é cantar vazio. Cada ponto tem uma função: abertura, bater cabeça, defumação, firmeza, incorporação, descarrego, encerramento. E o tom revela a linha. Preto-Velho: canto dolente, prece de humildade. Xangô: invocação séria, em voz baixa. O ponto cantado é a ponte entre o fundamento e a gira. Sem ele não há corrente. Não há trabalho.',
  },
  {
    id: 'choupana-conheca',
    titulo: 'Conheça a Choupana do Caboclo Mata Virgem',
    descricao:
      'Em menos de 30 segundos: o templo de Umbanda de Raiz de Guiné em Nova Iguaçu, as linhas que trabalham na casa, as giras abertas e o atendimento gratuito.',
    duracao: 27.1,
    data: '2026-11-11',
    narracao:
      'Você conhece a Choupana do Caboclo Mata Virgem? Templo de Umbanda, Raiz de Guiné, em Nova Iguaçu. Aqui tem Caboclo, Pai Velho, Criança e Exu. Gira aberta a cada quinze dias, sábado, às seis da tarde. Atendimento gratuito, com consulta com entidade. Rua Mercúrio, 70, Lagoinha. Vem pra gira!',
  },
];

export const duracaoTexto = (s: number) => {
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${String(r).padStart(2, '0')}`;
};

/** Duração no formato ISO 8601 (ex.: PT1M8S), usado no schema */
export const duracaoISO = (s: number) => {
  const m = Math.floor(s / 60);
  const r = Math.round(s % 60);
  return `PT${m ? `${m}M` : ''}${r}S`;
};
