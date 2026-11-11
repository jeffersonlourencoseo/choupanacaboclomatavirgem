import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../config/site';
import { postsPublicados } from '../lib/blog';

export async function GET(context: APIContext) {
  const posts = await postsPublicados();
  return rss({
    title: 'Blog da Choupana do Caboclo Mata Virgem',
    description: `Textos sobre Umbanda de Raiz de Guiné da ${site.nome}, em Nova Iguaçu.`,
    site: context.site ?? site.url,
    customData: '<language>pt-BR</language>',
    items: posts.map((p) => ({
      title: p.data.titulo,
      description: p.data.descricao,
      pubDate: p.data.data,
      link: `/blog/${p.id}/`,
      categories: [p.data.categoria],
    })),
  });
}
