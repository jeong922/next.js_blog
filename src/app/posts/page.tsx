import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '../../service/posts';

export const metadata = {
  title: `Jeong's Blog | Posts`,
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <section className='p-4 mt-10'>
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}
