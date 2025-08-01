// components/ServiceCard.jsx
// Represents a single service with an image, title, description and a link. It
// accepts props to allow reuse on different pages. The card utilises
// responsive design so that multiple cards can sit side‑by‑side on larger
// screens and stack vertically on smaller devices.

import Link from 'next/link';

export default function ServiceCard({ title, description, image, href, buttonLabel }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {image && (
        <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">{title}</h3>
        <p className="text-gray-700 text-sm flex-1">{description}</p>
        {href && buttonLabel && (
          <Link
            href={href}
            className="mt-4 inline-block text-sm font-medium text-red-600 hover:underline"
          >
            {buttonLabel} &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}