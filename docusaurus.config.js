// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

import path from "path";
import fs from "fs";

import tailwindPlugin from "./src/plugins/tailwind-config.cjs";

const generateOpenApiPlugins = () => {
  const openapiDir = path.resolve(__dirname, 'src/api');
  const openapiFiles = fs.readdirSync(openapiDir).filter(file => file.endsWith('.yml'));

  const config = openapiFiles.reduce((data, file) => {
    const id = path.basename(file, '.yml');
    data[id] = {
      specPath: path.join(openapiDir, file),
      outputDir: `${id}/APIs`,
      sidebarOptions: {
        sidebarPath: require.resolve('./src/sildebar/bsp.js'),
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
  title: "Advantech Learning Portal",
  tagline: "AA",
  favicon: "favicon.ico",

  // Set the production url of your site here
  url: 'http://localhost:3200/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  themes: [
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
    'docusaurus-theme-openapi-docs',
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Advantech", // Usually your GitHub org/user name.
  projectName: "LearningPortal", // Usually your repo name.

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
          blogTitle: 'Learning Portal Blog',
          blogDescription: 'The latest news and updates from Advantech Learning Portal',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: ["./src/css/custom.scss"],
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
          title: 'Learning Portal',
          logo: {
            alt: "Advantech Learning Portal",
            src: "/img/logo.svg",
            width: 100,
            height: 20
          },
          items: [
            {
              label: "Discover",
              items: [
                {
                  type: 'doc',
                  docId: 'Overview',
                  docsPluginId: 'BSP',
                  label: "BSP",
                },
                {
                  label: "Training",
                  to: "https://wise-iot.advantech.com/zh-tw/marketplace/training",
                },
                {
                  label: "Webinars",
                  to: "https://wise-iot.advantech.com/zh-tw/marketplace/webinars",
                },
                {
                  label: "Container Catalog",
                  to: "https://catalog.advantech.com/",
                }
              ],
            },
            {
              type: 'dropdown',
              label: 'Products',
              position: 'left',
              items: [
                {
                  type: 'doc',
                  docId: 'Introduction',
                  label: 'EdgeSync',
                  docsPluginId: 'EdgeSync',
                },
                {
                  type: 'doc',
                  docId: 'Introduction',
                  label: 'Agent Builder',
                  docsPluginId: 'AgentBuilderUserManual',
                },
                {
                  type: 'doc',
                  docId: 'Introduction',
                  label: 'EdgeHub',
                  docsPluginId: 'EdgeHubUserManual',
                },
                {
                  type: 'doc',
                  docId: 'Introduction',
                  label: 'EdgeLink',
                  docsPluginId: 'EdgeLinkUserManual',
                }
              ],
            },
            {
              type: 'dropdown',
              label: 'API Hubs',
              position: 'left',
              items: [
                {
                  type: 'doc',
                  docId: 'edgehub-restful-api',
                  label: 'EdgeHub RESTful API',
                  docsPluginId: 'EdgeHubAPIs',
                }
              ],
            }
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
        languageTabs: [
          {
            highlight: "bash",
            language: "curl",
            logoClass: "curl",
          },
          {
            highlight: "python",
            language: "python",
            logoClass: "python",
          },
          {
            highlight: "csharp",
            language: "csharp",
            logoClass: "csharp",
          },
          {
            highlight: "go",
            language: "go",
            logoClass: "go",
          },
          {
            highlight: "php",
            language: "php",
            logoClass: "php",
          },
          {
            highlight: "java",
            language: "java",
            logoClass: "java",
            variant: "unirest",
          },
          {
            highlight: "powershell",
            language: "powershell",
            logoClass: "powershell",
          },
          {
            highlight: "javascript",
            language: "javascript",
            logoClass: "javascript",
          }
        ],
      }),

  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'XXXX'
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'EdgeSync',
        path: 'EdgeSync',
        routeBasePath: 'EdgeSync',
        sidebarPath: require.resolve('./src/sildebar/doc.js'),
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
        includeCurrentVersion: true,
        lastVersion: 'current',
        versions: {
          current: {
            label: 'Latest',
            path: '',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'EdgeHubUserManual',
        path: 'EdgeHub/UserManual',
        routeBasePath: 'EdgeHub',
        docItemComponent: '@theme/ApiItem',
        sidebarPath: require.resolve('./src/sildebar/edgehub.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'EdgeLinkUserManual',
        path: 'EdgeLink/UserManual',
        routeBasePath: 'UserManual/EdgeLink',
        docItemComponent: '@theme/ApiItem',
        sidebarPath: require.resolve('./src/sildebar/edgelink.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'AgentBuilderUserManual',
        path: 'AgentBuilder/UserManual',
        routeBasePath: 'UserManual/AgentBuilder',
        docItemComponent: '@theme/ApiItem',
        sidebarPath: require.resolve('./src/sildebar/agentbuilder.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'EdgeHubAPIs',
        path: 'EdgeHub/APIs',
        routeBasePath: 'APIs/EdgeHub',
        docItemComponent: '@theme/ApiItem',
        sidebarPath: require.resolve('./src/sildebar/edgehub.js'),
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apis",
        docsPluginId: "classic",
        config: {
          edgesync: {
            specPath: "src/api/EdgeHub.yml",
            outputDir: "EdgeHub/APIs",
            hideSendButton: false,
          }
        }
      }
    ],
    'docusaurus-plugin-sass',
    tailwindPlugin
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap',
      },
    },
  ]
};

export default config;
