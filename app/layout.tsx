import React from 'react';
import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'CTR Home',
  description: 'Premium furniture for every home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
