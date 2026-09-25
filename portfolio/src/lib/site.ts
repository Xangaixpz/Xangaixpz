// URL pública do site, usada nas meta tags, no sitemap e na imagem de compartilhamento.
// Na Netlify, a variável URL já vem com o domínio principal do site.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "http://localhost:3000";
