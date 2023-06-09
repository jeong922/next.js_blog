'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeButton from './ThemeButton';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className='fixed z-30 w-full bg-white border-b px-7 dark:bg-slate-900 dark:text-darkModeText dark:border-slate-700'>
      <div className='flex flex-col items-center justify-between w-full py-5 mx-auto max-w-screen-2xl sm:flex-row'>
        <Link className='text-2xl font-bold' href='/'>
          <h1>{"Jeong's Blog"}</h1>
        </Link>
        <nav className='flex gap-4 mt-4 text-sm uppercase sm:mt-0'>
          <ThemeButton />
          <Link
            href='/'
            className={`${
              pathname === '/' && 'text-blue-900 font-bold dark:text-blue-500'
            }`}
          >
            Home
          </Link>
          <Link
            href='/posts'
            className={`${
              pathname === '/posts' &&
              'text-blue-900 font-bold dark:text-blue-500'
            }`}
          >
            Posts
          </Link>
          <Link
            href='/contact'
            className={`${
              pathname === '/contact' &&
              'text-blue-900 font-bold dark:text-blue-500'
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
