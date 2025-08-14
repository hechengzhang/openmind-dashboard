/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#181C1F',
        'success': '#1FC16B',
        'error': '#E63946',
        'blue': '#246BEE',
        'secondary': '#606060',
        'line': '#E1E4EA',
        'white/4': 'rgba(255, 255, 255, 0.04)',
        'white/8': 'rgba(255, 255, 255, 0.08)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1920px',

        'max-sm': { max: '639px' }, 
        'max-md': { max: '767px' }, 
        'max-lg': { max: '1023px' }, 
        'max-xl': { max: '1279px' }, 
        'max-2xl': { max: '1439px' },
        'max-3xl': { max: '1919px' }
      },
    },
  },
  plugins: [],
};
