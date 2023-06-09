import { Inter } from 'next/font/google';

import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Library",
  description: "A movie library created with next.js and tmdb api.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col w-full px-6 lg:px-0 lg:mx-auto lg:max-w-5xl">
					<Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
