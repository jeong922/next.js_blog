import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='py-3 bg-gray-200 px-7'>
      <div className='flex justify-between mb-1'>
        <p className='text-xs text-gray-500'>
          Copyright © jeong922. All Rights Reserved.
        </p>
        <a
          href='https://github.com/jeong922'
          className='flex items-center text-gray-600 hover:text-blue-900'
        >
          <AiFillGithub className='mr-2 text-xl ' />
        </a>
      </div>
      <a
        href='https://github.com/jeong922/next.js_blog'
        className='flex items-center text-xs text-gray-500 hover:text-blue-900'
      >
        <AiFillGithub className='w-5 h-5 mr-2' />
        github.com/jeong922/next.js_blog
      </a>
    </footer>
  );
}
