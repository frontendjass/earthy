/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        'source-sans-3': ['"Source Sans 3"', 'sans-serif'],
        tangerine: ['Tangerine', 'cursive'],
      },
      fontWeight: {
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      colors: {
        mosswood: {
          50: '#f7f7f5',
          100: '#ecece8',
          200: '#dadbd3',
          300: '#bec0b1',
          400: '#a4a592',
          500: '#93937c',
          600: '#868470',
          700: '#706e5e',
          800: '#5d5b4f',
          900: '#4c4a42',
          950: '#282722',
        },
        kelp: {
          50: '#f5f3f0',
          100: '#eae6dd',
          200: '#d7d0bf',
          300: '#bdb499',
          400: '#a49977',
          500: '#887e5a',
          600: '#6b6345',
          700: '#544f37',
          800: '#494533',
          900: '#3c392b',
          950: '#1f1d14',
        },
      },
    },
  },
  plugins: [],
};
