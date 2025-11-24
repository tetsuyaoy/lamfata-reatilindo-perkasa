/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: { opacity: 0, transform: "translateY(-10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        // Floating naik-turun
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },

        // Bergerak kiri–kanan
        leftright: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(15px)" },
        },

        // Floating + slight rotation
        floatRotate: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
      },

      animation: {
        slideDown: "slideDown .25s ease-out",
        float: "float 3s ease-in-out infinite",
        leftright: "leftright 4s ease-in-out infinite",
        floatRotate: "floatRotate 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
