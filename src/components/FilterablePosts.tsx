'use client';
import { Post } from '@/service/posts';
import { useState } from 'react';
import Categories from './Categories';
import PostCards from './PostCards';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'ALL';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <PostCards posts={filtered} />
    </section>
  );
}
