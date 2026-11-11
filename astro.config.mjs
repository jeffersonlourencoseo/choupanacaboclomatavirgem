// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// CONFIRMAR: domínio definitivo (igual ao src/config/site.ts)
export default defineConfig({
  site: 'https://choupanadocaboclomatavirgem.com.br',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
  image: { layout: 'constrained' },
  vite: { plugins: [tailwindcss()] },
});
