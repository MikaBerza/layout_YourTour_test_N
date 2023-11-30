import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1.0',

  description: 'Продажа туров для идеальных путешествий и отдыха',
  keywords: 'туры, путешествия, отдых, экскурсии, вакансии, бронирование, путевки, выгодные предложения, отели, вечеринки, авиабилеты, горящие туры, путешествия по всему миру',
  themeColor: '#f9f7f4',

  title: 'YourTour.ru',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
