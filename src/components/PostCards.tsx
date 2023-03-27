import { Post } from '@/app/service/posts';
import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

export default function PostCards({ posts }: Props) {
  return (
    <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
