import { Post } from '@/app/service/posts';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.path}`} key={post.path}>
      <div className='p-2 shadow-lg cursor-pointer'>
        {/* 여기 div 대신 이미지 들어갈 자리 */}
        <div className='w-full h-32 bg-gray-500'>썸네일 들어가야하는 자리</div>
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
