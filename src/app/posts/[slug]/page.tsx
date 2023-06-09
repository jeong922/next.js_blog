import AdjacentPost from '@/components/AdjacentPost';
import PostContent from '@/components/PostContent';
import { getFeaturedPosts, getPostData } from '@/service/posts';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, description } = await getPostData(params.slug);
  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return (
    <article className='w-full p-4 mb-4 overflow-hidden bg-gray-100 rounded-md dark:bg-[#161616]'>
      <div className='relative flex items-center justify-center'>
        <Image
          className='w-full mb-4 shadow-lg h-1/5 max-h-[300px] object-cover brightness-75'
          src={`/images/posts/${post.path}.png`}
          alt={post.title}
          width={650}
          height={420}
        />
        <div className='absolute flex flex-col items-center justify-center text-white'>
          <h2 className='text-4xl font-bold'>{post.title}</h2>
          <p className='font-bold opacity-70 line-clamp-2'>
            {post.description}
          </p>
        </div>
      </div>
      <PostContent post={post} />
      <section className='flex shadow-md'>
        {post.prev && <AdjacentPost post={post.prev} type='prev' />}
        {post.next && <AdjacentPost post={post.next} type='next' />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
