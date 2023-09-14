const colorThief = require("colorthief");

const image_filename = "template_cv.png";

const rgbToHex = (rgb) =>
  "#" +
  rgb
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

function wrangle_rgb_to_css(rgb, idx) {
  const property_name = "$color" + idx.toString() + ":";
  const hex = rgbToHex(rgb);
  // rgb = rgb = " rgb(" + rgb.toString() + ")";

  return property_name + hex + ";";
}

colorThief
  .getPalette(image_filename, 5)
  .then((result) =>
    result.forEach((rgb, idx) => console.log(wrangle_rgb_to_css(rgb, idx)))
  );

// shell command:
// {node get_color_palette.js;cat styles.scss} > styles_with_palette.scss
