export interface Cena {
  id: string;
  periodo: 'dia' | 'noite';
  titulo: string;
  legenda: string;
}

// Arquivos em /public/tour/<id>.jpg e <id>-thumb.webp (4096×2048, equirretangular)
export const cenas: Cena[] = [
  { id: 'noite-conga', periodo: 'noite', titulo: 'Congá', legenda: 'O altar da casa, com as velas acesas para a gira.' },
  { id: 'noite-conga-salao', periodo: 'noite', titulo: 'Terreiro', legenda: 'O chão de areia onde a corrente trabalha, diante do congá.' },
  { id: 'noite-salao', periodo: 'noite', titulo: 'Assistência', legenda: 'Onde o público aguarda o atendimento durante a gira.' },
  { id: 'noite-salao-porta', periodo: 'noite', titulo: 'Salão', legenda: 'O salão visto a partir das portas de vidro.' },
  { id: 'noite-entrada', periodo: 'noite', titulo: 'Entrada', legenda: 'A chegada à casa, pelo quintal de plantas.' },
  { id: 'dia-rua', periodo: 'dia', titulo: 'Rua', legenda: 'O portão da casa na R. Mercúrio, em Lagoinha.' },
  { id: 'dia-fachada', periodo: 'dia', titulo: 'Fachada', legenda: 'A parede com o ponto riscado e o nome da Choupana.' },
  { id: 'dia-entrada', periodo: 'dia', titulo: 'Entrada', legenda: 'O quintal e a porta de vidro do salão.' },
  { id: 'dia-salao-porta', periodo: 'dia', titulo: 'Salão', legenda: 'O salão visto a partir das portas de vidro.' },
  { id: 'dia-salao', periodo: 'dia', titulo: 'Assistência', legenda: 'Os assentos da assistência, de frente para o congá.' },
  { id: 'dia-conga-salao', periodo: 'dia', titulo: 'Terreiro', legenda: 'O chão de areia, entre a assistência e o congá.' },
  { id: 'dia-conga', periodo: 'dia', titulo: 'Congá', legenda: 'O altar da casa à luz do dia.' },
];
