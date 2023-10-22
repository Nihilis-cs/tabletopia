/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fbf5ef',
        'cream': '#f2d3ab',
        'pink': '#c69fa5',
        'purple': '#8b6d9c',
        'blue': "#494d7e",
        'darkblue': "#272744",
        'theme': {
          0: "#cbd5e1",//"#6ceded",
          100: "#6cb9c9",
          200: "#6d85a5",
          300: "#6e5181",
          400: "#6f1d5c",
          500: "#4f1446",
          600: "#2e0a30",
          700: "#0d001a",
        },
      },
    },
  },
  plugins: [],
}

