// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const cfgTitle = "前端大刘";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: cfgTitle,
  tagline: "记录和分享，每天进步一点点！",
  url: "https://lzwdot.github.io",
  baseUrl: "/docusaurus/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "lzwdot", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  deploymentBranch: "gh-pages",

  i18n: {
    defaultLocale: "zh-CN", // 显示汉化
    locales: ["zh-CN"], // 可选语言
  },

  plugins: [
    "docusaurus-plugin-sass",
    [
      require.resolve("docusaurus-plugin-baidu-tongji"),
      {
        token: "96d91412aff9543cd8e022f381d8bf1c",
      },
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "issues",
        path: "issues",
        routeBasePath: "issues",
        sidebarPath: require.resolve("./src/config/sidebars.js"),
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "codes",
        path: "codes",
        routeBasePath: "codes",
        sidebarPath: require.resolve("./src/config/sidebars.js"),
      }),
    ],
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./src/config/sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/lzwdot/docusaurus",
        },
        blog: {
          blogTitle: "博文",
          blogDescription: "博文",
          blogSidebarTitle: "最新博文",
          blogSidebarCount: 5, // 隐藏博文侧边栏
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/lzwdot/docusaurus",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true, // 可以折叠
          autoCollapseCategories: true, // 自动折叠所有其他同级类别
        },
      },

      navbar: {
        title: cfgTitle,
        logo: {
          alt: "Lzw's Logo",
          src: "img/favicon.ico",
        },
        items: [
          { to: "/blog", label: "博文", position: "left" },
          {
            type: "doc",
            docId: "README",
            position: "left",
            label: "笔记",
          },
          {
            to: "/issues",
            label: "真题",
            position: "left",
            activeBaseRegex: `/issues/`,
          },
          {
            to: "/codes",
            label: "代码",
            position: "left",
            activeBaseRegex: `/codes/`,
          },
          {
            href: "https://github.com/lzwdot/docusaurus",
            // label: 'GitHub',
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
        hideOnScroll: true, // 滚动隐藏
      },
      footer: {
        style: "dark",
        logo: {
          alt: "微信扫一扫关注该公众号",
          src: "https://open.weixin.qq.com/qr/code?username=jslangcn",
          href: "#",
          width: 129,
          height: 129,
        },
        copyright: `Copyright © ${new Date().getFullYear()}-present Lzw.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
