import type { ImageMetadata } from 'astro';

import fachada from '../assets/fotos/fachada-frente.jpg';
import congaNoite from '../assets/fotos/conga-noite.jpg';
import congaDetalhe from '../assets/fotos/conga-noite-detalhe.jpg';
import salaoNoite from '../assets/fotos/salao-noite.jpg';
import entradaNoite from '../assets/fotos/entrada-noite.jpg';
import foto1 from '../assets/fotos/foto-1.jpg';
import foto2 from '../assets/fotos/foto-2.jpg';
import foto4 from '../assets/fotos/foto-4.jpg';
import foto5 from '../assets/fotos/foto-5.jpg';
import congaDia from '../assets/galeria/conga-dia.jpg';
import pontosParede from '../assets/galeria/conga-lateral-esq.jpg';
import salaoPortaNoite from '../assets/galeria/salao-porta-noite.jpg';
import terreiroDia from '../assets/galeria/assist-dia.jpg';
import filhosLuzNoite from '../assets/galeria/entrada-noite-dir.jpg';
import quintal from '../assets/galeria/quintal-dir.jpg';
import plantas from '../assets/galeria/quintal-tras.jpg';
import rua from '../assets/galeria/rua.jpg';

export type Grupo = 'Congá' | 'Salão' | 'Quintal e fachada';

export interface Foto { src: ImageMetadata; titulo: string; alt: string; grupo: Grupo }

// Para adicionar uma foto: coloque o arquivo em src/assets/galeria/, importe acima e inclua na lista.
export const fotos: Foto[] = [
  { src: fachada, grupo: 'Quintal e fachada', titulo: 'A fachada da Choupana', alt: 'Fachada da Choupana com o ponto riscado, as letras T.U.O, a frase Seja bem-vindo e o nome da casa pintados na parede' },
  { src: congaNoite, grupo: 'Congá', titulo: 'O congá em noite de gira', alt: 'Congá da Choupana iluminado por velas, com o terreiro de areia à frente' },
  { src: congaDetalhe, grupo: 'Congá', titulo: 'Velas acesas no congá', alt: 'Detalhe do congá com o arco amarelo, os pontos riscados e as velas acesas' },
  { src: salaoPortaNoite, grupo: 'Salão', titulo: 'O salão pronto para a gira', alt: 'Salão da Choupana à noite, com as cadeiras da assistência voltadas para o congá' },
  { src: filhosLuzNoite, grupo: 'Quintal e fachada', titulo: 'Filhos da Luz', alt: 'Parede externa à noite com o ponto riscado e as palavras Filhos da Luz e Choupana C. Mata Virgem' },
  { src: congaDia, grupo: 'Congá', titulo: 'O congá de dia', alt: 'Altar do congá coberto de branco, com o arco amarelo e os pontos riscados das entidades' },
  { src: pontosParede, grupo: 'Congá', titulo: 'Pontos riscados nas paredes', alt: 'Quadros com pontos riscados nas paredes do terreiro, com bancos e velas sobre a areia' },
  { src: salaoNoite, grupo: 'Salão', titulo: 'O terreiro à luz de velas', alt: 'Terreiro de areia diante do congá, com espadas-de-são-jorge e velas acesas' },
  { src: terreiroDia, grupo: 'Salão', titulo: 'O chão de areia do terreiro', alt: 'Terreiro de areia visto da assistência, com plantas e o congá ao fundo' },
  { src: foto1, grupo: 'Salão', titulo: 'A assistência', alt: 'Cadeiras brancas da assistência voltadas para o congá' },
  { src: foto2, grupo: 'Salão', titulo: 'Quadros do salão', alt: 'Parede do salão com quadros de Jesus e de guias espirituais' },
  { src: foto4, grupo: 'Salão', titulo: 'O salão visto do terreiro', alt: 'Salão da Choupana visto do terreiro, com plantas e as portas de vidro ao fundo' },
  { src: entradaNoite, grupo: 'Quintal e fachada', titulo: 'A entrada à noite', alt: 'Porta de vidro do salão à noite, com o congá iluminado ao fundo' },
  { src: foto5, grupo: 'Quintal e fachada', titulo: 'A porta do salão', alt: 'Porta de vidro do salão entre samambaias e plantas do quintal' },
  { src: quintal, grupo: 'Quintal e fachada', titulo: 'O quintal', alt: 'Quintal da Choupana com o ponto riscado na parede e o jardim ao fundo' },
  { src: plantas, grupo: 'Quintal e fachada', titulo: 'As plantas da casa', alt: 'Vasos de plantas encostados no muro do quintal' },
  { src: rua, grupo: 'Quintal e fachada', titulo: 'O portão na R. Mercúrio', alt: 'Portão da Choupana na R. Mercúrio, em Lagoinha, Nova Iguaçu' },
];

export const grupos: Grupo[] = ['Congá', 'Salão', 'Quintal e fachada'];
