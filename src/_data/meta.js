const links = require('./links');
module.exports = {
  // NOTE: `process.env.URL` is provided by Netlify, and may need
  // adjusted pending your host
  url: process.env.URL || "http://localhost:8080",
  monitor: process.env.MONITOR || "false",
  // pagesize is 0 for dev and 1 for prod// defualt to 1
  pagesize: process.env.PAGESIZE || "1",
  
  
  siteName: "sn.jace.pro",
  siteDescription:
    "a copy of the docs for ServiceNow",
  siteImage: "images/opengraph-256.png",
  siteURL: "https://sn.jace.pro/",
  twitterHandle: "@jacebenson",
  siteTwitterTitle: "sn.jace.pro - a copy of the docs for ServiceNow",
  navLinks: [
    links.docs,
    //links.rest,
    links.about,
  ],
  iconLinks: [
    links.github,
    links.twitter,
  ],
  leftNavLinks: [
    links.docs,
    links.cookbooks,
    links.access,
    links.automations,
    links.userexperience,
    links.reference,
    links.javascript,
    links.proptery,
    links.scriptInclude,
    links.upgrades
  ],
  footerLinks: [
    links.contributing,
    links.github,
    links.twitter,
  ]
};
