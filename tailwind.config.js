/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0355FF",
        secondary1: "#EAF1FF",
        secondary2: "#D8E5FF",
        neutral: {
          100: "#FFFFFF",
          200: "#F6F9FF",
          300: "#E9EBF3",
          400: "#D3D6E3",
          500: "#7D84AC",
          600: "#646D9C",
          700: "#475089",
          800: "#1E2F6D",
          900: "#0F1B44",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
