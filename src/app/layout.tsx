import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const vazirmatn = localFont({
  src: [
    {
      path: '../fonts/Vazirmatn-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Vazirmatn-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-vazir',
});

export const metadata: Metadata = {
  title: 'داستان ما',
  description: 'خاطرات مشترک ما',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} font-sans bg-nostalgia-bg text-nostalgia-wood overflow-x-hidden selection:bg-nostalgia-gold/30 selection:text-nostalgia-wood`}>
        <div className="film-grain" />
        <div className="vignette" />
        {children}
      </body>
    </html>
  );
}
