import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.path}`} key={post.path}>
      <div className='p-2 overflow-hidden duration-300 ease-in-out rounded-md shadow-lg cursor-pointer hover:scale-105'>
        <Image
          className='w-full aspect-video'
          src={`/images/posts/${post.path}.png`}
          alt={post.title}
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center'>
          <time className='self-end text-sm text-gray-400'>
            {post.date.toString()}
          </time>
          <p className='my-2 text-base font-bold truncate line-clamp-2'>
            {post.title}
          </p>
          <p className='text-xs text-blue-300'>{post.category}</p>
        </div>
      </div>
    </Link>
  );
}
