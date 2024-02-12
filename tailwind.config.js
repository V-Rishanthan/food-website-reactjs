/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      displayHead: ["Just Me Again Down Here", "cursive"],
      body: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#00b900",
        lightSecondary: "#78FF95",

        primaryText: "#2d2a6",
        white: "#FFFFFF",
        headingPrimary: "#2D2D2D",
        // headingPrimary: "#2d2a6e",
        cart: "#F5F5F5",
        lightGree: "#0be881",
        muteBlack: "#576574",
        bgCart: "#f4f1ea",
      },
    },
  },
  plugins: [],
  daisyui: {
    darkTheme: "light",
  },
};
