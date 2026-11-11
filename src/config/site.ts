// Config central do site. Todo dado da casa (NAP, giras, redes) sai daqui.
// Itens marcados com "CONFIRMAR" vieram de fontes públicas e precisam do ok da casa.

export const site = {
  // CONFIRMAR: domínio definitivo. Trocar aqui e em astro.config.mjs (site).
  url: 'https://choupanadocaboclomatavirgem.com.br',
  nome: 'Choupana do Caboclo Mata Virgem',
  nomeCurto: 'Choupana',
  tipo: 'Templo de Umbanda',
  vertente: 'Umbanda de Raiz de Guiné',
  regente: 'Caboclo Mata Virgem',
  zelador: {
    nome: 'Pai Jorge Miguel',
    nomeCompleto: 'Jorge Miguel',
    funcao: 'Zelador da casa',
  },
  // Fonte: bio do Instagram ("Casa filiada a @tfluz.pe") e resumo do Google.
  filiacao: {
    nome: 'Templo Filhos da Luz',
    instagram: 'https://www.instagram.com/tfluz.pe/',
  },

  endereco: {
    rua: 'R. Mercúrio, 70',
    bairro: 'Lagoinha',
    cidade: 'Nova Iguaçu',
    uf: 'RJ',
    cep: '26296-540',
    pais: 'BR',
    // Pin do Perfil da Empresa no Google
    lat: -22.818558,
    lng: -43.6037002,
  },
  mapsUrl:
    'https://www.google.com/maps/place/Choupana+do+Caboclo+Mata+Virgem+%7C+Templo+de+Umbanda/@-22.818558,-43.6037002,17z/data=!4m6!3m5!1s0x9959d637979c4f:0x2e08a11c6260ee69!8m2!3d-22.818558!4d-43.6037002!16s%2Fg%2F11zd5j4s_g',
  mapsEmbed:
    'https://www.google.com/maps?q=-22.818558,-43.6037002&z=16&hl=pt-BR&output=embed',
  rotaUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-22.818558,-43.6037002&destination_place_id=ChIJT5yXN9ZZmQARae5gYhyhCC4',
  avaliarUrl: 'https://search.google.com/local/writereview?placeid=ChIJT5yXN9ZZmQARae5gYhyhCC4',

  telefone: '(21) 97126-4678',
  telefoneE164: '+5521971264678',
  whatsapp: '5521971264678',
  whatsappMsg: 'Olá! Vim pelo site da Choupana do Caboclo Mata Virgem e gostaria de saber mais sobre as giras.',

  // Fonte: respostas do proprietário no Google ("de 15 em 15 dias, aos sábados às 18h").
  giras: {
    resumo: 'Giras abertas de 15 em 15 dias, aos sábados, às 18h',
    dia: 'Sábado',
    frequencia: 'de 15 em 15 dias',
    hora: '18h',
    atendimento: 'gratuito',
  },

  redes: {
    instagram: 'https://www.instagram.com/choupanamatavirgem/',
    instagramUser: '@choupanamatavirgem',
    facebook: 'https://www.facebook.com/ordem.jurema',
  },

  // CONFIRMAR: lista vinda do resumo público do Google. Doação é sempre opcional.
  doacoes: [
    'Velas palito brancas',
    'Velas de 7 dias brancas',
    'Cachaça',
    'Cidra',
    'Álcool',
    'Fumo para cachimbo',
    'Charutos',
    'Defumadores',
  ],

  // Atributos marcados no Perfil da Empresa no Google
  acolhimento: [
    'Entrada e assentos acessíveis para cadeira de rodas',
    'Banheiro acessível',
    'Fraldário e espaço para amamentação',
    'Estacionamento gratuito no local e na rua',
    'Casa que acolhe a comunidade LGBTQIA+ e espaço seguro para pessoas trans',
  ],

  google: {
    nota: '5,0',
    avaliacoes: 12,
  },

  // Preencher quando criar a propriedade GA4 (ex.: 'G-XXXXXXX'). Vazio = sem script.
  ga4Id: '',
} as const;

export const whatsappLink = (msg: string = site.whatsappMsg) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const enderecoLinha = `${site.endereco.rua} – ${site.endereco.bairro}, ${site.endereco.cidade} – ${site.endereco.uf}, ${site.endereco.cep}`;

export const nav = [
  { href: '/a-casa/', label: 'A casa' },
  { href: '/giras/', label: 'Giras' },
  { href: '/primeira-visita/', label: 'Primeira visita' },
  { href: '/tour-virtual/', label: 'Tour 360°' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contato/', label: 'Como chegar' },
];
