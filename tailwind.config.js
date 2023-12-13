/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        "primary-bg": "#4F4F4F",
        "primary-bg2": "#828282",
        "primary-bg3": "#E0E0E0",
        "chat1-bg": "#FCEED3",
        "chat1-text": "#E5A443",
        "chat2-bg": "#EEDCFF",
        "chat2-text": "#9B51E0",
        "chat3-bg": "#D2F2EA",
        "chat3-text": "#43B78D",
        "warning-red": "#EB5757",
      },
      backgroundImage: {
        gradientBg:
          "linear-gradient(to right, #0F2027, #2C5364, #00B4DB, #02EAFD)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideOut: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(100px)", opacity: 0 },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out forwards",
        slideOut: "slideOut 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
