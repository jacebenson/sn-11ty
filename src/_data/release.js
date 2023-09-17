const links = require('./links.js');

const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
  return {
    name: "v?",
    html_url: links.github.allReleases
  };
  try {
  console.log( "Fetching new github TskrDocs release" );
  let json = await Cache(links.github.releasesApi, {
    duration: "1d", // 1 day
    type: "json" // also supports "text" or "buffer"
  });
  return {
    name: json[0]?.name || "v0.1",
    html_url: json[0]?.html_url || links.github.allReleases
  }
} catch (error){
  console.log( "Failed getting GitHub release, returning non-real" );
    return {
      name: "v?",
      html_url: links.github.allReleases
    };
}
};