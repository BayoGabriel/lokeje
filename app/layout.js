import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Lokraft',
  description: 'Hmmmm',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={``}>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
