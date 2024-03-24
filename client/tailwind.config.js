/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   dark: "#262833",
      //   light: "#DEE4E7",
      //   shade: "rgba(255,255,255, 0.18)",
      // },
      colors: {
        "white-light": "#DEE4E7",
        "black-shade": "#262833",
        "white-trans": "rgba(255,255,255, 0.18)",
        "grey-shade": "#B0BEC5",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
