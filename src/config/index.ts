import path from 'path'
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as DocsPlugin from '@docusaurus/plugin-content-docs';
import packageJson from '../../package.json'

const feedbackPlugin = path.resolve(__dirname, '..', 'plugins/Feedback/index.js');
const customCss = path.resolve(__dirname, '..', 'assets/custom.css');
const sidebarPath = path.resolve(__dirname, 'sidebars.ts');
const admonitions = {
  keywords: ['htmlDemo', 'jsDemo'],
  extendDefaults: true,
}

const cfgTitle = "前端大刘";
const cfgLogo = 'logo.svg'
const config: Config = {
  favicon: cfgLogo,
  title: cfgTitle,
  tagline: "记录和分享，每天进步一点点！",

  // Set the production url of your site here
  url: 'https://lzwdot.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lzwdot', // Usually your GitHub org/user name.
  projectName: 'lzwdot.github.io', // Usually your repo name.
  deploymentBranch : 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  plugins: [
    feedbackPlugin,
    "docusaurus-plugin-sass",
    [
      'docusaurus-plugin-baidu-tongji',
      {
        token: "4ba49a0c57f7fbbc00269ce8700cfb0b",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "issue",
        path: "issue",
        routeBasePath: "issue",
        sidebarPath,
        admonitions,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsPlugin.Options,
    ]
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath,
          admonitions,
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            let sidebarPosition = 1000000;
            args.docs = args.docs.map((item) => {
              if (!item.sidebarPosition) {
                item.sidebarPosition = item.frontMatter.slug ? Number(item.frontMatter.slug.slice(1)) : sidebarPosition++;
              }
              return item;
            });
            return await defaultSidebarItemsGenerator(args);
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          blogTitle: "博文",
          blogDescription: "博文",
          blogSidebarTitle: "最新博文",
          blogSidebarCount: 0,
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links. 
        },
        theme: {
          customCss: customCss,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: cfgLogo,
    navbar: {
      title: cfgTitle,
      logo: {
        alt: cfgTitle,
        src: cfgLogo,
      },
      items: [
        {
          type: 'search',
          position: 'left',
        },
        { to: "/blog", label: "博文", position: "right" },
        {
          type: "doc",
          docId: "README",
          position: "right",
          label: "笔记",
        },
        {
          to: "/issue",
          label: "真题",
          position: "right",
          activeBaseRegex: `/issue/`,
        },
        { to: "/feedback", label: "反馈", position: "right" },
        {
          type: 'dropdown',
          label: packageJson.version,
          position: 'right',
          items: [
            {
              label: 'v2.x',
              href: 'https://lzwdot.github.io/docusaurus',
            },
            {
              label: 'VitePress',
              href: 'https://lzwdot.github.io/vitepress',
            },
          ],
        },
        {
          href: "https://github.com/lzwdot/docusaurus",
          position: "right",
          className: "github-icon",
        },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    algolia: {
      appId: 'ZG54CLJP5I',
      apiKey: 'ec33706e39f77b9358d60b9dc1dc2916',
      indexName: 'lzwdot',
      contextualSearch: true,
    },
    footer: {
      style: 'dark',
      copyright: `基于 MIT 许可发布 <br/> Copyright © ${new Date().getFullYear()}-present Lzw.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
