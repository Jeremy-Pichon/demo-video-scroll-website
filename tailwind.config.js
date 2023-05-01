/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shinny': 'shinny 5s linear infinite',
      },
      skew: {
        '20': '20deg',
      },
      keyframes: {
        'shinny': {
          "0%": {opacity: '0.3' },
          "25%": { left: "150%", opacity: '0.3' },
          "100%": { left: "150%", opacity: '0.3' },
        }
      },
      colors: {
        primary: '#02CFFC',
      },
      fontFamily: {
        'title': ['Amsterdam Four', 'sans-serif']
      },
    }
  },
  plugins: [],
}
