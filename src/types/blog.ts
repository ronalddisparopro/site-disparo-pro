import { supabase } from "../lib/supabase";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  coverImage: string | null;
  author: string;
  publishedAt: string;
  category: string;
  categorySlug: string;
}

export async function getBlogPosts() {
  console.log('Fetching posts from Supabase...');
  // Note: If you renamed tables or foreign keys, 
  // you might need to adjust 'author' and 'category' below
  const { data: posts, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:authors (name),
      post_categories:post_categories (
        category:categories (name, slug)
      )
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Full Supabase Error:', JSON.stringify(error, null, 2));
    throw new Error(`Supabase Error: ${error.message} | Hint: ${error.hint || 'N/A'} | Details: ${error.details || 'N/A'}`);
  }

  console.log(`Fetched ${posts?.length || 0} posts.`);
  if (posts && posts.length > 0) {
    console.log('First raw post sample:', JSON.stringify(posts[0], null, 2));
  }

  return posts.map(post => {
    // Normalize content
    let contentHtml = "";
    if (typeof post.content === 'string') {
      contentHtml = post.content;
    } else if (post.content && typeof post.content === 'object') {
      // Handle the { html: "..." } structure or other JSON formats
      contentHtml = (post.content as any).html || JSON.stringify(post.content);
    }

    const authorData = post.author || post.authors;
    const categoryDataArray = post.post_categories || [];
    // Pega a primeira categoria se existir
    const categoryData = categoryDataArray.length > 0 && categoryDataArray[0].category 
      ? categoryDataArray[0].category 
      : null;

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: contentHtml,
      coverImage: post.cover_image_path || null,
      author: authorData?.name || "Equipe Disparo Pro",
      publishedAt: post.published_at,
      category: categoryData?.name || "Geral",
      categorySlug: categoryData?.slug || "geral",
    } as BlogPost;
  });
}
