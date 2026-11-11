import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function postsPublicados(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.rascunho);
  return posts.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

export const dataBR = (d: Date) =>
  d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const minutosLeitura = (texto = '') => Math.max(1, Math.round(texto.split(/\s+/).filter(Boolean).length / 200));
