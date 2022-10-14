/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": 
"linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
