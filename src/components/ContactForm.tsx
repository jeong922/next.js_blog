'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import StateBanner, { BannerData } from './StateBanner';
import { sendContactEmail } from '@/service/contact';

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = { from: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: '메일이 성공적으로 전송 되었습니다.',
          state: 'success',
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          message: '메일 전송에 실패했습니다.',
          state: 'error',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className='w-full max-w-md'>
      {banner && <StateBanner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className='flex flex-col w-full gap-2 p-4 my-4 text-white bg-gray-800 rounded-xl'
      >
        <label htmlFor='from' className='font-semibold'>
          Your Email
        </label>
        <input
          className='px-2 py-1 text-black'
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor='subject' className='font-semibold'>
          Subject
        </label>
        <input
          className='px-2 py-1 text-black'
          type='text'
          id='subject'
          name='subject'
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor='message' className='font-semibold'>
          Message
        </label>
        <textarea
          className='px-2 py-1 text-black'
          rows={10}
          id='message'
          name='message'
          required
          value={form.message}
          onChange={onChange}
        />
        <button className='bg-gray-500 hover:bg-gray-700'>Submit</button>
      </form>
    </section>
  );
}
