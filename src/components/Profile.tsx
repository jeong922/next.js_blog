import { AiFillGithub } from 'react-icons/ai';

export default function Profile() {
  return (
    <div>
      <div className='bg-blue-400 h-32 w-32 rounded-full mb-2 mx-auto'></div>
      <div className='flex flex-col justify-center items-center gap-y-2'>
        <h2 className='font-bold text-2xl'>Jeong</h2>
        <a
          href='https://github.com/jeong922'
          className='flex items-center text-xs'
        >
          <AiFillGithub className='h-5 w-5 mr-2' />
          jeong922
        </a>
        <span className='text-xs text-gray-500'>코딩 잘하고 싶다..</span>
      </div>
    </div>
  );
}
