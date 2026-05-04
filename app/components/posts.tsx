import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="container mx-auto px-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block mb-6 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-2">
              {post.metadata.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {post.metadata.summary || 'No summary available.'}
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
              <span>Published on: {formatDate(post.metadata.publishedAt)}</span>
            </div>
          </Link>
        ))}
    </div>
  );
}
