import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: `Jeong's Blog`,
  description: `Next.js로 만든 Jeong's Blog`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className='flex flex-col w-full mx-auto max-w-screen-2xl'>
        <Header />
        <main className='grow sm:pt-20 pt-28'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
