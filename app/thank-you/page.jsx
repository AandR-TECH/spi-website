// app/thank-you/page.jsx
// Simple thank you page displayed after a successful form submission. It
// acknowledges receipt of the visitor’s message and offers a link back
// to the home page【584853460925535†L17-L20】.

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <div className="text-green-600 text-5xl mb-4" role="img" aria-label="checkmark">
          ✓
        </div>
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          We have received your message and would like to thank you for writing to us.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded shadow"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}