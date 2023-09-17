const links = require('./links');

const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
  try {
    console.log("Fetching new github stargazers count…");

    let json = await Cache(links.github.stargazersApi, {
      duration: "1d", // 1 day
      type: "json" // also supports "text" or "buffer"
    });
    return json.stargazers_count
  } catch (error) {
    return "i"
  }
};