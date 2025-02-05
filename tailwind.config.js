/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#E6E9F4',
          100: '#CCD3E9',
          200: '#99A7D3',
          300: '#667BBD',
          400: '#334FA7',
          500: '#1A2F7A', // Bleu marine du logo
          600: '#152461',
          700: '#101B49',
          800: '#0A1230',
          900: '#050918',
        },
        'secondary': {
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#DFDFDF',
          300: '#CFCFCF',
          400: '#BFBFBF',
          500: '#808080', // Gris du logo
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}
