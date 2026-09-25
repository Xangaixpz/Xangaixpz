import { Icons } from "@/components/icons";

// Todo o conteúdo do site. Cada texto tem as versões pt, es e en.
export const DATA = {
  name: "Julio Rodrigues",
  initials: "JR",
  // Coloque uma foto em public/ (ex.: /avatar.jpg). Vazio mostra as iniciais.
  avatarUrl: "",
  description: {
    pt: "Dev full stack. Gosto de pegar o projeto inteiro: modelar o banco, escrever a API, montar o front e colocar no ar.",
    es: "Desarrollador full stack. Me gusta encargarme del proyecto entero: diseñar la base de datos, escribir la API, montar el front y ponerlo en producción.",
    en: "Full stack developer. I like owning the whole project: designing the database, writing the API, building the front end and shipping it.",
  },
  summary: {
    pt: "Meu projeto principal é a [Afetum](https://afetum.com), um SaaS da Skurt Brasil onde trabalho como full stack.\n\nFora isso, faço projetos pra clientes. O maior é a [RZ Importados](#projects), uma loja online completa feita pro negócio de um cliente, com backend próprio, pagamento pelo Mercado Pago e frete por CEP. Também fiz sites em Next.js pra negócios na Espanha e em Andorra.\n\nFaço projetos em português, espanhol e inglês.",
    es: "Mi proyecto principal es [Afetum](https://afetum.com), un SaaS de Skurt Brasil donde trabajo como full stack.\n\nAdemás, hago proyectos para clientes. El más grande es [RZ Importados](#projects), una tienda online completa hecha para el negocio de un cliente, con backend propio, pagos con Mercado Pago y envío calculado por código postal. También he hecho webs en Next.js para negocios en España y Andorra.\n\nHago proyectos en portugués, español e inglés.",
    en: "My main project is [Afetum](https://afetum.com), a SaaS by Skurt Brasil where I work as a full stack developer.\n\nBesides that, I build projects for clients. The biggest one is [RZ Importados](#projects), a complete online store built for a client's business, with its own backend, Mercado Pago payments and shipping calculated by postal code. I've also built Next.js websites for businesses in Spain and Andorra.\n\nI take on projects in Portuguese, Spanish and English.",
  },
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
  contact: {
    email: "juliorosana925@gmail.com",
    instagram: {
      handle: "@diexangai",
      url: "https://instagram.com/diexangai",
    },
    github: {
      handle: "Xangaixpz",
      url: "https://github.com/Xangaixpz",
    },
  },
  stats: [
    {
      value: 13950,
      label: { pt: "Linhas de código", es: "Líneas de código", en: "Lines of code" },
    },
    {
      value: 61,
      label: { pt: "Endpoints REST", es: "Endpoints REST", en: "REST endpoints" },
    },
    {
      value: 15,
      label: { pt: "Tabelas no banco", es: "Tablas en la base de datos", en: "Database tables" },
    },
    {
      value: 8,
      label: { pt: "Projetos", es: "Proyectos", en: "Projects" },
    },
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
      id: "skurt",
      company: { pt: "Skurt Brasil", es: "Skurt Brasil", en: "Skurt Brasil" },
      title: {
        pt: "Desenvolvedor Full Stack · Afetum",
        es: "Desarrollador Full Stack · Afetum",
        en: "Full Stack Developer · Afetum",
      },
      logoUrl: "",
      // Preencha com a data de início (ex.: "2024"). Vazio mostra só o fim.
      start: "",
      end: { pt: "Atual", es: "Actualidad", en: "Present" },
      description: {
        pt: "Trabalho na Afetum, um SaaS pra criar páginas personalizadas com fotos, mensagens, música e animações. Cuido do front, da API, da autenticação, do banco e das integrações.",
        es: "Trabajo en Afetum, un SaaS para crear páginas personalizadas con fotos, mensajes, música y animaciones. Me encargo del front, la API, la autenticación, la base de datos y las integraciones.",
        en: "I work on Afetum, a SaaS for creating personalized pages with photos, messages, music and animations. I handle the front end, API, authentication, database and integrations.",
      },
    },
    {
      id: "freelance",
      company: {
        pt: "Projetos para clientes",
        es: "Proyectos para clientes",
        en: "Client projects",
      },
      title: {
        pt: "Desenvolvedor Full Stack freelancer",
        es: "Desarrollador Full Stack freelance",
        en: "Freelance Full Stack Developer",
      },
      logoUrl: "",
      start: "",
      end: { pt: "Atual", es: "Actualidad", en: "Present" },
      description: {
        pt: "Faço sistemas e sites sob medida, em português, espanhol e inglês. O maior é a RZ Importados, uma loja online completa com backend próprio. Também fiz sites em Next.js pra negócios na Espanha e em Andorra.",
        es: "Hago sistemas y webs a medida, en portugués, español e inglés. El más grande es RZ Importados, una tienda online completa con backend propio. También he hecho webs en Next.js para negocios en España y Andorra.",
        en: "I build custom systems and websites in Portuguese, Spanish and English. The biggest one is RZ Importados, a complete online store with its own backend. I've also built Next.js websites for businesses in Spain and Andorra.",
      },
    },
  ],
  projects: [
    {
      title: "Afetum",
      href: "https://afetum.com",
      category: {
        pt: "SaaS · Projeto principal",
        es: "SaaS · Proyecto principal",
        en: "SaaS · Main project",
      },
      subtitle: { pt: "Skurt Brasil", es: "Skurt Brasil", en: "Skurt Brasil" },
      description: {
        pt: "SaaS pra criar páginas personalizadas com fotos, mensagens, música e animações, feito pra Skurt Brasil. Trabalho como full stack: front, API, autenticação, banco e integrações.",
        es: "SaaS para crear páginas personalizadas con fotos, mensajes, música y animaciones, hecho para Skurt Brasil. Trabajo como full stack: front, API, autenticación, base de datos e integraciones.",
        en: "SaaS for creating personalized pages with photos, messages, music and animations, built for Skurt Brasil. I work across the full stack: front end, API, authentication, database and integrations.",
      },
      technologies: ["TypeScript", "Next.js", "Node.js", "Supabase"],
      links: [
        {
          type: { pt: "Site", es: "Web", en: "Website" },
          href: "https://afetum.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "RZ Importados",
      href: "",
      category: { pt: "E-commerce", es: "E-commerce", en: "E-commerce" },
      subtitle: {
        pt: "Projeto para cliente",
        es: "Proyecto para cliente",
        en: "Client project",
      },
      description: {
        pt: "Loja online completa feita pro negócio de um cliente: catálogo, carrinho, pedidos, frete por CEP, pagamento pelo Mercado Pago e painel admin com relatórios. Backend próprio com 61 endpoints e 15 tabelas.",
        es: "Tienda online completa hecha para el negocio de un cliente: catálogo, carrito, pedidos, envío por código postal, pagos con Mercado Pago y panel de administración con informes. Backend propio con 61 endpoints y 15 tablas.",
        en: "Complete online store built for a client's business: catalog, cart, orders, shipping by postal code, Mercado Pago payments and an admin panel with reports. Custom backend with 61 endpoints and 15 tables.",
      },
      technologies: ["JavaScript", "Node.js", "Express", "SQLite", "Mercado Pago"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Momentum Andorra",
      href: "",
      category: {
        pt: "Site institucional",
        es: "Web corporativa",
        en: "Business website",
      },
      subtitle: {
        pt: "Projeto para cliente",
        es: "Proyecto para cliente",
        en: "Client project",
      },
      description: {
        pt: "Site pra um cliente de experiências de wellness e gastronomia em Andorra, todo em espanhol.",
        es: "Web para un cliente de experiencias de wellness y gastronomía en Andorra, toda en español.",
        en: "Website for a wellness and gastronomy experiences business in Andorra, fully in Spanish.",
      },
      technologies: ["TypeScript", "Next.js", "Tailwind"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Nexo",
      href: "",
      category: { pt: "5 sites", es: "5 webs", en: "5 websites" },
      subtitle: {
        pt: "Projetos para clientes",
        es: "Proyectos para clientes",
        en: "Client projects",
      },
      description: {
        pt: "5 sites em Next.js pra clientes, um pra cada setor: restaurantes, advocacia, beleza, farmácias e negócios pet.",
        es: "5 webs en Next.js para clientes, una para cada sector: restaurantes, abogacía, belleza, farmacias y negocios de mascotas.",
        en: "5 Next.js websites for clients, one per industry: restaurants, law firms, beauty, pharmacies and pet businesses.",
      },
      technologies: ["TypeScript", "Next.js", "Tailwind"],
      links: [],
      image: "",
      video: "",
    },
  ],
} as const;
