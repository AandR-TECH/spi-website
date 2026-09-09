// app/contact/page.jsx
"use client";

import ContactForm from "../../components/ContactForm";
import Link from "next/link";

const contactDetails = [
  {
    label: "Phone",
    value: "0431 818 718",
    href: "tel:0431818718",
  },
  {
    label: "Email",
    value: "info@spiaus.com.au",
    href: "mailto:info@spiaus.com.au",
  },
  {
    label: "Location",
    value: "QLD, 4341",
  },
];

const serviceTypes = [
  "Plumbing Services",
  "Wet Fire Suppression",
  "Gas Fitting",
  "Roofing, Gutters & Downpipes",
];

export default function ContactPage() {
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
              Contact SPIAUS
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Get in touch for plumbing, gas fitting, roofing or fire
              suppression support.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/80">
              Contact Specialised Plumbing Installation to discuss your job,
              request a quote or get advice on the right service for your
              property, business or rural site.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:0431818718"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Call 0431 818 718
              </a>

              <a
                href="mailto:info@spiaus.com.au"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-8 py-4 text-base font-bold text-white transition duration-200 hover:bg-white hover:text-[#062238] focus:outline-none focus:ring-2 focus:ring-white"
              >
                Email SPIAUS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form / Details */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#1076BA]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-red-100 blur-3xl" />

        <div className="container relative mx-auto px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Contact Details */}
            <aside className="rounded-3xl border border-[#1076BA]/15 bg-[#E8F4FB] p-8 shadow-xl shadow-slate-950/5">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1076BA]">
                Contact Details
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#062238]">
                Specialised Plumbing Installation
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Servicing South East Queensland for
                domestic, commercial, rural and agricultural work.
              </p>

              <div className="mt-8 space-y-4">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#1076BA]/15 bg-white p-5"
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1076BA]">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-2 block text-lg font-bold text-[#062238] transition hover:text-[#1076BA]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-lg font-bold text-[#062238]">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#1076BA]/15 bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1076BA]">
                  Business Hours
                </p>

                <div className="mt-3 space-y-2 text-slate-700">
                  <p>
                    <span className="font-bold text-[#062238]">
                      Monday to Friday:
                    </span>{" "}
                    7:00 AM to 6:00 PM
                  </p>
                  <p>
                    <span className="font-bold text-[#062238]">Saturday:</span>{" "}
                    8:00 AM to 1:00 PM
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1076BA]">
                  Services
                </p>

                <div className="grid gap-3">
                  {serviceTypes.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 rounded-2xl border border-[#1076BA]/15 bg-white px-4 py-3"
                    >
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
                      <span className="text-sm font-bold text-[#062238]">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="rounded-3xl border border-[#1076BA]/15 bg-white p-8 shadow-2xl shadow-slate-950/10 md:p-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1076BA]">
                Request a Quote
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#062238] md:text-4xl">
                Tell SPIAUS what you need help with.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-700">
                Send through the job details and SPIAUS will get back to you as
                soon as possible. Include the service type, location and any
                urgent details so the enquiry can be handled properly.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
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
              Prefer To Call?
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Speak directly with SPIAUS about your job.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50/80">
              For plumbing, gas fitting, roofing or wet fire suppression
              enquiries, call SPIAUS or send through the contact form above.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:0431818718"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition duration-200 hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Call 0431 818 718
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-8 py-4 text-base font-bold text-white transition duration-200 hover:bg-white hover:text-[#062238] focus:outline-none focus:ring-2 focus:ring-white"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
