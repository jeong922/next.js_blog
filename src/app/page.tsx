import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Profile from '@/components/Profile';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section className='py-4'>
      <Profile />
    </section>
  );
}
