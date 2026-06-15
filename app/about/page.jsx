// app/about/page.jsx
import Link from "next/link";
import Image from "next/image";

const infoCards = [
  {
    title: "Mission and Vision",
    description:
      "To provide practical fire suppression solutions for domestic, commercial, rural and agricultural applications.",
  },
  {
    title: "Service Areas",
    description:
      "SPIAUS services South East Queensland.",
  },
  {
    title: "Free Quotes",
    description:
      "Request a clear quote for fire suppression,plumbing, gas fitting, or roofing services.",
  },
];

const capabilities = [
  "Internal sprinkler systems",
  "External ember protection",
  "Rural and agricultural fire protection",
  "Domestic and commercial applications",
];

export const metadata = {
  title: "About | SPIAUS",
  description:
    "Learn about SPIAUS, Specialised Plumbing Installation, and its wet fire suppression, plumbing, gas fitting, and roofing services across South East Queensland.",
};

export default function AboutPage() {
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
              About SPIAUS
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Built around practical fire safety, plumbing and trade experience.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/80">
              Specialised Plumbing Installation provides licensed plumbing, gas
              fitting, roofing and wet fire suppression services for domestic,
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

      {/* Main Story */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#1076BA]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-red-100 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[480px] overflow-hidden rounded-3xl bg-[#062238] shadow-2xl">
              <Image
                src="/assets/fire-sprinkler-tank-pipework-detail.jpg"
                alt="Fire suppression and fire safety services"
                fill
                className="object-cover opacity-85"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062238]/95 via-[#062238]/35 to-transparent" />
              <div className="absolute inset-0 bg-[#1076BA]/10" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
                  Fire Safety
                </p>

                <p className="mt-3 max-w-md text-2xl font-bold leading-tight">
                  A practical approach to reducing fire risk before damage
                  spreads.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1076BA]">
                How We Came To Be
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#062238] md:text-5xl">
                A new perspective on fire suppression and property protection.
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  After years of involvement in the fire protection industry, Col
                  Considine recognised that homes, businesses and rural properties
                  remain vulnerable to fire hazards even when basic warning
                  systems are in place.
                </p>

                <p>
                  That experience helped shape SPIAUS’s focus on wet fire
                  suppression systems. These systems are designed to help control
                  or extinguish fire and provide practical protection for people,
                  property, equipment and livestock.
                </p>

                <p>
                  SPIAUS’s work includes internal sprinkler systems, external
                  fire protection and solutions suited to residential homes,
                  commercial sites, machinery sheds, stables, feed storage sheds
                  and other rural or agricultural settings.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#1076BA]/15 bg-[#E8F4FB] px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
                    <span className="text-sm font-bold text-[#062238]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards / Fire Suppression Detail */}
      <section className="relative overflow-hidden bg-[#062238] py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1076BA]/35 via-[#062238] to-[#031522]" />
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#1076BA]/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-700/20 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
                Fire Suppression Systems
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Designed to support safer homes, businesses and rural sites.
              </h2>
            </div>

            <div className="rounded-3xl border border-[#7FC7F2]/20 bg-white/[0.06] p-8 shadow-2xl">
              <div className="space-y-5 text-lg leading-8 text-blue-50/80">
                <p>
                  SPIAUS works with wet fire suppression systems that can
                  include internal sprinklers, external sprinklers and manually
                  or remotely activated protection depending on the property and
                  application.
                </p>

                <p>
                  Internal sprinklers are placed inside the home in line with
                  relevant Australian Standards, while external protection can
                  assist with risks such as bushfire ember attack around rural
                  buildings, sheds and storage areas.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/services#fire-suppression"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  View Fire Suppression Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#1076BA]/10 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1076BA]">
              Why Work With SPIAUS?
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#062238] md:text-5xl">
              Local trade support with practical service coverage.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {infoCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-[#1076BA]/15 bg-[#E8F4FB] p-7 text-center shadow-xl shadow-slate-950/5 transition duration-200 hover:-translate-y-1 hover:border-[#1076BA]/35"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1076BA]/15 ring-1 ring-[#1076BA]/25">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                </div>

                <h3 className="text-2xl font-bold text-[#062238]">
                  {card.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-[#062238] py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1076BA]/35 via-[#062238] to-[#031522]" />
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#1076BA]/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-700/20 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#7FC7F2]/20 bg-white/[0.06] p-8 text-center shadow-2xl md:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
              Work With The Experts
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Need plumbing, gas fitting, roofing or fire suppression support?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50/80">
              Contact SPIAUS to discuss the job and arrange a quote for your
              property, business or rural site.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Contact Us
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
    </>
  );
}
