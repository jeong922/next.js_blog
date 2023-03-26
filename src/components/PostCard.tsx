type Props = {
  title: string;
};

export default function PostCard({ title }: Props) {
  return (
    <div>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='grid gap-3 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='p-2 shadow-lg'>
          <div className='w-full h-32 bg-gray-500'>
            썸네일 들어가야하는 자리
          </div>
          <div>
            <p className='text-sm text-gray-400 text-end'>2023.03.25</p>
            <p className='text-base font-bold text-center line-clamp-2'>
              제목이 들어갈 자리
            </p>
            <p className='text-sm text-center text-blue-300'>카테고리</p>
          </div>
        </div>
      </div>
    </div>
  );
}
