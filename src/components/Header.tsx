import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  return (
    <header className='fixed flex flex-col items-center justify-between w-full py-5 bg-white px-7 sm:flex-row max-w-screen-2xl'>
      <Link className='flex items-center text-2xl font-bold' href='/'>
        <h1>{"Jeong's Blog"}</h1>
      </Link>
      <nav className='flex gap-4 mt-4 text-sm uppercase sm:mt-0'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
}
