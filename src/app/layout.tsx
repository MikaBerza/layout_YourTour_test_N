import type { Metadata } from 'next';

import { Header } from '../components/commons/Header';
import { Footer } from '../components/commons/Footer';
import './globals.css';
import Head from 'next/head';
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
      <Head>
        <link rel='icon' href='./favicon.ico' sizes='any' />
        <link
          rel='apple-touch-icon'
          href='../../public/images/fav_icons_YT/apple-touch-icon.png'
          sizes='180x180'
        />
        <link
          rel='icon'
          href='../../public/images/fav_icons_YT/favicon-32x32.png'
          type='image/png'
          sizes='32x32'
        />
        <link
          rel='icon'
          href='../../public/images/fav_icons_YT/favicon-16x16.png'
          type='image/png'
          sizes='16x16'
        />
        <link rel='manifest' href='../../public/images/fav_icons_YT/site.webmanifest' />
        <link
          rel='mask-icon'
          href='../../public/images/fav_icons_YT/safari-pinned-tab.svg'
          color='#3b7e7b'
        />
      </Head>
      <body>
        <Header />
        <main className='bgc-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
