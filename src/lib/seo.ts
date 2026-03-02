const BASE_URL = import.meta.env.SITE || "https://disparopro.com.br";

export function getCanonicalUrl(path: string): string {
  // Removes trailing slash if exists for consistency
  const cleanPath = path.replace(/\/$/, "");
  if (!cleanPath) return BASE_URL;
  return `${BASE_URL}${cleanPath.startsWith("/") ? "" : "/"}${cleanPath}`;
}

export function generateDefaultSeoData() {
  return {
    title: "Dispare SMS e Torpedo de Voz em Massa - Disparo Pro",
    description:
      "Alcance até 98% do seu público-alvo! Tenha acesso a uma plataforma simples e intuitiva para disparar mensagens em massa.",
    image: `${BASE_URL}/og/default.png`,
    type: "website",
  };
}
