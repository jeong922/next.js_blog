import { getPostData } from '@/app/service/posts';
import MarkdownViewer from '@/components/MarkdownViewer';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return (
    <article className='w-full p-3 overflow-hidden'>
      <section className='flex flex-col'>
        <h2 className='mb-2 text-4xl font-bold'>{post.title}</h2>
        <p className='self-end'>{post.date.toString()}</p>
        <MarkdownViewer content={post.content} />
      </section>
    </article>
  );
}
