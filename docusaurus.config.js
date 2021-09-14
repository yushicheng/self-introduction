const lightCodeTheme = require("prism-react-renderer/themes/vsDark");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

/** @type {import("@docusaurus/types").DocusaurusConfig} */
module.exports = {
  noIndex:true,
  title: "俞士成的职业履历",
  tagline: "像对待情人一样对待项目,像创造生命一样创造生态",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  baseUrl: "/self-introduction/",
  url: "https://yushicheng.github.io/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: require("./configs/navbar-config"),
    footer: require("./configs/footer-config"),
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    }
  },
  presets: [
    ["@docusaurus/preset-classic",{
      docs: {
        sidebarPath: require.resolve("./configs/sidebars.js"),
        // Please change this to your repo.
        editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
      },
      blog: {
        showReadingTime: true,
        // Please change this to your repo.
        editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
      },
      theme: {
        customCss: require.resolve("./src/css/custom.css"),
      },
    }]
  ]
};
