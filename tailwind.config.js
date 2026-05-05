/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "#1e1e23",
        backgrounddeep: "#161619",
        backgroundLight: "#2b272c",

        btnprimary: "#FACC15",
        btnprimaryHover: "#EAB308",
        btnprimaryActive: "#CA8A04",
        btnblue: "#29ad82",

        muted: "#94A3B8",
        borderColor: "#ffffff1a",
      },

      boxShadow: {
        primary: "0 10px 25px rgba(250, 204, 21, 0.15)",
        card: "0 8px 20px rgba(0,0,0,0.25)",
      },
    },
  },

  plugins: [
    animate,

    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar::-webkit-scrollbar": {
          width: "6px",
        },
        ".scrollbar::-webkit-scrollbar-track": {
          background: "transparent",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          background: "rgba(255,255,255,0.08)",
          borderRadius: "999px",
        },
        ".scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "rgba(255,255,255,0.15)",
        },
      });
    },
  ],
};