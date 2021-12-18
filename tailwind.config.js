module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": {
          "100": "#709e47",
          "200": "#638d3f",
          "300": "#577b37",
          "400": "#4b6a2f",
          "500": "#45622c",
          "600": "#3e5828",
          "700": "#324620",
          "800": "#253518",
          "900": "#192310",
        },
        "secondary": {
          "100": "#fccd83",
          "200": "#fbc36a",
          "300": "#fbba51",
          "400": "#fab038",
          "500": "#f9aa27",
          "600": "#f9a61f",
          "700": "#f99c06",
          "800": "#e08c06",
          "900": "#c77d05",
        },
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    borderWidth: ["responsive", "hover", "focus"],
    fontSize: ["responsive", "hover", "focus"],
    fontWeight: ["responsive", "hover", "focus"],
    width: ["responsive", "hover"],
    extend: {},
  },
  plugins: [],
};