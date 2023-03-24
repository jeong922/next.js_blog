import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between py-5 px-7 items-center'>
      <Link className='flex items-center text-2xl font-bold' href='/'>
        <h1>{"Jeong's Blog"}</h1>
      </Link>
      <nav className=''>
        <Link className='uppercase mr-3' href='/'>
          Home
        </Link>
        <Link className='uppercase mr-3' href='/about'>
          About
        </Link>
        <Link className='uppercase mr-3' href='/posts'>
          Posts
        </Link>
        <Link className='uppercase' href='/contact'>
          Contact
        </Link>
      </nav>
    </header>
  );
}
