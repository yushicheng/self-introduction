const lightCodeTheme = require("prism-react-renderer/themes/vsDark");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

/** @type {import("@docusaurus/types").DocusaurusConfig} */
module.exports = {
  noIndex: true,
  title: "俞士成的职业履历",
  tagline: "拒绝成为一个只懂技术的屌丝!",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  baseUrl: "/self-introduction/",
  url: "https://yushicheng.github.io",
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
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    ["@docusaurus/preset-classic", {
      docs: {
        remarkPlugins: [require("mdx-mermaid")],
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
