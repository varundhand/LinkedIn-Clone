
import React from 'react';
import Header from '@/components/Header';
import { ClerkProvider } from '@clerk/nextjs';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
            <Header />
          </header>

          {/* Main content */}
          <div className="bg-[#f4f2ee] flex-1 w-full">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default Layout;
