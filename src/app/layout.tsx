import type { Metadata } from 'next';

import { Header } from '../components/commons/Header';
import { Footer } from '../components/commons/Footer';
import './globals.css';

export const metadata: Metadata = {
  description: 'Продажа туров для идеальных путешествий и отдыха',
  keywords:
    'туры, путешествия, отдых, экскурсии, вакансии, бронирование, путевки, выгодные предложения, отели, вечеринки, авиабилеты, горящие туры, путешествия по всему миру',

  title: 'YourTour.ru',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body>
        <Header />
        <main className='bgc-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
