import type { Metadata } from 'next';
// Google Fonts disabled due to potential network timeouts in local environment
// import { Vazirmatn, Lalezar } from 'next/font/google';
import './globals.css';

// const vazirmatn = Vazirmatn({ subsets: ['arabic'], variable: '--font-vazir' });
// const lalezar = Lalezar({ weight: '400', subsets: ['arabic'], variable: '--font-lalezar' });

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
      <body className={`font-sans bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
