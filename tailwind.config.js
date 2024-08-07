/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003049",
        secondary: "#002039",
        accent: "#5286ff",
      },
      backgroundImage: {
        heroBg: "url('/src/images/circles.svg')",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1780px",
        "4xl": "2160px",
      },
    },
  },
  plugins: [],
};
