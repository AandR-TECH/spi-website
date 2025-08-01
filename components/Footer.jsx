// components/Footer.jsx
// This component provides a consistent footer across all pages. It
// consolidates the company's address, phone number, licence details and
// social links. Colours mirror the header to maintain visual harmony.

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 text-sm mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact information */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Specialised Plumbing Installation</h3>
            <p className="mb-1">QLD, 4341</p>
            <p className="mb-1">
              <span className="mr-1" role="img" aria-label="phone">📞</span>
              0431‑818‑718
            </p>
            <p className="mb-1">
              <span className="mr-1" role="img" aria-label="email">✉️</span>
              <a href="mailto:info@spiqld.com.au" className="hover:underline text-gray-100">
                info@spiqld.com.au
              </a>
            </p>
            <p className="mb-1">Business Hours:</p>
            <p className="ml-4">Mon&nbsp;–&nbsp;Fri&nbsp;07:00&nbsp;AM&nbsp;–&nbsp;06:00&nbsp;PM</p>
            <p className="ml-4">Sat&nbsp;08:00&nbsp;AM&nbsp;–&nbsp;01:00&nbsp;PM</p>
          </div>
          {/* Licences */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Licences & Membership</h3>
            <ul className="space-y-1">
              <li>QBCC LIC&nbsp;15080203</li>
              <li>NSW Fair Trading Contractor&nbsp;284692C</li>
              <li>National Fire Industry Association Australia Member&nbsp;0507QI</li>
            </ul>
          </div>
          {/* Social media links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul className="space-y-1">
              <li>
                <a href="https://www.facebook.com" className="hover:underline text-gray-100" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="hover:underline text-gray-100" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://au.linkedin.com" className="hover:underline text-gray-100" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-700 pt-4 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} SPI&nbsp;QLD. All rights reserved.</p>
          <p className="mt-1">
            Website inspired by the original Specialised&nbsp;Plumbing&nbsp;Installation site.
          </p>
        </div>
      </div>
    </footer>
  );
}