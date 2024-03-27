import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globalTheme.css';
import { MSWComponent } from '@/app/_component/MSWComponent';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const API = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_JS_KEY}&libraries=services,clusterer,drawing&autoload=false`;

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
        <Script src={API} strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
