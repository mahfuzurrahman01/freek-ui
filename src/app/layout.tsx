import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your App",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex fixed left-0 top-0">
            <Sidebar />
          </div>
          <div className="flex flex-col lg:pl-64">
            <Navbar />
            <main className="flex-1 p-4 sm:p-6 lg:p-8 mt-16">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
