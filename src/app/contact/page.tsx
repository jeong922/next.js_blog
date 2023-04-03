import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { AiFillGithub } from 'react-icons/ai';

export const metadata: Metadata = {
  title: 'Contact',
  description: '블로그 주인에게 메일 보내기',
};

export default function ContactPage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <section className='flex flex-col items-center my-8'>
        <h2 className='mb-3 text-2xl font-semibold'>Contact Me</h2>
        <a
          href='https://github.com/jeong922'
          className='flex items-center text-gray-600 hover:text-blue-900'
        >
          <AiFillGithub className='mr-2 text-2xl' />
          <p>jeong922</p>
        </a>
      </section>
      <ContactForm />
    </div>
  );
}
