import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Posts do blog: um arquivo .md por post em src/content/blog/.
// Arquivos que começam com "_" (como _modelo.md) são ignorados.
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      // Título: ideal entre 40 e 60 caracteres (vira o title da página)
      titulo: z.string().min(20).max(62),
      descricao: z.string().min(120).max(165),
      data: z.coerce.date(),
      atualizado: z.coerce.date().optional(),
      categoria: z.enum(['Fundamentos', 'Entidades', 'Giras e rituais', 'Ervas e banhos', 'Datas e festas', 'Notícias da casa']),
      capa: image().optional(),
      capaAlt: z.string().optional(),
      autor: z.string().default('Choupana do Caboclo Mata Virgem'),
      rascunho: z.boolean().default(false),
    }),
});

export const collections = { blog };
