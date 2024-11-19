import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yumemi Coding Test',
  description: 'Yumemi coding test output by @ryunosuke',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
