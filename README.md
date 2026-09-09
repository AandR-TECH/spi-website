# SPI QLD – Next.js 15 App Router Site

This repository contains a **Next.js 15** application that recreates the public portions of the [Specialised Plumbing Installation](https://www.spiaus.com.au/) (SPI QLD) website. The project uses the App Router and server components, modern React patterns and Tailwind CSS for styling. Content has been carefully extracted from the public site【179737432644349†L15-L37】【291620522867057†L17-L19】, reorganised into reusable React components and structured into a maintainable codebase.

## Features

- **App Router**: Pages live in the `/app` directory and leverage server components for optimal performance.
- **Reusable components**: Header, footer, hero banners, service cards and forms are broken out into the `/components` folder for reuse across pages.
- **Tailwind CSS**: Styling is handled via utility classes, with a customised colour palette that echoes the original branding.
- **Server‑side data fetching**: Service descriptions are loaded from a JSON file at build time using an async helper.
- **TypeScript**: Strict type checking is enabled via `tsconfig.json` while allowing `.jsx` files for convenience.
- **Production ready**: Includes sensible `next.config.js`, `tailwind.config.js`, ESLint and Prettier configurations, caching headers for static assets and an example `.env` file.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

3. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
spiaus-next/
├── app/                  # App Router pages
│   ├── about/
│   │   └── page.jsx      # About page
│   ├── contact/
│   │   └── page.jsx      # Contact page with form
│   ├── services/
│   │   └── page.jsx      # Detailed services list with data fetching
│   ├── what-we-do/
│   │   └── page.jsx      # Summary of core capabilities
│   ├── thank-you/
│   │   └── page.jsx      # Thank you message
│   └── page.jsx          # Home page
├── components/           # Reusable UI elements
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── ServiceCard.jsx
│   └── ContactForm.jsx
├── data/
│   └── services.json     # Data used by the services page
├── public/
│   └── assets/           # Static assets (abstract images)
├── styles/
│   └── globals.css       # Tailwind imports and custom global styles
├── tailwind.config.js    # Tailwind configuration with custom palette
├── next.config.js        # Next.js configuration (App Router, caching)
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── .env.example          # Example environment variables
└── package.json          # Project metadata and scripts
```

## Notes

- The images in `/public/assets` are abstract illustrations generated to reflect the themes of fire, water and energy; they replace the original site imagery where direct downloads were not possible due to network restrictions. You may replace these files with your own photos if desired.
- The contact form currently does not submit data to a backend service. To enable real submissions, provide an `EMAIL_API_URL` in `.env.local` and implement an API route under `/app/api`.

Feel free to extend the components or pages as needed. The codebase has been organised to make it easy for developers to build upon this foundation.