// app/what-we-do/page.jsx
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Plumbing",
    description:
      "From household tap repairs through to complex pipe installations, SPI QLD provides practical plumbing solutions for homes, businesses and commercial sites.",
    image: "/assets/plumbing-water.png",
    href: "/services#plumbing",
  },
  {
    title: "Gas Fitting",
    description:
      "Licensed gas fitting for LPG, natural gas systems, appliance changeovers, hot water systems and commercial gas requirements.",
    image: "/assets/gas-energy.png",
    href: "/services#gas-lpg-natural",
  },
  {
    title: "Fire Suppression",
    description:
      "Wet fire suppression systems, hydrants, hose reels and sprinklers designed to help protect homes, businesses, rural properties and agricultural sites.",
    image: "/assets/hero-fire.png",
    href: "/services#fire-suppression",
  },
];

const experiencePoints = [
  "Domestic homes",
  "Commercial buildings",
  "Aged care facilities",
  "Car parks",
  "Rural properties",
  "Agricultural sites",
];

export const metadata = {
  title: "What We Do | SPI QLD",
  description:
    "SPI QLD provides plumbing, gas fitting, roofing and wet fire suppression services across Greater South-East Queensland and Northern NSW.",
};

export default function WhatWeDoPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#062238] py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1076BA]/35 via-[#062238] to-[#031522]" />
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#1076BA]/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-700/20 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
                What We Do
              </p>

              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Practical trade services for plumbing, gas and fire protection.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/80">
                Specialised Plumbing Installation provides licensed plumbing,
                gas fitting, roofing and wet fire suppression services for
                domestic, commercial, rural and agricultural properties across
                Greater South-East Queensland and Northern NSW.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  View Services
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-8 py-4 text-base font-bold text-white transition duration-200 hover:bg-white hover:text-[#062238] focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Hero image area */}
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-[#7FC7F2]/20 bg-white/[0.06] shadow-2xl">
              <Image
                src="/assets/hero-fire.png"
                alt="SPI QLD fire suppression and trade services"
                fill
                className="object-cover opacity-85"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062238]/95 via-[#062238]/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
                  Safety • Compliance • Practical Support
                </p>

                <p className="mt-3 max-w-md text-2xl font-bold leading-tight text-white">
                  Trade services built around protecting property and keeping
                  systems operational.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#1076BA]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-red-100 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1076BA]">
              Quality Service
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#062238] md:text-5xl">
              Reliable work across the core systems your property depends on.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              SPI QLD values the trust clients place in the business. Whether
              the work involves water, gas, roofing or fire suppression, the goal
              is to provide practical solutions completed safely and properly.
            </p>
          </div>
        </div>
      </section>

      {/* Categories with large images */}
      <section className="relative overflow-hidden bg-[#E8F4FB] py-20">
        <div className="container relative mx-auto px-6 md:px-10">
          <div className="grid gap-8">
            {categories.map((category, index) => (
              <article
                key={category.title}
                className="overflow-hidden rounded-3xl border border-[#1076BA]/15 bg-white shadow-2xl shadow-slate-950/10"
              >
                <div
                  className={`grid gap-0 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative min-h-[360px] overflow-hidden bg-[#062238] lg:min-h-[460px]">
                    <Image
                      src={category.image}
                      alt={`${category.title} services`}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#062238]/65 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1076BA]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="text-3xl font-bold tracking-tight text-[#062238] md:text-5xl">
                      {category.title}
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-slate-700">
                      {category.description}
                    </p>

                    <div className="mt-8">
                      <Link
                        href={category.href}
                        className="inline-flex items-center justify-center rounded-xl bg-[#062238] px-7 py-4 text-base font-bold text-white transition duration-200 hover:bg-[#1076BA] focus:outline-none focus:ring-2 focus:ring-[#7FC7F2]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fire Protection Feature */}
      <section className="relative overflow-hidden bg-[#062238] py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1076BA]/35 via-[#062238] to-[#031522]" />
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#1076BA]/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-700/20 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
                Fire Protection Services
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Fire suppression support for homes, businesses and high-risk
                sites.
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-50/80">
                SPI QLD recognises that households, businesses and rural
                properties are vulnerable to fire damage. Wet fire suppression
                systems can help reduce risk by acting before fire has a chance
                to spread further.
              </p>

              <div className="mt-8">
                <Link
                  href="/services#fire-suppression"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  View Fire Suppression Services
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-[#7FC7F2]/20 bg-white/[0.06] p-8 shadow-2xl">
              <p className="text-lg leading-8 text-blue-50/80">
                Since 2007, services have been provided across a range of sites
                including multi-storey towers, aged care facilities, commercial
                buildings and car parks. SPI QLD also works with rural and
                agricultural properties where internal and external fire
                suppression can provide practical protection.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {experiencePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-[#7FC7F2]/15 bg-white/[0.06] px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
                    <span className="text-sm font-bold text-blue-50">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-10">
          <div className="rounded-3xl border border-[#1076BA]/15 bg-[#E8F4FB] p-8 text-center shadow-xl md:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1076BA]">
              Need More Detail?
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-[#062238] md:text-5xl">
              Learn more about SPI QLD’s services or discuss your job directly.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              View the detailed services page or contact SPI QLD to request a
              quote for your property, business or rural site.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/30 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                View All Services
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#062238] px-8 py-4 text-base font-bold text-[#062238] transition duration-200 hover:bg-[#062238] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#062238]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}