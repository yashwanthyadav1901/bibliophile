/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#37474F",
        light: "#DEE4E7",

        shade: "rgba(255,255,255, 0.18)",
      },
    },
  },
  plugins: [],
};
