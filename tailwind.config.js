/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        primary: "#8B8B8B",
        secondary: "#5B78F6",
        textPrimary: "#FFFFFF",
        darkWhite: "#CACACA",
        textSecondary: "#8B8B8B",
        border: "#2B2B2B",
        success: "#28A745",
        warning: "#FFC107",
        error: "#DC3545",
        subprimary: "#2B2B2B",
      },
      backgroundImage: {
        "card-reverseDark": "linear-gradient(120deg, #262626 0%, #1D1D1D 100%)",
        "card-light": "linear-gradient(120deg, #ffff 0%, #f5f5f5 100%)",
        "card-dark": "linear-gradient(120deg, #202020 0%, #050505 100%)",
        "card-blue": "linear-gradient(to right, #5B78F6, #D7D9DD, #5B78F6)",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
