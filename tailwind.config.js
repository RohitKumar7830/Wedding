/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '990px',
      lg: '1310px',
      feature: '767px'
    },
    extend: {}
  },
  plugins: []
};
