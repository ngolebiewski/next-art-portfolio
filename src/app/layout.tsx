// src/app/layout.tsx
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google'; 
import './globals.css';
import Navbar from '@/components/Navbar';

const rubik = Rubik({
  weight: ['400', '500', '600', '700'], // Specify the weights
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Art Portfolio',
  description: 'Artist Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}