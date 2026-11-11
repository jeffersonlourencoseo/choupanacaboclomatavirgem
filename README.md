# Site da Choupana do Caboclo Mata Virgem

Astro 7 + Tailwind 4, estático. Todos os dados da casa ficam em `src/config/site.ts`.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Páginas

- `/` início
- `/a-casa/` história, regente, mestre da casa e vertente
- `/giras/` dia, horário, linhas e doações (com FAQ)
- `/primeira-visita/` passo a passo (com FAQ)
- `/tour-virtual/` tour 360°, com 12 cenas em `public/tour/`
- `/contato/` como chegar
- `/privacidade/`

## Blog: publicar o post da semana

1. Copie `src/content/blog/_modelo.md` e renomeie (ex.: `banho-de-ervas.md`). O nome do arquivo vira o endereço `/blog/banho-de-ervas/`.
2. Preencha o cabeçalho: `titulo` (40 a 60 caracteres), `descricao` (150 a 160), `data`, `categoria` e, se quiser, `capa`. Fotos vão em `src/content/blog/imagens/`.
3. Troque `rascunho: true` por `rascunho: false` e envie para o GitHub. A Vercel publica sozinha.

O post entra automaticamente na listagem `/blog/`, na home ("Palavras da mata"), no sitemap e no RSS (`/rss.xml`). Se o título ou a descrição estiverem fora do tamanho, o build avisa e não publica.

## Calendário de giras

As datas ficam em `src/data/giras.ts`: duas datas avulsas (quartas 18/11 e 02/12/2026) e a sequência de sábados de 14 em 14 dias, de 23/01/2027 até 31/12/2027. A próxima gira aparece sozinha na home, na página Giras e no calendário (`/giras/#calendario`), e cada data futura vira um evento no schema. Para 2028, basta mudar `fimSequencia`.

Datas para confirmar com a casa: 06/02/2027 (sábado de Carnaval), 01/05/2027 (Dia do Trabalho) e 25/12/2027 (Natal).

## Galeria

`/galeria/`, com as fotos estáticas da casa (pasta `fotos 11.11`) e ampliação com setas, teclado e deslizar. Para adicionar uma foto: coloque em `src/assets/fotos/` e inclua uma linha em `src/data/galeria.ts`.

## SEO técnico já feito

Title e description no tamanho certo, canonical, Open Graph e Twitter Card, schema `@graph` (PlaceOfWorship + LocalBusiness, Person, WebPage, Breadcrumb, FAQPage, ImageGallery), sitemap, `robots.txt` com robôs de IA liberados, `llms.txt`, cabeçalhos de segurança e cache em `vercel.json`, eventos GA4 (`clique_whatsapp` com `local_botao`, `clique_telefone`, `clique_rota`, `tour_cena`).

## Pendências com a casa

1. **Domínio**: provisório `matavirgem.vercel.app`. Ao ter o domínio próprio, trocar em `src/config/site.ts`, `astro.config.mjs`, `public/robots.txt` e `public/llms.txt`.
2. **Endereço**: o Google diz R. Mercúrio, 70 (Lagoinha); a bio do Instagram diz Rua Netuno, 61 (Vila Olímpio 2). O site usa o do Google.
3. **Giras**: calendário informado pela casa em 11/11/2026 (ver seção Calendário).
4. **Doações**: confirmadas pela descrição do Perfil no Google.
5. **Textos doutrinários** (linhas, Raiz de Guiné, Caboclo Mata Virgem como caboclo de Oxóssi): pedir para o Mestre “Abayratan” Jorge Miguel revisar.
6. **Facebook**: `facebook.com/ordem.jurema` (o nome da página bate, mas confirmar).
7. **GA4**: preencher `ga4Id` quando criar a propriedade.
