/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        "steel-pink-400": "#BF00C6",
        "turqoise-400": "#00E1D5",
        "my-orange-400": "#F77F00",
        "max-y-r-400": "#FCBF49",
        "lemon-meringue-400": "#EAE2B7",
        "red-pink-400": "#F4525C"
      },
    },
  },
  plugins: [],
}
