const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addPassthroughCopy({
    "./assets/CourierNew.ttf": "CourierNew.ttf",
    "./assets/LiberationSerif-Regular.ttf": "LiberationSerif-Regular.ttf",
    "./assets/LiberationSerif-Bold.ttf": "LiberationSerif-Bold.ttf",
    "./assets/favicon.ico": "favicon.ico",
  });
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      output: "_site",
    },
  };
};
