---
title: 版本管理
description: 本文將詳細介紹版本管理
---

::: tip
本章節講述的是當將把版本號移到左側 Sidebar 使用到的元件說明
:::

## swizzle 元件清單
- yarn swizzle @docusaurus/theme-classic DocSidebar/Desktop
桌機版本的側邊欄位置

```javascript

import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import styles from './styles.module.css';
import VersionDropdown from '@site/src/components//DocsVersionDropdown';  /*新增的*/

function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}) {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <VersionDropdown />         /*新增的*/
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}
export default React.memo(DocSidebarDesktop);
```
- yarn swizzle @docusaurus/theme-classic Icon/Arrow
桌機版本側邊欄收合的元件，原本是雙箭頭改成更好理解的 SVG icon ，長的像 |◄

- yarn swizzle @docusaurus/theme-classic Navbar/MobileSidebar
手機版本的側邊欄位置


## 客製元件
components/DocsVersionDropdown
