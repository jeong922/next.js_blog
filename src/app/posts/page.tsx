import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '../../service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
  description: '블로그 포스트들',
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
