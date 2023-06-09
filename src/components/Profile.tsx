import { AiFillGithub } from 'react-icons/ai';

export default function Profile() {
  return (
    <section className='mt-8'>
      <div className='w-32 h-32 mx-auto mb-2 bg-blue-400 rounded-full'></div>
      <div className='flex flex-col items-center justify-center gap-y-2 '>
        <h2 className='text-2xl font-bold dark:text-darkModeText'>Jeong</h2>
        <a
          href='https://github.com/jeong922'
          className='flex items-center text-gray-600 hover:text-blue-900 dark:hover:text-blue-500 dark:text-gray-400'
        >
          <AiFillGithub className='mr-2 text-xl' />
          <p className='text-xs'> jeong922</p>
        </a>
        <span className='text-xs text-gray-400'>코딩 잘하고 싶다..</span>
      </div>
    </section>
  );
}
