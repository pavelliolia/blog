import "./global.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className="text-black bg-white dark:text-white dark:bg-black"
    >
      <body className="antialiased max-w-3xl mx-auto">
        <main className="flex-auto min-w-0 flex flex-col pt-6 px-4">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
