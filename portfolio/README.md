# Portfólio · Julio Rodrigues

Meu portfólio pessoal, feito com Next.js 16, Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com/) e [Magic UI](https://magicui.design/).

Baseado no template open source [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) (licença MIT).

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Editando o conteúdo

Todo o texto do site fica em um arquivo só: [`src/data/resume.tsx`](./src/data/resume.tsx).

- `contact.email`: preencha pra aparecer o link de e-mail na seção de contato.
- `work[].start`: data de início de cada experiência (hoje só aparece "Atual").
- `projects[].image`: caminho de um print do projeto em `public/` (sem imagem, o card mostra uma capa com o nome).
- `skills`: os ícones vêm de [`src/components/stack-icon.tsx`](./src/components/stack-icon.tsx).

## Deploy

Na Vercel, importe o repositório e defina a variável `NEXT_PUBLIC_SITE_URL` com a URL final do site (ela é usada nas meta tags e na imagem de compartilhamento).
