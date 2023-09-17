const links = require('./links');

const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
  return 'i'
  try {
    console.log("Fetching new github TskrDocs contributors");
    let json = await Cache(links.github.docsContributorsApi, {
      duration: "1d", // 1 day
      type: "json" // also supports "text" or "buffer"
    });
    return json
  } catch (error) {
    return 'i'
  }
};