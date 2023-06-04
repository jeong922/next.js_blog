import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';

export default function PostContent({ post }: { post: PostData }) {
  return (
    <section className='flex flex-col'>
      {/* <h2 className='mb-2 text-4xl font-bold'>{post.title}</h2> */}
      <p className='self-end'>{post.date.toString()}</p>
      <MarkdownViewer content={post.content} />
    </section>
  );
}
