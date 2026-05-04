import Search from 'app/components/search';

export const metadata = {
  title: 'Search Blog Posts',
  description: 'Find blog posts by keywords.',
};

export default function Page() {
  return (
    <section>
      <Search />
    </section>
  );
}
