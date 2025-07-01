// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Build With Rai',
  description: 'Portfolio of Raidion Fails — Strategy, Ops, and Creative Engineering.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-black bg-white">
        <Nav />
        <main className="min-h-screen px-4">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
