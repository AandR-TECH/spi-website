// components/Header.jsx
// This component renders the persistent header that appears on every page.
// It includes a top bar with the company's phone number and a navigation menu.
// The colours loosely follow the original site's palette: a dark blue bar
// with white text and a call‑to‑action tagline coloured red to mirror
// "Kill Fire Before It Kills You". Navigation links use Next.js' Link
// component for client‑side transitions.

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white">
      {/* Top bar with contact number */}
      <div className="hidden sm:block bg-blue-900 py-1 text-sm text-right pr-4">
        <a href="tel:0431818718" className="hover:underline">
          <span className="mr-1" role="img" aria-label="phone">📞</span>0431‑818‑718
        </a>
      </div>
      {/* Main header area */}
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          {/* Company title and tagline */}
          <Link href="/" className="text-2xl font-bold tracking-wide whitespace-nowrap">
            <span className="text-white">SPI QLD</span>
          </Link>
          <span className="hidden sm:inline-block text-sm ml-3 font-semibold">
            <span className="text-blue-100">Kill Fire Before&nbsp;</span>
            <span className="text-red-500">It Kills You</span>
          </span>
        </div>
        {/* Navigation menu */}
        <nav className="mt-4 sm:mt-0">
          <ul className="flex flex-col sm:flex-row gap-4 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/what-we-do" className="hover:text-red-400 transition-colors">What We Do</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-400 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-400 transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}