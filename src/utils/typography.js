import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.1,
  googleFonts: [
    { name: "Montserrat", styles: [200, 300, 400, 500, 600, 700, 800, 900] },
    { name: "Fira Code", styles: [200, 300, 400, 600, 700] },
  ],
  headerFontFamily: ["Montserrat", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
})

export default typography
