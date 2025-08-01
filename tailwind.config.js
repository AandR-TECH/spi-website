/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-800': '#0e76bb',
        'blue-900': '#043f6d',
        'red-600': '#f03f29',
        'red-700': '#ce3724',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};