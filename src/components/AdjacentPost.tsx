import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

export default function AdjacentPost({ post, type }: Props) {
  return (
    <Link
      href={`/posts/${post.path}`}
      className='relative w-full bg-black max-h-56'
    >
      <Image
        className='object-cover w-full opacity-40 max-h-56'
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={150}
        height={100}
      />
      <div className='absolute flex items-center justify-around w-full px-3 text-white -translate-x-1/2 -translate-y-1/2 sm:px-8 group top-1/2 left-1/2'>
        {type === 'prev' && (
          <BsArrowLeftCircle className='m-4 text-3xl opacity-70 group-hover:opacity-100 sm:text-5xl' />
        )}
        <div className='w-full text-center'>
          <h3 className='text-sm font-bold sm:text-2xl'>{post.title}</h3>
          <p className='text-xs font-bold sm:text-sm opacity-70 line-clamp-2'>
            {post.description}
          </p>
        </div>
        {type === 'next' && (
          <BsArrowRightCircle className='m-4 text-3xl opacity-70 group-hover:opacity-100 sm:text-5xl' />
        )}
      </div>
    </Link>
  );
}
