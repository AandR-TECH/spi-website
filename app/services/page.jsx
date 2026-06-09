// app/services/page.jsx
import ServiceCard from "../../components/ServiceCard";
import Link from "next/link";

async function getServices() {
  const servicesModule = await import("../../data/services.json");
  return servicesModule.default;
}

export const metadata = {
  title: "Services | SPIAUS",
  description:
    "Licensed plumbing, gas fitting, roofing and wet fire suppression services across South East Queensland.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#062238] py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1076BA]/35 via-[#062238] to-[#031522]" />
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#1076BA]/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-700/20 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
              SPIAUS Services
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Plumbing, gas fitting, roofing and fire suppression services.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/80">
              SPIAUS provides licensed trade services for domestic,
              commercial, rural and agricultural properties across Greater
              South East Queensland.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Request a Quote
              </Link>

              <a
                href="tel:0431818718"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-8 py-4 text-base font-bold text-white transition duration-200 hover:bg-white hover:text-[#062238] focus:outline-none focus:ring-2 focus:ring-white"
              >
                Call 0431 818 718
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="border-b border-[#1076BA]/15 bg-white py-6">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-[#1076BA]/20 bg-[#E8F4FB] px-5 py-2 text-sm font-bold text-[#062238] transition duration-200 hover:border-[#1076BA]/40 hover:bg-[#1076BA] hover:text-white"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#1076BA]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-red-100 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1076BA]">
              What We Offer
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#062238] md:text-5xl">
              Practical services built around safety, compliance and property
              protection.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Whether the job involves plumbing, gas, roofing or wet fire
              suppression, SPIAUS focuses on practical solutions completed by
              licensed professionals.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-32"
              >
                <ServiceCard
                  title={service.title}
                  shortDescription={service.shortDescription}
                  description={service.description}
                  image={service.image}
                  highlights={service.highlights}
                  href="/contact"
                  buttonLabel="Request a Quote"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fire Suppression Feature */}
      <section className="relative overflow-hidden bg-[#062238] py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1076BA]/35 via-[#062238] to-[#031522]" />
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#1076BA]/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-700/20 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
                Fire Suppression
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Smoke alarms warn you. Wet fire suppression systems act.
              </h2>
            </div>

            <div className="rounded-3xl border border-[#7FC7F2]/20 bg-white/[0.06] p-8 shadow-2xl">
              <p className="text-lg leading-8 text-blue-50/80">
                Smoke alarms are essential, but they are an awareness system.
                Wet fire suppression systems are designed to help control or
                extinguish a fire before it can cause further damage to people,
                property, equipment or livestock.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Discuss Fire Suppression
                </Link>
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
              Need advice?
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-[#062238] md:text-5xl">
              Talk to SPIAUS about compliant SDA / NDIS wet fire suppression
              systems, or speak with us about plumbing, gas fitting, rainwater
              tank and roofing works.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Contact SPIAUS to discuss your project and arrange a quote.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/30 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Request a Quote
              </Link>

              <a
                href="tel:0431818718"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#062238] px-8 py-4 text-base font-bold text-[#062238] transition duration-200 hover:bg-[#062238] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#062238]"
              >
                Call 0431 818 718
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
