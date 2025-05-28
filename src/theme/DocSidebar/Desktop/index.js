import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import styles from './styles.module.css';
import DocsVersionDropdown from '@site/src/components//DocsVersionDropdown';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';

function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}) {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();

  const docsSidebar = useDocsSidebar();

  const [docsName, setDocsName] = useState('');

  useEffect(() => {
    switch(docsSidebar?.name) {
      case 'bspSidebar':
        setDocsName('BSP');
        break;
      case 'docSidebar':
        setDocsName('EdgeSync');
        break;
      case 'edgehubSidebars':
        setDocsName('EdgeHub');
        break;
      case 'edgelinkSidebars':
        setDocsName('EdgeLink');
        break;
      case 'agentbuilderSidebars':
        setDocsName('AgentBuilder');
        break;
      default:
        setDocsName('');
        break;
    }
  }, [docsSidebar]);

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      { docsName && <p className="text-xl font-bold pt-4 pb-2 px-5">{docsName}</p> }
      { <DocsVersionDropdown /> }
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}
export default React.memo(DocSidebarDesktop);
