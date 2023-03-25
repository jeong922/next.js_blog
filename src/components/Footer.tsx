import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='bg-gray-200 py-3 px-7'>
      <a
        href='https://github.com/jeong922/next.js_blog'
        className='flex items-center text-xs text-gray-500'
      >
        <AiFillGithub className='h-5 w-5 mr-2' />
        github.com/jeong922/next.js_blog
      </a>
    </footer>
  );
}
