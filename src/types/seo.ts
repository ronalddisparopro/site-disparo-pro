export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedAt?: string;
  author?: string;
}
