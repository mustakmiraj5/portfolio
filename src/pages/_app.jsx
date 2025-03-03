import '@/styles/globals.css';

import {
  Calistoga,
  Inter,
  Montserrat,
  Playfair_Display,
  Work_Sans,
} from 'next/font/google';

const playFairDisplayFont = Playfair_Display({
  variable: '--font-playfair-display',
  weights: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const workSansFont = Work_Sans({
  variable: '--font-work-sans',
  weights: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const montserratFont = Montserrat({
  variable: '--font-montserrat',
  weights: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={` ${workSansFont.variable} ${playFairDisplayFont.variable} ${inter.variable} ${montserratFont.variable} ${calistoga.variable} `}
    >
      <Component {...pageProps} />
    </main>
  );
}
