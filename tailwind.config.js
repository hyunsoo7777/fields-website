/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#131432",
      secondary: "#4A3AFF",
      hover: "#07D2FF",
      white: "#FFFFFF",
      background: "#F6F9FF",
      lang: "#CBC9D7",
      tech: "#CAD6FF",
      history: "#DCE4FF",
      black: "rgb(0,0,0)",
    },
    borderColor: {
      primary: "#131432",
      secondary: "#4A3AFF",
      hover: "#07D2FF",
      white: "#FFFFFF",
      background: "#F6F9FF",
      lang: "#CBC9D7",
      tech: "#CAD6FF",
      history: "#DCE4FF",
      black: "rgb(0,0,0)",
    },
    backgroundColor: {
      primary: "#131432",
      secondary: "#4A3AFF",
      hover: "#07D2FF",
      background: "#F6F9FF",
      lang: "#CBC9D7",
      tech: "#CAD6FF",
      history: "#DCE4FF",
      black: "rgb(0,0,0)",
      white: "#FFFFFF",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1090px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Pretendard"],
    },
    backdropBrightness: {
      25: ".25",
      40: ".40",
    },
  },
};
