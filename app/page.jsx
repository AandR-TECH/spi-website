// app/page.jsx
import HeroSection from "../components/HeroSection";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "SDA / NDIS Wet Fire Suppression Systems",
    description:
      "Compliant wet fire suppression systems for SDA / NDIS Specialist Disability Accommodation projects across QLD, NSW, VIC and SA.",
  },
  {
    title: "Plumbing Services",
    description:
      "Licensed plumbing work including installation, repairs, maintenance and practical solutions for homes, businesses and worksites.",
  },
  {
    title: "Gas Fitting",
    description:
      "Safe and compliant gas fitting services completed by qualified professionals for residential, commercial and rural applications.",
  },
  {
    title: "Rainwater Tanks, Roofing & Downpipes",
    description:
      "Rainwater tank, roof plumbing, guttering and downpipe work to help protect properties from water damage and drainage issues.",
  },
];

const trustPoints = [
  "QBCC Licensed",
  "Fully Insured",
  "NSW Fair Trading Contractor",
  "Industry association: MPAQ",
];

export default async function HomePage() {
  return (
    <>
      <HeroSection
        title="SDA / NDIS Wet Fire Suppression Specialists"
        subtitle="SPIAUS provides compliant wet fire suppression solutions for Specialist Disability Accommodation and NDIS projects across QLD, NSW, VIC and SA."
        imageSrc="/assets/hero-fire.png"
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />

      {/* Intro / Safety Overview */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#1076BA]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-red-100 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1076BA]">
              Safety First
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#062238] md:text-5xl">
              Compliant wet fire suppression systems for SDA / NDIS projects.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              SPIAUS specialises in compliant wet fire suppression systems for
              SDA / NDIS Specialist Disability Accommodation projects. We also
              provide plumbing, gas fitting, rainwater tank and roofing services
              across South East Queensland.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[#1076BA]/15 bg-[#E8F4FB] p-5 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#1076BA]/35 hover:shadow-md"
              >
                <p className="text-sm font-bold text-[#062238]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative overflow-hidden bg-[#062238] py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1076BA]/35 via-[#062238] to-[#031522]" />
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#1076BA]/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-700/20 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
                What We Do
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                SDA fire suppression first, backed by licensed trade services.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-blue-50/80">
              SPIAUS provides SDA / NDIS wet fire suppression systems for
              Specialist Disability Accommodation projects, along with practical
              plumbing, gas fitting, rainwater tank and roofing services across
              South East Queensland.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-[#7FC7F2]/20 bg-white/[0.06] p-7 shadow-2xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-[#7FC7F2]/35 hover:bg-white/[0.09]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1076BA]/20 ring-1 ring-[#7FC7F2]/30">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-blue-50/75">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Fire Suppression Feature */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#1076BA]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-red-100 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-[#062238] shadow-2xl">
              <Image
                src="/assets/gas-energy.png"
                alt="Fire suppression, plumbing and gas fitting services"
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062238]/95 via-[#062238]/35 to-transparent" />
              <div className="absolute inset-0 bg-[#1076BA]/10" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
                  Fire Protection
                </p>

                <p className="mt-3 max-w-md text-2xl font-bold leading-tight">
                  SDA / NDIS wet fire suppression systems help manage fire risk
                  before damage spreads.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1076BA]">
                SDA / NDIS Fire Suppression
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#062238] md:text-5xl">
                Specialist Disability Accommodation fire suppression requires a
                compliant, practical approach.
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  SDA fire suppression and NDIS fire suppression projects need
                  systems designed around compliance, occupancy requirements and
                  reliable operation. Wet fire suppression systems are designed
                  to help control or extinguish a fire before it can cause
                  further harm.
                </p>

                <p>
                  SPIAUS installs and services compliant wet fire suppression
                  systems for Specialist Disability Accommodation projects, with
                  supporting trade services available where the wider job
                  requires plumbing, gas fitting, rainwater tanks or roofing.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/30 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Learn About SDA Fire Suppression
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#062238] px-8 py-4 text-base font-bold text-[#062238] transition duration-200 hover:bg-[#062238] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#062238]"
                >
                  Request Advice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area / Contact CTA */}
      <section className="relative overflow-hidden bg-[#062238] py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1076BA]/35 via-[#062238] to-[#031522]" />
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#1076BA]/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-700/20 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#7FC7F2]/20 bg-white/[0.06] p-8 text-center shadow-2xl md:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
              Need Help?
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Get SDA / NDIS fire suppression support from a specialist trade
              team.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50/80">
              For SDA / NDIS wet fire suppression systems or supporting
              plumbing, gas fitting, rainwater tank and roofing work, contact
              SPIAUS to discuss the job.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Send Us a Message
              </Link>

              <a
                href="tel:0431818718"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-8 py-4 text-base font-bold text-white transition duration-200 hover:bg-white hover:text-[#062238] focus:outline-none focus:ring-2 focus:ring-white"
              >
                Call 0431 818 718
              </a>
            </div>

            <p className="mt-8 text-sm font-medium text-blue-50/65">
              QBCC 15080203 • NSW Fair Trading Contractor 284692C •
              Industry association: MPAQ
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
