import { AiFillGithub } from 'react-icons/ai';

export default function Profile() {
  return (
    <section className='mt-8'>
      <div className='w-32 h-32 mx-auto mb-2 bg-blue-400 rounded-full'></div>
      <div className='flex flex-col items-center justify-center gap-y-2'>
        <h2 className='text-2xl font-bold'>Jeong</h2>
        <a
          href='https://github.com/jeong922'
          className='flex items-center text-xs'
        >
          <AiFillGithub className='w-5 h-5 mr-2' />
          jeong922
        </a>
        <span className='text-xs text-gray-500'>코딩 잘하고 싶다..</span>
      </div>
    </section>
  );
}
