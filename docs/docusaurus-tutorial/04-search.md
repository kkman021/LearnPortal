---
title: 全站搜尋
description: 本文將詳細介紹全站搜尋
---

# 全站搜尋

搜尋功能可以使用第三方的搜尋服務（[Algolia DocSearch](https://docusaurus.io/zh-CN/docs/search#using-algolia-docsearch)）或是本地搜尋（Local Search）的方式來進行實作

## 第三方搜尋服務

以 Algolia DocSearch 為例，首先必須要先申請其服務與金鑰，接著搜尋平台會每隔一段時間爬取我們的網站內容，搜尋行為則是以呼叫平台方的 API 的方式來進行搜尋

:::tip **Algolia DocSearch 教學文章**
https://notes.boshkuo.com/docs/Docusaurus/algolia-search
:::

## 本地搜尋

使用 Search Plugin 的方式來進行搜尋，直接搜尋整包網頁專案的內容，搜尋時不需要呼叫 API

:::tip **Docusaurus 官方推薦的 Search Plugin**
https://docusaurus.io/community/resources#search
:::

```bash
# 安裝 Local Search Plugin
npm i @easyops-cn/docusaurus-search-local
```

在設定檔設定搜尋選項

```jsx
/* docusaurus.config.js */

const config = {
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }
    ],
  ],
}
```

設定完成後，Header 的右上方就會出現搜尋框

### 本地搜尋中文內容支援

要讓本地搜尋套件能夠搜尋中文的話，則需要在設定檔添加一些選項

如果網站有添加多個資料庫的話，需要在 docsRouteBasePath 這個欄位添加指定的 Route Path

```jsx
/* docusaurus.config.js */

const config = {
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],                    // 添加中文搜尋
        docsDir: ['demo', 'tutorial'],
        docsRouteBasePath: ['/demo', '/tutorial'], // 搜尋特定 Route Path 底下的內容
      }
    ],
  ],
}
```

:::warning
本地搜尋目前看起來不支援跨語系搜尋，如當前語系為 en，搜尋 zh-tw 版本的內容是搜尋不到的，必須要先切換到 zh-tw 語系才行
:::