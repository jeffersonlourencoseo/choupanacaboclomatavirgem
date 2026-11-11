import type { ImageMetadata } from 'astro';

// Fotos estáticas da casa (pasta "fotos 11.11" do cliente)
import foto1 from '../assets/fotos/foto-1.jpg';
import foto2 from '../assets/fotos/foto-2.jpg';
import foto3 from '../assets/fotos/foto-3.jpg';
import foto4 from '../assets/fotos/foto-4.jpg';
import foto5 from '../assets/fotos/foto-5.jpg';

export interface Foto { src: ImageMetadata; titulo: string; alt: string }

// Para adicionar uma foto: coloque o arquivo em src/assets/fotos/, importe acima e inclua na lista.
export const fotos: Foto[] = [
  { src: foto3, titulo: 'O congá', alt: 'Congá da Choupana à luz do dia, com o arco amarelo, a cruz e o altar coberto de branco sobre o chão de areia' },
  { src: foto2, titulo: 'Quadros do salão', alt: 'Parede do salão com quadros de Jesus e de guias espirituais' },
  { src: foto1, titulo: 'A assistência', alt: 'Cadeiras brancas da assistência voltadas para o congá, com espadas-de-são-jorge em floreiras' },
  { src: foto4, titulo: 'O salão visto do terreiro', alt: 'Salão da Choupana visto do terreiro de areia, com plantas e as portas de vidro ao fundo' },
  { src: foto5, titulo: 'A porta do salão', alt: 'Porta de vidro do salão entre samambaias e plantas do quintal' },
];
