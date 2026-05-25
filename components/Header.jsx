// components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1076BA]/25 bg-[#062238]/95 text-white shadow-lg shadow-black/10 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-10">
        <div className="relative flex h-24 items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-[#1076BA]/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-2xl lg:-mb-7"
            aria-label="SPI QLD Home"
          >
            <Image
              src="/assets/spi-logo.png"
              alt="SPI QLD Logo"
              width={260}
              height={118}
              priority
              className="h-auto w-[190px] object-contain sm:w-[215px] lg:w-[245px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center gap-1 rounded-2xl border border-[#1076BA]/25 bg-white/[0.05] p-1 shadow-inner">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-5 py-3 text-sm font-bold text-blue-50/80 transition duration-200 hover:bg-[#1076BA] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7FC7F2]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href="tel:0431818718"
              className="inline-flex items-center justify-center rounded-xl border border-[#1076BA]/35 bg-white/[0.03] px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-[#1076BA] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7FC7F2]"
            >
              0431 818 718
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#1076BA]/30 bg-white/[0.05] text-white transition duration-200 hover:bg-[#1076BA] lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Menu</span>

            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-5 rounded bg-white transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded bg-white transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-5 rounded bg-white transition ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-[#1076BA]/25 py-5 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-blue-50/85 transition duration-200 hover:bg-[#1076BA] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:0431818718"
                className="inline-flex items-center justify-center rounded-xl border border-[#1076BA]/35 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-[#1076BA] hover:text-white"
              >
                Call 0431 818 718
              </a>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition duration-200 hover:bg-red-700"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}