import { getFeaturedPosts } from '@/service/posts';
import PostCards from './PostCards';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className='p-4 mt-10'>
      <h2 className='text-2xl font-bold dark:text-darkModeText'>
        Featured Posts
      </h2>
      <PostCards posts={posts} />
    </section>
  );
}
