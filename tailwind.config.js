/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        NeonGreen: "hsl(150, 100%, 66%)",
        DarkMode: "#003049",
        NavColor: "#002039",
      },
      backgroundImage: {
        heroBg: "url('/src/images/circles.svg')",
      },
    },
  },
  plugins: [],
};
