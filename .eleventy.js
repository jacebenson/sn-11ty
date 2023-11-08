const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require('eleventy-plugin-nesting-toc');
const anchor = require("markdown-it-anchor");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginTOC);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/rest/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: anchor.permalink.headerLink()
  });
  eleventyConfig.setLibrary("md", markdownLibrary);
  eleventyConfig.addFilter("lastmodDate", function(value){
    // return should be yyyy-mm-dd with padded 0's for mm and dd
    let date = new Date(value);
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    return `${date.getFullYear()}-${mm.toString().padStart(2, "0")}-${dd.toString().padStart(2, "0")}`;
  })
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};