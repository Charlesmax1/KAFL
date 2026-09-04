import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "KAFL - Kenyan Australian Football League",
  description: "The official website of the Kenyan Australian Football League. Uniting communities through football across Australia.",
  keywords: "KAFL, Kenyan Australian Football, Australian Football, Kenyan Football, African Football Australia",
  openGraph: {
    title: "KAFL - Kenyan Australian Football League",
    description: "The official website of the Kenyan Australian Football League",
    type: "website",
    url: "https://kafl.org.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}