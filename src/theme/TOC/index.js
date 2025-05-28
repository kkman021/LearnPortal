import React from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import styles from './styles.module.css';
import FeedbackWidget from '@site/src/components/FeedbackWidget';

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';
export default function TOC({className, ...props}) {
  
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <p className="table-of-contents__left-border px-4 py-2 text-xs font-bold text-gray-600">On this page ...</p>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    <FeedbackWidget/>
    </div>
  );
}
