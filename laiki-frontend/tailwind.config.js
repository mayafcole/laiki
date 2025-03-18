/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFDCDC',
        secondary: '#FAD4D8', // light pink
        accent: '#FF6E6E',
        background: '#FFF8F0',
        textMain: '#1B0505',
        textHeader: '#6B0A0A'
      },
      fontFamily: {
        heading: ['"Krub"', 'serif'], 
        body: ['"Krub"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
