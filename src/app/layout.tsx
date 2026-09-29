import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PinFind - Pinterest inside Telegram",
  description: "An in-development Telegram inline experience for discovering and sharing Pinterest content directly inside conversations.",
  openGraph: {
    title: "PinFind - Pinterest inside Telegram",
    description: "An in-development Telegram inline experience for discovering and sharing Pinterest content directly inside conversations.",
    url: "https://pinfind.example.com",
    siteName: "PinFind",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col bg-zinc-950 text-zinc-50`}>
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xl font-semibold tracking-tight text-zinc-50 hover:text-white transition-colors">
                PinFind
              </Link>
              <span className="hidden sm:inline-block text-sm text-zinc-400 border-l border-zinc-800 pl-4">
                Telegram × Pinterest
              </span>
            </div>
            <nav>
              <Link href="/privacy" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">
                Privacy
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 w-full container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          {children}
        </main>

        <footer className="border-t border-zinc-800/50 py-8">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>PinFind</p>
            <p>Built by BuildByBits</p>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
