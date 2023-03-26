import Image from 'next/image';

export default function Banner() {
  return (
    <div className='relative flex items-center justify-center w-full bg-gray-900 h-80'>
      <Image
        className='object-cover opacity-60'
        src={'/images/mainImage.jpg'}
        alt='bannerImage'
        fill={true}
      ></Image>
      <h2 className='absolute text-5xl font-bold text-white'>Hello World!</h2>
    </div>
  );
}
