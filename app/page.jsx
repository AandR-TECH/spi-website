// app/page.jsx
// Home page for the SPI QLD website. This server component composes the
// different sections of the landing page: a hero banner, a safety
// overview, an explanatory call‑to‑action about fire suppression and a
// contact teaser. Textual content is adapted from the original site【179737432644349†L15-L37】【179737432644349†L39-L45】.

import HeroSection from '../components/HeroSection';
import Link from 'next/link';

export default async function HomePage() {
  return (
    <>
      {/* Hero banner */}
      <HeroSection
        title="The Trusted Plumbing & Fire Suppression Experts"
        subtitle="Specialised Plumbing Installation is a small business that specialises in plumbing services, gas fitting, and installation and servicing of wet fire suppression systems. If you’re located within the greater South‑East QLD or Northern NSW, our company can be counted on to deliver quality service to you."
        imageSrc="/assets/hero-fire.png"
        ctaLabel="Get to Know Our Company"
        ctaHref="/about"
      />

      {/* Safety overview section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Your Safety is Our Priority</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our goal is to provide a range of solutions to suit domestic, commercial
            and agricultural applications.
          </p>
        </div>
      </section>

      {/* Fire suppression call‑to‑action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Kill Fire Before it Kills You</h2>
            <p className="text-gray-700 mb-4">
              A smoke alarm is an awareness item, whereas a fire suppression
              system is proactive in extinguishing the fire, saving lives and
              property. Installing a sprinkler system will ensure that it will
              kill the fire before it kills you. For peace of mind, look no
              further than SPI.
            </p>
            <Link
              href="/services"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow"
            >
              Learn About Our Services
            </Link>
          </div>
          {/* Decorative image for this section */}
          <div className="hidden md:block h-64 w-full bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: 'url(/assets/gas-energy.png)' }}></div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Get in Touch With Us</h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Don’t hesitate to call reliable professionals for plumbing and fire
            suppression services. Let us assist you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded shadow"
          >
            Send Us a Message
          </Link>
        </div>
      </section>
    </>
  );
}