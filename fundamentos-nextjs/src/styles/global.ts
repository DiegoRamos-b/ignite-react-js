import { globalCss } from ".";

export const globaStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    background: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "atialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});
