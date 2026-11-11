import type { ImageMetadata } from 'astro';

// Fotos estáticas da casa (pasta "fotos 11.11" do cliente)
import fachada from '../assets/fotos/fachada-frente.jpg';
import foto1 from '../assets/fotos/foto-1.jpg';
import foto2 from '../assets/fotos/foto-2.jpg';
import foto3 from '../assets/fotos/foto-3.jpg';
import foto4 from '../assets/fotos/foto-4.jpg';
import foto5 from '../assets/fotos/foto-5.jpg';

// Formato na grade: 'grande' (8 de 12 colunas), 'alta' (4 colunas, vertical) ou 'meia' (6 colunas)
export type Formato = 'grande' | 'alta' | 'meia';
export interface Foto { src: ImageMetadata; titulo: string; alt: string; formato: Formato }

// Para adicionar uma foto: coloque o arquivo em src/assets/fotos/, importe acima e inclua na lista.
// Cada linha da grade soma 12 colunas: grande + alta, alta + grande ou meia + meia.
export const fotos: Foto[] = [
  { src: foto3, formato: 'grande', titulo: 'O congá', alt: 'Congá da Choupana à luz do dia, com o arco amarelo, a cruz e o altar coberto de branco sobre o chão de areia' },
  { src: fachada, formato: 'alta', titulo: 'A fachada', alt: 'Fachada da Choupana com o ponto riscado, as letras T.U.O, a frase Seja bem-vindo e o nome da casa pintados na parede' },
  { src: foto2, formato: 'alta', titulo: 'Quadros do salão', alt: 'Parede do salão com quadros de Jesus e de guias espirituais' },
  { src: foto1, formato: 'grande', titulo: 'A assistência', alt: 'Cadeiras brancas da assistência voltadas para o congá, com espadas-de-são-jorge em floreiras' },
  { src: foto4, formato: 'meia', titulo: 'O salão visto do terreiro', alt: 'Salão da Choupana visto do terreiro de areia, com plantas e as portas de vidro ao fundo' },
  { src: foto5, formato: 'meia', titulo: 'A porta do salão', alt: 'Porta de vidro do salão entre samambaias e plantas do quintal' },
];
