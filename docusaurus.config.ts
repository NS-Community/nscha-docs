import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// NSCHA — Non-Surveillance CAPTCHA for Human Authentication.
// Structure follows the "chapter landing page + same-named subfolder" pattern:
// docs/<chapter>.mdx is the entry, docs/<chapter>/*.mdx are its pages.
const config: Config = {
  title: 'NSCHA 文档',
  tagline: 'Non-Surveillance CAPTCHA for Human Authentication',
  favicon: 'img/favicon.svg',

  url: 'https://nscha.nsbbs.eu.cc',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'NSCHA',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://nsbbs.eu.cc',
          label: '返回论坛',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {label: '介绍', to: '/'},
            {label: '工作原理', to: '/how-it-works'},
            {label: '配置参考', to: '/configuration'},
          ],
        },
        {
          title: '关于',
          items: [
            {label: '隐私边界', to: '/privacy'},
            {label: '局限', to: '/limitations'},
            {label: 'gamesense 论坛', href: 'https://nsbbs.eu.cc'},
          ],
        },
      ],
      copyright: '© 2026 gamesense · get good get gamesense',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['zh'],
        docsRouteBasePath: '/',
        searchBarShortcutKeymap: 'ctrl+shift+f',
      },
    ],
  ],
};

export default config;
