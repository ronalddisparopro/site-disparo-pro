export interface SeoProps {
  title: string;
  description?: string | null;
  canonical?: string;
  image?: string | null;
  type?: "website" | "article" | "profile";
  publishedAt?: string;
  author?: string;
}
