export const ROUTES = {
  HOME: "/",
  PLANOS: "/planos",
  CONTATO: "/contato",
  MATERIAIS: "/materiais",
  LOGIN: "https://auth.disparopro.com.br/",

  BLOG: {
    HOME: "/blog",
    POST: (slug: string) => `/blog/${slug}`,
    CATEGORY: (slug: string) => `/blog/categoria/${slug}`,
  },

  CANAIS: {
    WHATSAPP: "/canais/whatsapp-marketing",
    RCS: "/canais/rcs",
    SMS: "/canais/disparo-sms",
    VOZ: "/canais/disparo-voz",
    EMAIL: "/canais/disparo-de-email",
  },
  APIS: {
    INDEX: "/apis",
    INTEGRATIONS: "/apis/integracoes",
  },
} as const;
