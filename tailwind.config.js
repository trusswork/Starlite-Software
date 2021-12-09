module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        "primary": "url('/images/bg-main.png')"
      },
      fontFamily: {
        primary: ["Oswald", "sans-serif"],
        secondary: ["Lexend", "sans-serif"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
