import Profile from '@/components/Profile';
import React from 'react';

export const metadata = {
  title: `Jeong's Blog | About`,
};

export default function AboutPage() {
  return (
    <div className='py-4'>
      <Profile />
    </div>
  );
}
