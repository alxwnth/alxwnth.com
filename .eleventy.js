module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CourierNew.ttf");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy({ "favicon.ico": "/" });
};
