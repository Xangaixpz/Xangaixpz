# Portfólio · Julio Rodrigues

Meu portfólio pessoal em português, espanhol e inglês, feito com Next.js 16, Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com/) e [Magic UI](https://magicui.design/).

Baseado no template open source [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) (licença MIT).

## Idiomas

| URL | Idioma |
| --- | --- |
| `/pt` | Português (Brasil) |
| `/es` | Español |
| `/en` | English |

A raiz (`/`) manda cada visitante pro idioma do navegador. Catalão, galego e basco vão pro espanhol, e idiomas fora da lista vão pro inglês. No topo da página tem o seletor PT · ES · EN.

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Editando o conteúdo

- [`src/data/resume.tsx`](./src/data/resume.tsx): todo o conteúdo (sobre, experiência, projetos, números, contato). Cada texto tem as versões `pt`, `es` e `en`.
- [`src/data/ui.ts`](./src/data/ui.ts): textos fixos da interface (títulos de seção, botões, 404).

Pra completar:

- `avatarUrl`: coloque uma foto em `public/` (ex.: `public/avatar.jpg`) e preencha `"/avatar.jpg"`. Vazio mostra as iniciais.
- `work[].start`: data de início de cada experiência (hoje só aparece "Atual").
- `projects[].image`: caminho de um print do projeto em `public/` (sem imagem, o card mostra uma capa com o nome).

## Deploy na Netlify

1. Na Netlify, **Add new site → Import an existing project** e escolha este repositório.
2. A configuração já vem do [`netlify.toml`](./netlify.toml) (build com `pnpm run build`, Node 22). A Netlify detecta o Next.js e instala o adaptador sozinha.
3. Em **Domain management**, adicione seu domínio.

As meta tags, o sitemap e a imagem de compartilhamento usam a URL principal do site, que a Netlify passa na variável `URL`. Depois de configurar o domínio, rode um novo deploy pra ele aparecer ali. Se quiser forçar outra URL, defina `NEXT_PUBLIC_SITE_URL`.
