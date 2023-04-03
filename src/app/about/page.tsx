import Profile from '@/components/Profile';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
  description: '블로그 주인 소개',
};

export default function AboutPage() {
  return (
    <div className='py-4'>
      <Profile />
    </div>
  );
}
