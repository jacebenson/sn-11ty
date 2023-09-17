const links = require('./links');
module.exports = {
  // NOTE: `process.env.URL` is provided by Netlify, and may need
  // adjusted pending your host
  url: process.env.URL || "http://localhost:8080",
  siteName: "Tskr",
  siteDescription:
    "Own your work, and your automation!",
  siteImage: "images/opengraph-256.png",
  siteURL: "https://tskr.io/",
  twitterHandle: "@IoTskr",
  siteTwitterTitle: "Tskr, track your work and your automation",
  navLinks: [
    links.docs,
    links.rest,
    links.about,
  ],
  iconLinks: [
    links.github,
    links.twitter,
  ],
  leftNavLinks: [
    links.docs,
    links.files,
    links.schema,
    links.cookbooks,
    links.proptery
  ],
  footerLinks: [
    links.contributing,
    links.github,
    links.twitter,
  ]
};
