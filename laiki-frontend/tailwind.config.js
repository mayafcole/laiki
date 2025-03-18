/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: '#FFDCDC', // light pink
        accent: '#FF6E6E',
        background: '#F8E8E8',
        textMain: '#1B0505',
        textHeader: '#6B0A0A',
        black: '#000000'
      },
      fontFamily: {
        heading: ['"Krub"', 'serif'], 
        body: ['"Krub"', 'serif'],
      },
      fontSize: {
        'hero-title': '54px', // Custom size for hero headings (44px)
        'hero-subtitle': '26px', // Custom size for hero paragraph text (20px)
        'headers': '35px', // Custom size for hero paragraph text (20px)
        'product-subtitle': '18px', // Custom size for hero paragraph text (20px)
        'product-title': '22px', // Custom size for hero paragraph text (20px)
        'product-price': '24px', // Custom size for hero paragraph text (20px)



      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For WebKit browsers */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
}