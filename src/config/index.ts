import path from 'path'
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as DocsPlugin from '@docusaurus/plugin-content-docs';
import packageJson from '../../package.json'

// plugins
const FeedbackPlugin = path.resolve(__dirname, '..', 'plugins/Feedback/index.js');
const TailwindPlugin = path.resolve(__dirname, '..', 'plugins/Tailwind/index.js');
// assets
const customCss = path.resolve(__dirname, '..', 'assets/custom.scss');
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
  tagline: "专注于互联网 web 技术分享",

  // Set the production url of your site here
  url: 'https://lzwdot.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lzwdot', // Usually your GitHub org/user name.
  projectName: 'lzwdot.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    path:'src/i18n'
  },
  plugins: [
    FeedbackPlugin,
    TailwindPlugin,
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
        editUrl: (res) => {
          return '/feedback'
        },
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
          editUrl: (res) => {
            return '/feedback'
          }
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          blogTitle: "博文",
          blogDescription: "博文",
          blogSidebarTitle: "最新博文",
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          editUrl: (res) => {
            return '/feedback'
          }
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
          label: "博文",
          to: "/blog",
          position: "left"
        },
        {
          label: "笔记",
          to: "/docs",
          position: "left"
        },
        {
          label: "真题",
          to: "/issue",
          position: "left",
        },
        {
          type: 'search',
          position: 'left',
        },
        {
          label: '关于',
          to: '/about',
          type: 'dropdown',
          position: 'right',
          items: [
            {
              label: '反馈',
              to: '/feedback',
            },
          ],
        },
        {
          label: packageJson.version,
          to: '/',
          type: 'dropdown',
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
      copyright: `基于 MIT 许可发布<br/>Copyright © ${new Date().getFullYear()}-present Lzw.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
