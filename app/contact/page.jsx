"use client";
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Contact SPI QLD Today</h1>
        <p className="text-gray-700 mb-6">
          Ensure the safety of your prized possessions and the people you hold dear
          at all times. If you need help with plumbing services or fire
          prevention services, we’re here to help you. Our team will be glad to
          assist with your concerns and queries【333007283051188†L15-L20】.
        </p>
        {/* Contact details */}
        <div className="mb-8 space-y-2">
          <p className="text-gray-800"><strong>Specialised Plumbing Installation</strong></p>
          <p className="text-gray-700">QLD, 4341</p>
          <p className="text-gray-700">
            <span role="img" aria-label="phone" className="mr-1">📞</span>0431‑818‑718
          </p>
          <p className="text-gray-700">
            <span role="img" aria-label="email" className="mr-1">✉️</span>
            <a href="mailto:info@spiqld.com.au" className="hover:underline text-blue-600">
              info@spiqld.com.au
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Business Hours:</strong> Mon&nbsp;–&nbsp;Fri&nbsp;07:00&nbsp;AM&nbsp;–&nbsp;06:00&nbsp;PM; Sat&nbsp;08:00&nbsp;AM&nbsp;–&nbsp;01:00&nbsp;PM【333007283051188†L30-L37】
          </p>
        </div>
        {/* Contact form */}
        <ContactForm />
      </div>
    </div>
  );
}