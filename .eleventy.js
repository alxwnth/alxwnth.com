module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './CourierNew.ttf': 'CourierNew.ttf',
    './bundle.css': 'bundle.css',
    './favicon.ico': 'favicon.ico'
  });
  
  return {
    dir: {
      output: "build",
    },
  };
};
