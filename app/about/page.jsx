// app/about/page.jsx
// About page describing the origins of SPI QLD and its innovative fire
// suppression system. Content summarises the original about page with
// permission【543911199759002†L15-L41】.

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">How We Came to Be</h1>
        <p className="text-gray-700 mb-6">
          Get to know the story behind Specialised Plumbing Installation and how
          we’re continuously changing lives with our fire suppression solutions.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-4">A New Perspective on Fire Safety</h2>
        <p className="text-gray-700 mb-4">
          Involvement in the fire protection industry for more than five years has
          brought the realisation that everyone is vulnerable to fire hazards. That
          insight led Col&nbsp;Considine, the principal of Specialised Plumbing
          Installation, to design an innovative fire suppression system for
          residential homes. The system combines internal sprinklers, placed
          inside the home in line with Australian Standards&nbsp;2118 Parts&nbsp;4
          and&nbsp;5, with external sprinklers that can be manually or remotely
          activated via a phone application or triggered automatically when
          high ambient temperatures are detected【543911199759002†L29-L38】.
        </p>
        <p className="text-gray-700 mb-4">
          These sprinklers have been used in various rural settings such as stables,
          machinery sheds and feed storage sheds, providing internal fire
          protection and external protection against bushfire ember attacks【543911199759002†L38-L40】.
        </p>
        <p className="text-gray-700 mb-6">
          If you need these services for domestic, commercial or agricultural
          applications, contact us to discover more.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Mission and Vision</h2>
        <p className="text-gray-700 mb-4">
          Our goal is to provide fire suppression solutions to suit domestic,
          commercial and agricultural applications【543911199759002†L52-L55】.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Service Areas</h2>
        <p className="text-gray-700 mb-4">
          We service the greater South‑East&nbsp;QLD and Northern&nbsp;NSW regions【543911199759002†L58-L61】.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Free Quotes</h2>
        <p className="text-gray-700 mb-6">
          Get a clear comparison of costs for our services. You can request a
          free quote from our team.
        </p>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded shadow"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}