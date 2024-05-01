import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          {/* Toast Notifications */}

          {/* Header */}
          <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
            <Header />
          </header>

          {/* Main */}
          <div className="bg-[#f4f2ee] flex-1 w-full">
            {children}
          </div>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
