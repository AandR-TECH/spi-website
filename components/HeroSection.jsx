// components/HeroSection.jsx
import Link from "next/link";
import Image from "next/image";

export default function HeroSection({
  title = "SDA / NDIS Wet Fire Suppression Specialists",
  subtitle = "SPIAUS provides compliant wet fire suppression solutions for Specialist Disability Accommodation and NDIS projects across QLD, NSW, VIC and SA.",
  imageSrc = "/assets/hero-image.jpg",
  ctaLabel = "Request a Quote",
  ctaHref = "/contact",
  phone = "0431 818 718",
}) {
  const phoneHref = phone.replace(/\s/g, "");

  return (
    <section className="relative flex min-h-[82vh] w-full items-center overflow-hidden bg-[#062238]">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="SPIAUS SDA and NDIS wet fire suppression systems"
        fill
        className="object-cover"
        priority
        quality={92}
      />

      {/* Brand overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#062238]/95 via-[#062238]/78 to-[#1076BA]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#062238]/75 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-950/20" />

      {/* Brand glows */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#1076BA]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-red-700/20 blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20 text-white md:px-10">
        <div className="grid min-h-[620px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-[#7FC7F2]/30 bg-[#1076BA]/15 px-4 py-2 text-sm font-semibold tracking-wide text-blue-50">
              Licensed • Insured • Fire Suppression Specialists
            </p>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/85 md:text-xl">
                {subtitle}
              </p>
            )}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                {ctaLabel}
              </Link>

              <a
                href={`tel:${phoneHref}`}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-8 py-4 text-base font-bold text-white transition duration-200 hover:bg-white hover:text-[#062238] focus:outline-none focus:ring-2 focus:ring-white"
              >
                Call {phone}
              </a>
            </div>

            <p className="mt-7 max-w-2xl text-sm font-medium text-blue-50/65">
              QBCC 15080203 • NSW Fair Trading Contractor 284692C • NFIA Member
            </p>
          </div>

          {/* Right Content Card */}
          <div className="hidden justify-end lg:flex">
            <div className="w-full max-w-md rounded-3xl border border-[#7FC7F2]/20 bg-white/[0.06] p-8 shadow-2xl shadow-black/20 backdrop-blur-md">
              <div className="mb-8 flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
                    SPIAUS
                  </p>

                  <p className="mt-2 text-2xl font-bold leading-tight text-white">
                    Compliant wet fire suppression systems for SDA and NDIS
                    projects.
                  </p>
                </div>

                <div className="shrink-0 rounded-2xl bg-white p-3 shadow-lg">
                  <Image
                    src="/assets/spi-logo.png"
                    alt="SPIAUS Logo"
                    width={130}
                    height={48}
                    priority
                    className="h-auto w-[130px]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <HeroServiceItem title="SDA / NDIS Wet Fire Suppression Systems" />
                <HeroServiceItem title="Plumbing Installation & Repairs" />
                <HeroServiceItem title="Gas Fitting" />
                <HeroServiceItem title="Rainwater Tanks, Roofing & Downpipes" />
              </div>

              <div className="mt-8 rounded-2xl border border-[#7FC7F2]/20 bg-[#1076BA]/15 p-5">
                <p className="text-sm font-bold text-blue-50">
                  SDA / NDIS projects across QLD, NSW, VIC and SA.
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-50/75">
                  Supporting plumbing, gas fitting, rainwater tank and roofing
                  services across South East Queensland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center text-blue-50/55 md:flex">
        <span className="mb-3 text-xs font-medium tracking-[0.25em]">
          SCROLL TO EXPLORE
        </span>

        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-blue-50/30 pt-2">
          <div className="h-3 w-1 animate-bounce rounded-full bg-blue-50/70" />
        </div>
      </div>
    </section>
  );
}

function HeroServiceItem({ title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#7FC7F2]/15 bg-white/[0.06] px-4 py-3 transition duration-200 hover:border-[#7FC7F2]/30 hover:bg-white/[0.09]">
      <span className="flex h-2.5 w-2.5 rounded-full bg-red-500" />
      <span className="text-sm font-semibold text-blue-50">{title}</span>
    </div>
  );
}
