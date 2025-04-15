---
title: Feedback Widget
description: 本文將詳細介紹Feedback Widget
---

# Feedback Widget

Docusaurus 官方並沒有提供內建的 Feedback Widget，比較常見的做法是串接 giscus 來做，giscus 可以跟 GitHub Discussion 做連接，建立文章的留言區。但如果需求僅止於按讚功能的話，自己做一個 Feedback Widget Component 可能會比較合適

## 在 Docusaurus 建立 Component

使用 Docusaurus Swizzling 的功能將 Layout Component 拆分出來

```bash
# 載入 Docusaurus Swizzling
npm run swizzle
```

依照順序選擇下列選項

```bash
> @docusaurus/theme-classic
> DocItem/Layout
> Eject
```

接著就會產生 Layout Component 的檔案

```markdown
website
└── src
    └── theme
        └── DocItem
            └── Layout
                ├── index.js
                └── styles.module.css
```

接著在 `src/components` 新增 Feedback Widget Component

```markdown
website
└── src
    └── components
        └── FeedbackWidget        # Feedback Widget Component
            ├── index.js
            └── styles.module.css
```

## 開發 Feedback Widget

```jsx
/* FeedbackWidget/index.js */

import styles from './styles.module.css';

export default function FeedbackWidget() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (score) => {
    if (isSubmitted) {
      return false;
    }
    setIsSubmitted(true);

    const apiUri = "https://script.google.com/macros/s/AKfycbzEE4hq3RkgpduAU-ccvZpS2DnR6vue-BE883bMEFdI0N_j0k_lo949K0nJ132E6q7A/exec";

    const date = new Date()

    const data = {
      createTime: date,
      score: score,
      urlParameter: window.location.href,
      urlPath: window.location.pathname,
    };

    try {
      await fetch(apiUri, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        }
      });
    } catch(error) {
      console.log('Error:', error);
    }
    setIsSubmitted(false);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Was this helpful?</h2>
      <div className={styles.feedback}>
        <button className={styles.button} onClick={() => handleSubmit(1)}>
          No
        </button>
        <button className={styles.button} onClick={() => handleSubmit(2)}>
          Not sure
        </button>
        <button className={styles.button} onClick={() => handleSubmit(3)}>
          Yes, it was!
        </button>
      </div>
    </section>
  )
}
```

```css
/* FeedbackWidget/styles.module.css */

.section {
  padding: 30px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: var(--ifm-pagination-nav-border-radius);
  text-align: center;
}

.title {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.feedback {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  padding: 0;
  margin: 0 10px;
  line-height: 1.5em;
  background-color: transparent;
  border: none;
  border-radius: 0;
  outline: none;
  transform: translateZ(0);
  font: inherit;
  cursor: pointer;
  text-align: left;
}

.button:hover {
  color: var(--ifm-color-primary);
}
```

最後在 `src/theme/DocItem/Layout` 將 Feedback Widget Component 引入進來

```jsx
import FeedbackWidget from '@site/src/components/FeedbackWidget';

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <FeedbackWidget />   // 置入 Feedback Widget Component
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
```