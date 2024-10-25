import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Global-Eye Intelligence | India\'s Premier Geopolitical Intelligence Platform',
  description: 'Access comprehensive geopolitical intelligence and analysis for informed decision-making. India\'s leading platform for strategic insights and global monitoring.',
  keywords: 'geopolitical intelligence, strategic analysis, global monitoring, intelligence platform, India',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}