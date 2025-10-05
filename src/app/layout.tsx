import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import clsx from "clsx";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-black",
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <body className="antialiased max-w-3xl mx-auto">
        <main className="flex-auto min-w-0 flex flex-col pt-6 px-4">
          <Navbar />
          {children}
          {/*<Footer />*/}
          {/*<Analytics />*/}
          {/*<SpeedInsights />*/}
        </main>
      </body>
    </html>
  );
}
