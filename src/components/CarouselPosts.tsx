import { getNonFeaturedPosts } from '@/service/posts';
import MultiCarousel from './MultiCarousel';
import PostCard from './PostCard';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className='p-4 mt-10'>
      <h2 className='text-2xl font-bold'>You May Like</h2>
      {posts.length ? (
        <MultiCarousel>
          {posts.map((post) => (
            <PostCard key={post.path} post={post} />
          ))}
        </MultiCarousel>
      ) : (
        <div className='flex items-center justify-center h-24 min-h-[300px]'>
          <p className='font-bold text-gray-600'>아직 정보가 없어요.</p>
        </div>
      )}
    </section>
  );
}
