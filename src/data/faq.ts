import { site } from '../config/site';

export const faqGeral = [
  {
    q: 'Onde fica a Choupana do Caboclo Mata Virgem?',
    a: `A casa fica na ${site.endereco.rua}, no bairro ${site.endereco.bairro}, em ${site.endereco.cidade} (RJ), CEP ${site.endereco.cep}. Há estacionamento gratuito no local e na rua. Pelo botão "Traçar rota" o Google Maps leva você até o portão.`,
  },
  {
    q: 'Quando acontecem as giras abertas?',
    a: `As giras abertas acontecem de 15 em 15 dias, aos sábados, a partir das 18h. Como o calendário pode mudar em datas festivas, confirme a data da próxima gira pelo WhatsApp ${site.telefone} antes de vir.`,
  },
  {
    q: 'O atendimento é pago?',
    a: 'Não. A Choupana é uma casa de caridade e o atendimento nas giras abertas é gratuito. Ninguém precisa pagar para tomar passe ou conversar com as entidades. Quem quiser pode ajudar com materiais usados nos trabalhos, mas é sempre opcional.',
  },
  {
    q: 'Preciso ser da Umbanda para ir a uma gira?',
    a: 'Não. As giras abertas recebem qualquer pessoa, de qualquer religião ou sem religião, que chegue com respeito. Você não precisa saber nada antes. Na primeira vez, basta chegar um pouco antes, se apresentar e seguir as orientações dos médiuns da casa.',
  },
  {
    q: 'Que roupa usar na gira?',
    a: 'Venha de roupa clara, de preferência branca, confortável e discreta. Evite roupas curtas, decotadas ou muito escuras. Se tiver dúvida sobre o que vestir, pergunte pelo WhatsApp antes de vir.',
  },
  {
    q: 'Quais entidades trabalham na casa?',
    a: `A casa é regida pelo ${site.regente}. Nas giras trabalham as linhas de Caboclos, Pretos Velhos, Crianças e Exu, sempre com o propósito de caridade, orientação e fortalecimento espiritual.`,
  },
  {
    q: 'A casa recebe todo mundo?',
    a: 'Sim. A Choupana acolhe todas as pessoas, inclusive a comunidade LGBTQIA+, e é um espaço seguro para pessoas trans. A entrada, os assentos e o banheiro são acessíveis para cadeira de rodas, e há fraldário e espaço para amamentação.',
  },
];
