// components/Footer.jsx
import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Fire Suppression", href: "/services" },
  { label: "Plumbing Services", href: "/services" },
  { label: "Gas Fitting", href: "/services" },
  { label: "Roofing & Gutters", href: "/services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#062238] text-gray-300">
      {/* Background depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1076BA]/35 via-[#062238] to-[#031522]" />
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#1076BA]/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-700/20 blur-3xl" />

      <div className="container relative mx-auto px-6 py-14 md:px-10">
        {/* CTA Card */}
        <div className="mb-12 rounded-3xl border border-[#7FC7F2]/20 bg-white/[0.06] p-8 shadow-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#7FC7F2]">
                Need Licensed Trade Support?
              </p>

              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                Contact SPI QLD for plumbing, gas fitting, roofing and fire
                suppression services.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-blue-50/80">
                Servicing Greater South-East Queensland and Northern NSW for
                domestic, commercial, rural and agricultural work.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Request a Quote
              </Link>

              <a
                href="tel:0431818718"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-8 py-4 text-sm font-bold text-white transition duration-200 hover:bg-white hover:text-[#062238] focus:outline-none focus:ring-2 focus:ring-white"
              >
                Call 0431 818 718
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="mb-5 inline-flex rounded-2xl bg-white p-3 shadow-lg">
              <Image
                src="/assets/spi-logo.png"
                alt="SPI QLD Logo"
                width={150}
                height={55}
                className="h-auto w-[150px]"
              />
            </div>

            <h3 className="text-xl font-bold text-white">
              Specialised Plumbing Installation
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-blue-50/75">
              Licensed plumbing, gas fitting, roofing and wet fire suppression
              specialists across Greater South-East QLD and Northern NSW.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-blue-50/75 transition hover:text-[#7FC7F2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-blue-50/75 transition hover:text-[#7FC7F2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <ul className="space-y-3 text-blue-50/75">
              <li>QLD, 4341</li>
              <li>
                <a
                  href="tel:0431818718"
                  className="transition hover:text-[#7FC7F2]"
                >
                  0431 818 718
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@spiqld.com.au"
                  className="transition hover:text-[#7FC7F2]"
                >
                  info@spiqld.com.au
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-bold text-white">
                Business Hours
              </h4>

              <div className="space-y-1 text-sm text-blue-50/75">
                <p>Monday to Friday: 7:00 AM to 6:00 PM</p>
                <p>Saturday: 8:00 AM to 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Licence Strip */}
        <div className="mt-12 rounded-2xl border border-[#1076BA]/30 bg-white/[0.04] p-5">
          <div className="grid gap-4 text-sm text-blue-50/75 md:grid-cols-3">
            <p>
              <span className="font-bold text-white">QBCC:</span> 15080203
            </p>
            <p>
              <span className="font-bold text-white">NSW Contractor:</span>{" "}
              284692C
            </p>
            <p>
              <span className="font-bold text-white">NFIA Member:</span>{" "}
              0507QI
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-[#1076BA]/25 pt-6">
          <div className="flex flex-col gap-3 text-sm text-blue-50/65 md:flex-row md:items-center md:justify-between">
            <p>&copy; {year} SPI QLD. All rights reserved.</p>
            <p>Licensed • Insured • Greater South-East QLD & Northern NSW</p>
          </div>
        </div>
      </div>
    </footer>
  );
}