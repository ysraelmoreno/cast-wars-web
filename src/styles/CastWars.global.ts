import { globalCss } from "./Theme.provider";

const CastWarsGlobalCSS = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-web-font-smoothing": "antialiased",
    fontFamily: "Poppins",
    background: "$background",
  },

  button: {
    cursor: "pointer",
  },

  "#portal": {
    position: "absolute",
    zIndex: "99999",
    top: 0,
    left: 0,
  },
});

export default CastWarsGlobalCSS;
