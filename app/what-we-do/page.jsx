// app/what-we-do/page.jsx
// "What We Do" page summarising the core focus areas of the business. It
// presents an introductory section followed by cards for each service
// category and ends with a call‑to‑action encouraging visitors to learn
// more about the company. The text draws from the original "What We Do"
// page【376629693177735†L15-L29】【376629693177735†L34-L50】.

import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';

export default function WhatWeDoPage() {
  const categories = [
    {
      title: 'Plumbing',
      description:
        'Whether they’re simple household tap repairs or complex pipe installations, you can depend on us.',
      image: '/assets/plumbing-water.png',
      href: '/services#plumbing',
    },
    {
      title: 'Gas Fitting',
      description:
        'Installing gas systems can be challenging; our licenced team will handle it safely and efficiently.',
      image: '/assets/gas-energy.png',
      href: '/services#gas-lpg-natural',
    },
    {
      title: 'Fire Suppression',
      description:
        'Protect your property and your family from fire hazards with hydrants, hose reels and sprinklers.',
      image: '/assets/hero-fire.png',
      href: '/services#fire-suppression',
    },
  ];

  return (
    <div>
      {/* Intro section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Striving to Provide Quality Service</h1>
          <p className="text-lg text-gray-700">
            At Specialised Plumbing Installation, we value our clients’ trust in us.
            That’s why we always go the extra mile to be the best at what we do.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <ServiceCard
              key={cat.title}
              title={cat.title}
              description={cat.description}
              image={cat.image}
              href={cat.href}
              buttonLabel="Learn More"
            />
          ))}
        </div>
      </section>

      {/* Exemplary services section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Exemplary Fire Protection Services for All</h2>
          <p className="text-gray-700 mb-6">
            We recognise that households are vulnerable to fire damage and
            devastation. Since 2007, we have been providing our services to
            various sites such as multi‑story towers, aged care facilities,
            commercial buildings and car parks. Our employees are well trained
            and adhere to the best practices of the fire protection industry.
            With us, you’re sure that you’ll only get exemplary installation and
            servicing for internal and external fire suppression systems.
          </p>
          <Link
            href="/about"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded shadow"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}