/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#000000",
        paper: "#ffffff",
        sky: "#dceeff",
        concrete: "#cccccc",
        mist: "#e9e9e9",
        electric: "#4da2ff",
        mint: "#55db9c",
        lavender: "#e9ccff",
        ember: "#fb4903",
        sunburst: "#ffd731",
        violet: "#5c4ade",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'site': '1440px',
      },
      borderRadius: {
        'pill': '9999px',
        'card': '30px',
      }
    },
  },
  plugins: [],
}
