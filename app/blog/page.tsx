import { BlogPosts } from 'app/components/posts';

export const metadata = {
  title: "Cun (Matthew) Mu's Blog",
  description:
    'Thoughts and insights on data science, machine learning, AI-powered search, and more.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Recent Posts
      </h1>
      <BlogPosts />
    </section>
  );
}
