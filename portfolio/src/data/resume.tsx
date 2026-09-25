import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Julio Rodrigues",
  initials: "JR",
  // Troque pela URL final do site (ex.: a da Vercel) via NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Dev full stack. Gosto de pegar o projeto inteiro: modelar o banco, escrever a API, montar o front e colocar no ar.",
  summary:
    "Meu projeto principal é a [Afetum](https://afetum.com), um SaaS da Skurt Brasil onde trabalho como full stack.\n\nFora isso, faço projetos pra clientes. O maior é a [RZ Importados](#projects), uma loja online completa feita pro negócio de um cliente, com backend próprio, pagamento pelo Mercado Pago e frete por CEP. Também fiz sites em Next.js pra negócios na Espanha e em Andorra.\n\nFalo português e espanhol, então faço projeto nas duas línguas.",
  avatarUrl: "https://github.com/Xangaixpz.png",
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
    "Express",
    "SQLite",
    "Supabase",
    "Zod",
    "React Hook Form",
    "Vite",
    "Cloudflare",
    "Mercado Pago",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Início" }],
  contact: {
    // Preencha pra aparecer o botão de e-mail na seção de contato.
    email: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Xangaixpz",
        icon: Icons.github,
        navbar: true,
      },
    },
  },
  stats: [
    { label: "Linhas de código", value: "13.950" },
    { label: "Endpoints REST", value: "61" },
    { label: "Tabelas no banco", value: "15" },
    { label: "Projetos", value: "8" },
  ],
  languages: [
    { name: "JavaScript", percent: 46.3 },
    { name: "CSS", percent: 30.9 },
    { name: "TypeScript", percent: 17.2 },
    { name: "HTML", percent: 4.4 },
    { name: "SQL", percent: 1.2 },
  ],
  work: [
    {
      company: "Skurt Brasil",
      href: "https://afetum.com",
      location: "Remoto",
      title: "Desenvolvedor Full Stack · Afetum",
      logoUrl: "",
      start: "",
      end: "Atual",
      description:
        "Trabalho na Afetum, um SaaS pra criar páginas personalizadas com fotos, mensagens, música e animações. Cuido do front, da API, da autenticação, do banco e das integrações.",
    },
    {
      company: "Projetos para clientes",
      href: "#projects",
      location: "Brasil, Espanha e Andorra",
      title: "Desenvolvedor Full Stack freelancer",
      logoUrl: "",
      start: "",
      end: "Atual",
      description:
        "Faço sistemas e sites sob medida, em português e espanhol. O maior é a RZ Importados, uma loja online completa com backend próprio. Também fiz sites em Next.js pra negócios na Espanha e em Andorra.",
    },
  ],
  projects: [
    {
      title: "Afetum",
      category: "SaaS · Projeto principal",
      href: "https://afetum.com",
      subtitle: "Skurt Brasil",
      description:
        "SaaS pra criar páginas personalizadas com fotos, mensagens, música e animações, feito pra Skurt Brasil. Trabalho como full stack: front, API, autenticação, banco e integrações.",
      technologies: ["TypeScript", "Next.js", "Node.js", "Supabase"],
      links: [
        {
          type: "Site",
          href: "https://afetum.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "RZ Importados",
      category: "E-commerce",
      href: "",
      subtitle: "Projeto para cliente",
      description:
        "Loja online completa feita pro negócio de um cliente: catálogo, carrinho, pedidos, frete por CEP, pagamento pelo Mercado Pago e painel admin com relatórios. Backend próprio com 61 endpoints e 15 tabelas.",
      technologies: ["JavaScript", "Node.js", "Express", "SQLite", "Mercado Pago"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Momentum Andorra",
      category: "Site institucional",
      href: "",
      subtitle: "Projeto para cliente",
      description:
        "Site pra um cliente de experiências de wellness e gastronomia em Andorra, todo em espanhol.",
      technologies: ["TypeScript", "Next.js", "Tailwind"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Nexo",
      category: "5 sites",
      href: "",
      subtitle: "Projetos para clientes",
      description:
        "5 sites em Next.js pra clientes, um pra cada setor: restaurantes, advocacia, beleza, farmácias e negócios pet.",
      technologies: ["TypeScript", "Next.js", "Tailwind"],
      links: [],
      image: "",
      video: "",
    },
  ],
} as const;
