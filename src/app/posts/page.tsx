import FilterablePosts from '@/components/FilterablePosts';
import React from 'react';
import { getAllPosts } from '../service/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  console.log(categories);
  return (
    <section className='p-4 mt-10'>
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}
