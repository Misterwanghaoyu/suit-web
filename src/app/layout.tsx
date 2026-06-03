import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavbarWrapper from '@/components/NavbarWrapper';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "SUITELITE - Define Your Style",
  description: "Tailored for excellence. High-quality suits and fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <NavbarWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
