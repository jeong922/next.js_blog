import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between py-5 px-7 items-center sm:flex-row flex-col fixed bg-white w-full'>
      <Link className='flex items-center text-2xl font-bold' href='/'>
        <h1>{"Jeong's Blog"}</h1>
      </Link>
      <nav className='flex gap-4 uppercase mt-4 sm:mt-0 text-sm'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
}
