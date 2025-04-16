// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

import path from "path";
import fs from "fs";

const generateOpenApiPlugins = () => {
  const openapiDir = path.resolve(__dirname, 'src/api');
  const openapiFiles = fs.readdirSync(openapiDir).filter(file => file.endsWith('.yml'));

  const config = openapiFiles.reduce((data, file) => {
    const id = path.basename(file, '.yml');
    data[id] = {
      specPath: path.join(openapiDir, file),
      outputDir: `docs/docusaurus-api-docs/${id}`,
      sidebarOptions: {
        groupPathsBy: 'tag',
      }
    }
    return data;
  }, {});

  const result = [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'api',
      docsPluginId: 'classic',
      config,
    },
  ];
  return result;
};

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Advantech Learn Center",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://learn.advantech.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  themes: [
    'docusaurus-theme-openapi-docs',
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        
        docsDir: ["EdgeSync", "BSP"],
        docsRouteBasePath: ["/EdgeSync", "/BSP"],
        
        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],
      }
    ],
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Advantech", // Usually your GitHub org/user name.
  projectName: "LearnPortal", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Register client modules
  clientModules: [
    //require.resolve('./src/clientModules/agentBuilderChatBot.js'),    //For agent builder chatbot, it's options 
    //require.resolve('./src/clientModules/LocalChatBot.js'),             //For local n8n chatbot, it's options 
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: false,
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogTitle: 'Developer Portal Blog',
          blogDescription: 'The latest news and updates from Advantech Developer Portal',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
        // 停用顏色模式切換
        colorMode: {
          // 強制使用亮色模式
          defaultMode: 'light',
          // 停用切換按鈕
          disableSwitch: true,
          // 禁止跟隨系統設定
          respectPrefersColorScheme: false,
        },
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
        navbar: {
          title: '｜ Learn',
          logo: {
            alt: "Advantech Learn Center",
            src: "img/logo.svg",
          },
          items: [
            {
              label: "Discover",
              items: [
                {
                  type: 'doc',
                  docId: 'Overview',
                  docsPluginId: 'BSP', 
                  label: "BSP & Yocto", 
                },
                {
                  label: "Training",
                  to: "https://wise-iot.advantech.com/zh-tw/marketplace/training",
                },
                {
                  label: "Webinars",
                  to: "https://wise-iot.advantech.com/zh-tw/marketplace/webinars",
                }
              ],
            },
            {
              label: "Product Documentation",
              items: [
                {
                  type: 'doc',
                  docId: 'Introduction',
                  docsPluginId: 'EdgeSync', 
                  label: "EdgeSync", 
                },
                {
                  label: "iEMS",
                  to: "https://wise-iot.advantech.com/zh-tw/marketplace/solutions/iems-solutions",
                },
                {
                  label: "IoTSuite",
                  to: "https://wise-iot.advantech.com/zh-tw/marketplace/solutions/wise-iotsuite",
                },
                {
                  label: "iMachine",
                  to: "https://wise-iot.advantech.com/zh-tw/marketplace/product/advantech.machineunite",
                }
              ],
            },
            {
              type: 'dropdown',
              label: 'API Reference',
              position: 'left',
              items: [
                {
                  label: 'EdgeHub',
                  to: 'https://docs.wise-paas.advantech.com/zh-tw/Guides_and_API_References/1676956646152508777/1677046206377513884/1717582950776559539/v2.1.0'
                },
                {
                  label: 'EdgeLink',
                  to: 'https://docs.wise-paas.advantech.com/zh-tw/Guides_and_API_References/1571367409966112123/1574927875848110211/1659609863657254888/v2.0'
                }        
              ],
            }
            /* if you want to add version dropdown button, please uncomment the code below, if there is no version dropdown button keep remark the code below 
            {
              type: 'docsVersionDropdown',
              docsPluginId: 'EdgeSync',
              position: 'right',
              className: 'version-dropdown-button'  // handle version dropdown button class name
            },
            */
          ],
        },
        footer: {
          style: "light",
          copyright: `fake copyright, the real content is in the component Footer/Copyright/index.js`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
          additionalLanguages: ['csharp'],
        },
        /* Remove Algolia search feature
        algolia: {
          // The application ID provided by Algolia
          appId: 'F4LBX1QJGV',

          // Public API key: it is safe to commit it
          apiKey: '3e31d25b43f1cadb8e57c0c07ffe14cd',

          indexName: 'edgesync',

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
          externalUrlRegex: 'external\\.com|domain\\.com',

          // Optional: Algolia search parameters
          searchParameters: {},

          // Optional: path for search page that enabled by default (`false` to disable it)
          searchPagePath: 'search',

          // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
          insights: false,

          //... other Algolia params
        },
        */
      }),

  plugins: [
    generateOpenApiPlugins(),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'EdgeSync',
        path: 'EdgeSync',
        routeBasePath: 'EdgeSync',
        sidebarPath: require.resolve('./src/sildebar/doc.js'),
        // Make sure the plugin has the following settings
        includeCurrentVersion: true,
        lastVersion: 'current',
        versions: {
          current: {
            label: 'Current V1.0.0',
            path: '',
          },
        }
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'BSP',
        path: 'BSP',
        routeBasePath: 'BSP',
        sidebarPath: require.resolve('./src/sildebar/bsp.js'),
        // Make sure the plugin has the following settings
        includeCurrentVersion: true,
        lastVersion: 'current',
        versions: {
          current: {
            label: 'Latest',
            path: '',
          },
        },
      },
    ]
  ],
};

export default config;
