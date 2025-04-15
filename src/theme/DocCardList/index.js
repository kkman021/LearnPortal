import React from 'react';
import DocCard from '@theme/DocCard';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';

export default function CustomDocCardList() {
  // 獲取當前側邊欄的類別信息
  const category = useCurrentSidebarCategory();

  console.log(category.items);

  // 過濾掉需要隱藏的文檔（假設文檔的 frontmatter 中有 hideFromDocCardList 屬性）
  const filteredItems = category.items.filter(
    (item) => !item.customProps?.hideFromDocCardList
  );

  const firstDocCardCount = category.items.find(
    (item) => item.customProps?.DocCardCount !== undefined
  )?.customProps?.DocCardCount;

  return (
    <div className="row">
      {filteredItems.map((item, index) => {

        const navCount = firstDocCardCount || 6

        // 計算列寬類名
        const colClass = `col col--${navCount}`;

        return (
          <div key={index} className={`${colClass} margin-bottom--lg`}>
            <DocCard item={item} />
          </div>
        );
      })}
    </div>
  );
}
