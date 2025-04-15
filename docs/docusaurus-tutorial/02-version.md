---
title: 版本管理
description: 本文將詳細介紹版本管理
---

# 版本管理

在終端機輸入指令與版號，新增版本

```bash
# 產生 version 1.0.0 的 demo 資料庫
npm run docusaurus docs:version:demo 1.0.0

# 產生 version 1.0.0 的 tutorial 資料庫
npm run docusaurus docs:version:tutorial 1.0.0
```

新增後會產生 `versions.json`、`versioned_docs`、`versioned_sidebars` 等檔案

```markdown
website
├── demo                 # demo 資料庫         
│   ├── foo
│   │   └── bar.md
│   └── hello.md
├── demo_versions.json   # demo 資料庫的版本管理檔
├── demo_versioned_docs
│   ├── version-1.1.0    # version 1.1.0 的 demo 資料庫
│   │   ├── foo
│   │   │   └── bar.md
│   │   └── hello.md
│   └── version-1.0.0    # version 1.0.0 的 demo 資料庫
│       ├── foo
│       │   └── bar.md
│       └── hello.md
├── demo_versioned_sidebars
│   ├── version-1.1.0-sidebars.json  # version 1.1.0 的 sidebars
│   └── version-1.0.0-sidebars.json  # version 1.0.0 的 sidebars
├── sidebarsDemo.js
├── sidebarsTutorial.js
├── docusaurus.config.js
└── package.json
```

調整設定檔，在 navbar 添加版本管理的下拉選單

```jsx
/* docusaurus.config.js */

const config = {
  themeConfig: ({
    navbar: {
      items: [
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'demo',
          position: 'right',
          className: 'version-dropdown-button'  // 添加特定名稱的 className
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'tutorial',
          position: 'right',
          className: 'version-dropdown-button'  // 添加特定名稱的 className
        },
      ]
    }
  })
}
```

如果不想要顯示 Next 版本的話，可以在設定檔的 plugins 添加 `includeCurrentVersion: false`

```jsx
/* docusaurus.config.js */

const config = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'demo',
        path: 'demo',
        routeBasePath: 'demo',
        sidebarPath: require.resolve('./sidebarsDemo.js'),
        includeCurrentVersion: false // 資料庫不包含最新的版本
      },
    ],
  ]
}
```

## 動態顯示下拉選單

由於設定檔沒辦法動態顯示、隱藏下拉選單，所以這邊我們自己用 CSS 做

這邊我們需要使用 Docusaurus Swizzling 的功能將 DropdownNavbarItem Component 拆分出來

:::tip **Docusaurus Swizzling 的使用方式可以參考 giscus 的教學文章**
https://jimhuang.dev/docusaurus/giscus/
:::

載入 Docusaurus Swizzling

```bash
# 載入 Docusaurus Swizzling
npm run swizzle
```

依照順序選擇下列選項

```bash
> @docusaurus/theme-classic
> NavbarItem/DropdownNavbarItem
> Eject
```

接著就會產生 DropdownNavbarItem Component 的檔案

```markdown
website
└── src
    └── theme
        └── NavbarItem/DropdownNavbarItem
            ├── index.js
            └── styles.module.css
```

將判斷 `isActive` 的邏輯加在 NavbarItem 上

```jsx
/* src/theme/NavbarItem/DropdownNavbarItem/index.js */

import React, {useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import {
  isRegexpStringMatch,
  useCollapsible,
  Collapsible,
} from '@docusaurus/theme-common';
import {isSamePath, useLocalPathname} from '@docusaurus/theme-common/internal';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarItem from '@theme/NavbarItem';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function isItemActive(item, localPathname) {
  if (isSamePath(item.to, localPathname)) {
    return true;
  }
  if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
    return true;
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }
  return false;
}
function containsActiveItems(items, localPathname) {
  return items.some((item) => isItemActive(item, localPathname));
}
function DropdownNavbarItemDesktop({
  items,
  position,
  className,
  onClick,
  ...props
}) {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // We need to get the current locale to build the correct active link
  const localPathname = useLocalPathname();
  const { i18n: { currentLocale } } = useDocusaurusContext();

  const navbarItemActive = (() => {
    const locale = currentLocale === 'en' ? '' : `/${currentLocale}`;
    return containsActiveItems(items, `${locale}${localPathname}`);
  })();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return;
      }
      setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('focusin', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('focusin', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
        'version-dropdown-item': (className || '').includes('version-dropdown-button'),
        'active': navbarItemActive,
      })}
      >
      <NavbarNavLink
        aria-haspopup="true"
        aria-expanded={showDropdown}
        role="button"
        // # hash permits to make the <a> tag focusable in case no link target
        // See https://github.com/facebook/docusaurus/pull/6003
        // There's probably a better solution though...
        href={props.to ? undefined : '#'}
        className={clsx('navbar__link', className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}>
        {props.children ?? props.label}
      </NavbarNavLink>
      <ul className="dropdown__menu">
        {items.map((childItemProps, i) => (
          <NavbarItem
            isDropdownItem
            activeClassName="dropdown__link--active"
            {...childItemProps}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}
function DropdownNavbarItemMobile({
  items,
  className,
  position, // Need to destructure position from props so that it doesn't get passed on.
  onClick,
  ...props
}) {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(items, localPathname);
  const {collapsed, toggleCollapsed, setCollapsed} = useCollapsible({
    initialState: () => !containsActive,
  });

  // We need to get the current locale to build the correct active link
  const { i18n: { currentLocale } } = useDocusaurusContext();

  const navbarItemActive = (() => {
    const locale = currentLocale === 'en' ? '' : `/${currentLocale}`;
    return containsActiveItems(items, `${locale}${localPathname}`);
  })();

  // Expand/collapse if any item active after a navigation
  useEffect(() => {
    if (containsActive) {
      setCollapsed(!containsActive);
    }
  }, [localPathname, containsActive, setCollapsed]);
  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed,
        'version-dropdown-item': (className || '').includes('version-dropdown-button'),
        'active': navbarItemActive,
      })}>
      <NavbarNavLink
        role="button"
        className={clsx(
          styles.dropdownNavbarItemMobile,
          'menu__link menu__link--sublist menu__link--sublist-caret',
          className,
        )}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          toggleCollapsed();
        }}>
        {props.children ?? props.label}
      </NavbarNavLink>
      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        {items.map((childItemProps, i) => (
          <NavbarItem
            mobile
            isDropdownItem
            onClick={onClick}
            activeClassName="menu__link--active"
            {...childItemProps}
            key={i}
          />
        ))}
      </Collapsible>
    </li>
  );
}
export default function DropdownNavbarItem({mobile = false, ...props}) {
  const Comp = mobile ? DropdownNavbarItemMobile : DropdownNavbarItemDesktop;
  return <Comp {...props} />;
}
```

調整 CSS，把 `.version-dropdown-item` 都隱藏起來，有 active 的才顯示

```css
/* src/css/custom.css */

.navbar__item.version-dropdown-item {
  display: none;
}

.navbar__item.version-dropdown-item.active {
  display: block;
}

@media (max-width: 996px) {
  .navbar__item.version-dropdown-item.active {
    display: none;
  }
}

.menu__list-item.version-dropdown-item {
  display: none;
}

.menu__list-item.version-dropdown-item.active {
  display: block;
}
```