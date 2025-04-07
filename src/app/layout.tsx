// src/app/layout.tsx
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google'; 
import './globals.css';
import Navbar from '@/components/Navbar';

const rubik = Rubik({
  weight: ['400', '500', '600', '700'], // Specify the weights
  subsets: ['latin'],
});

// Nick Golebiewski, a Brooklyn Navy Yard-based visual artist and full stack software engineer

export const metadata: Metadata = {
  title: 'Nick Golebiewski Art and Tech Portfolio',
  description: 'Nick Golebiewski is a software engineer and an artist using distinct processes, including painting, super 8 film and shadow puppet performances, to demystify urban culture and city life, with a studio in the Brooklyn Navy Yard',
  keywords: ["Nick Golebiewski", "artist", "software engineer", "Brooklyn Navy Yard", "Nick’s Lunchbox Service"],
  authors: [{ name: "Nick Golebiewski" }],
  openGraph: {
    title: "About Nick Golebiewski",
    description: "Artist and software engineer blending tech and hand-made art in NYC.",
    url: "https://nickgolebiewski.art/about",
    siteName: "Nick Golebiewski",
    images: [
      {
        url: "https://nickgolebiewski.art/images/chinatown/1.jpg",
        width: 1200,
        height: 800,
        alt: "Nick Golebiewski's Chinatown - Grand Street Painting",
      },
    ],
    type: "website",
  },
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