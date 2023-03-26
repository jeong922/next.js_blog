import styles from './page.module.css';
import Profile from '@/components/Profile';
import FeaturedPosts from '@/components/FeaturedPosts';
import CarouselPosts from '@/components/CarouselPosts';
import Banner from '@/components/Banner';

export default function HomePage() {
  return (
    <section className='py-4'>
      {/* <Banner /> */}
      <Profile />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  );
}
