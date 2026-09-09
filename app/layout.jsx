/*
 * Root layout for the SPIAUS website.
 *
 * This file defines the overall HTML structure applied to every page in
 * the application. It sets up the document's language, includes global
 * metadata, imports global styles and wraps page content with a
 * persistent header and footer. Using the App Router in Next.js 15
 * allows us to define this layout at the top level so that it is
 * automatically applied to all pages under the `/app` directory.
 */

import '../styles/globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Export metadata according to Next.js App Router conventions. When you
// specify default and template values for the title, Next.js will
// automatically compose the correct `<title>` element for each page.
export const metadata = {
  title: {
    default: 'SPIAUS',
    template: '%s – SPIAUS',
  },
  description:
    'Specialised Plumbing Installation in Queensland provides plumbing, gas fitting and wet fire suppression services for domestic, commercial and agricultural clients.',
  keywords: ['Specialised Plumbing Installation', 'QLD', 'fire suppression', 'gas fitting', 'plumbing'],
  authors: [{ name: 'Specialised Plumbing Installation QLD', url: 'https://www.spiaus.com.au' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
        {/* Persistent header with navigation */}
        <Header />
        <main className="flex-1">
          {children}
        </main>
        {/* Persistent footer */}
        <Footer />
      </body>
    </html>
  );
}
