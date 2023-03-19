import "./globals.css";

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
      <body>
        <main className="flex min-h-screen flex-col w-full px-4 lg:px-0 lg:mx-auto lg:max-w-3xl">
          {children}
        </main>
      </body>
    </html>
  );
}
