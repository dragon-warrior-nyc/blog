import { getBlogPosts } from 'app/blog/utils';

export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://dragon-warrior-nyc.github.io' // Update with your custom domain if you have one
    : 'http://localhost:3000';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/search'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
