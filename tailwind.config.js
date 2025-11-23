/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            slideDown: { from: { opacity: 0, transform: "translateY(-10px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        },
        animation: {
            slideDown: "slideDown .25s ease-out",
        },
    }

  },
  plugins: [],
}
