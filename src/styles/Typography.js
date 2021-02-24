import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Poppins",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Poppins", "serif"],
  googleFonts: [
    {
      name: "Poppins",
      styles: ["100", "400", "400i", "700", "700i"],
    },
    {
      name: "DM Serif Display",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})
export default typography
