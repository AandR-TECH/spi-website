// app/services/page.jsx
// Lists the detailed services offered by SPI QLD. The service data is loaded
// from a JSON file located in the `data` directory to demonstrate server‑side
// data fetching using an asynchronous function.

import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';

async function getServices() {
  // Dynamically import the JSON file. When using the App Router in Next.js
  // the file system is available at build time, so this import will be
  // statically analysed and bundled. We use `.default` because JSON
  // modules export their contents under the default key.
  const servicesModule = await import('../../data/services.json');
  return servicesModule.default;
}

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">What We Offer at SPI QLD</h1>
        <p className="text-gray-700 mb-10">
          Everyone is expected to have a smoke alarm, but fire suppression doesn’t
          stop there. Our range of services helps ensure the safety of your
          property and loved ones【291620522867057†L17-L19】.
        </p>
        {/* Services list */}
        <div className="grid gap-8">
          {services.map((service) => (
            <div key={service.slug} id={service.slug} className="scroll-mt-20">
              <h2 className="text-3xl font-semibold text-blue-700 mb-4">{service.title}</h2>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="order-2 md:order-1">
                  <p className="text-gray-700 mb-4 whitespace-pre-line">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow mt-2"
                  >
                    Get in Touch with Us
                  </Link>
                </div>
                <div className="order-1 md:order-2 h-56 w-full bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: `url(${service.image})` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}