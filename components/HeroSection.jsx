// components/HeroSection.jsx
// A reusable hero section component that displays a background image with
// overlaying text and an optional call‑to‑action button. The image path
// should refer to a file in the `/public/assets` directory so that Next.js can
// serve it statically. Tailwind CSS classes provide responsive spacing and
// text alignment.

import Link from 'next/link';

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  ctaLabel,
  ctaHref,
}) {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Semi‑transparent overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center justify-center">
        {subtitle && <p className="text-lg mb-2 max-w-xl">{subtitle}</p>}
        {title && <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-2xl leading-tight">{title}</h1>}
        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-block mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow transition-colors"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}