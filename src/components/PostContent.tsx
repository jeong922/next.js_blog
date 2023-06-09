import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';

export default function PostContent({ post }: { post: PostData }) {
  return (
    <section className='flex flex-col'>
      <p className='self-end dark:text-gray-400'>{post.date.toString()}</p>
      <MarkdownViewer content={post.content} />
    </section>
  );
}
