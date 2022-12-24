module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: {
          1: "#1DA1F2",
          2: "#181a20",
        },
        secondary: {
          1: "#AAB8C2",
          2: "#202020",
          3: "#f5f5f5",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
