const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addPassthroughCopy({
    "./assets/CourierNew.ttf": "CourierNew.ttf",
    "./assets/favicon.ico": "favicon.ico",
  });

  return {
    dir: {
      output: "build",
    },
  };
};
