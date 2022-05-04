module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
      primary: {
        100: "#fafafa",
        200: "#f5f5f5",
        300: "#eeeeee"
      }
    },
    textColor: {
      'primary': '#1fb6ff',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'white': '#fff',
    },
    extend: {},
  },
  plugins: [],
}
