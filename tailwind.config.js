module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        LG: "'League Gothic', sans-serif;",
      },
      colors: {
        green: "#DBFFC0",
        purple: "#5100FF",
        black: "#000000",
        white: "#ffffff",
      },
    },
    screens: {
      small: "320px",
      phone: "480px",
      tablet: "769px",
      laptop: "925px",
      desktop: "1200px",
      large: "1201px",
    },
  },
};
