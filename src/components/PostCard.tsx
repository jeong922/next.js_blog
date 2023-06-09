import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.path}`} key={post.path}>
      <div className='overflow-hidden duration-300 ease-in-out rounded-md shadow-lg cursor-pointer hover:-translate-y-1 dark:bg-slate-800 dark:shadow-zinc-900 group'>
        <Image
          className='w-full duration-300 ease-linear transform aspect-video group-hover:scale-105'
          src={`/images/posts/${post.path}.png`}
          alt={post.title}
          width={300}
          height={200}
          priority
        />
        <div className='flex flex-col items-center p-2 '>
          <time className='self-end text-sm text-gray-400'>
            {post.date.toString()}
          </time>
          <p className='my-2 text-base font-bold truncate line-clamp-2 dark:text-darkModeText'>
            {post.title}
          </p>
          <p className='text-xs text-blue-300'>{post.category}</p>
        </div>
      </div>
    </Link>
  );
}
