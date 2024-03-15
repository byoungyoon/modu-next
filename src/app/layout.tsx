import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globalTheme.css';
import { MSWComponent } from '@/app/_component/MSWComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '모두의 농구장',
  description: '주위의 농구장을 찾아보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        {children}
      </body>
    </html>
  );
}
