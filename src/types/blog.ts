export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  category: string;
}

export const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "O Futuro do Marketing por WhatsApp",
    slug: "futuro-marketing-whatsapp",
    excerpt:
      "Descubra como a API Oficial do WhatsApp está revolucionando a comunicação empresarial.",
    content:
      "<p>Conteúdo principal do artigo estruturado com HTML semântico.</p>",
    coverImage: "/images/blog/blog.png",
    author: "Equipe Disparo Pro",
    publishedAt: "2026-02-26T10:00:00Z",
    category: "whatsapp",
  },
  {
    id: "2",
    title: "Por que RCS é o novo SMS?",
    slug: "rcs-novo-sms",
    excerpt:
      "O RCS traz rich media e interatividade para as caixas de entrada dos usuários mobile.",
    content:
      "<p>A evolução das mensagens de texto com o padrão Rich Communication Services.</p>",
    coverImage: "/images/blog/rcs.jpg",
    author: "Especialista em Canais",
    publishedAt: "2026-02-25T14:30:00Z",
    category: "rcs",
  },
];
