---
title: SEO 優化
description: 本文將詳細介紹 SEO 優化
---

# SEO 優化

Docusaurus 對於 SEO 優化 的部分已經做得很完善，應該要添加的 matadata 標籤都會幫我們加好

## Sitemap

sitemap 可以幫助搜尋引擎更快的獲取網頁的結構，Docusaurus 在 build 的時候就會自動產生 `sitemap.xml`，不需要自行手動設定

## 重複性網頁問題

如果網站上有重複性網頁的話，會導致權重分散，對 SEO 並不是太好。最常見的重複性網頁問題就是網址的後綴有「/」，如 [http://docs.wise-paas.io](http://docs.wise-paas.io/) 和 http://docs.wise-paas.io/ 這兩個網址雖然是一樣的，但在 Google 爬蟲的眼裡卻是兩個不一樣的位置。

解決方式要用 301 轉址的方式，將 http://docs.wise-paas.io/ 的路徑轉到 [http://docs.wise-paas.io](http://docs.wise-paas.io/) ，這樣就可以避免這個問題。由於 Develop Side 的網頁是使用 SSG（靜態網頁輸出）的方式來進行佈署，網頁本身並沒有 Server Side 可以去做轉址的處理，所以建議可以使用 Azure Front Door 來處理這個問題。

## Title & Description

每一篇 Docusaurus 的文章都建議添加 Title 和 Description，這兩者的內容也有一定的規範

1. Title 長度建議落在 50-60 英文字元；Description 約落在 160 個英文字元內
2. 每一個網頁都需要獨一無二的 Title 名稱
3. Title 越精簡對於 SEO 越有幫助

Docusaurus 的 Title 和 Description 是寫在文章最上方

```markdown
---
title: 建立多個 Docs 資料庫
description: 本文將詳細介紹如何建立多個 Docs 資料庫
---
```