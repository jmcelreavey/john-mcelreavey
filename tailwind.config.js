/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cedarville-cursive": ["Cedarville Cursive", "cursive"],
      },
      colors: {
        theme: {
          light: "#f0efeb",
          dark: "#073b4c",
        },
        "lucario-blue": {
          50: "#d2cceb",
          100: "#b2aee6",
          200: "#798bdb",
          300: "#4b80cf",
          400: "#2883c1",
          500: "#118ab2",
          DEFAULT: "#118ab2",
          600: "#058da0",
          700: "#01898d",
          800: "#027874",
          900: "#05625b",
        },

        radishical: {
          50: "#f4e2db",
          100: "#f8d5cb",
          200: "#fdb4a9",
          300: "#ff8886",
          400: "#fb6474",
          500: "#ef476f",
          DEFAULT: "#ef476f",
          600: "#da3072",
          700: "#bd2076",
          800: "#9b1576",
          900: "#740d6b",
        },

        "caribbean-green": {
          50: "#cef0e7",
          100: "#b2f0e4",
          200: "#7befe0",
          300: "#49ebd9",
          400: "#21e3c6",
          500: "#06d6a0",
          DEFAULT: "#06d6a0",
          600: "#00c26e",
          700: "#00aa36",
          800: "#008d03",
          900: "#276d03",
        },

        "bright-halo": {
          50: "#f5f6e1",
          100: "#fbfcd7",
          200: "#fffeb9",
          300: "#fff79a",
          400: "#ffe97f",
          500: "#ffd166",
          DEFAULT: "#ffd166",
          600: "#e9a04a",
          700: "#ca6833",
          800: "#a43220",
          900: "#79111b",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "forest",
  },
};
