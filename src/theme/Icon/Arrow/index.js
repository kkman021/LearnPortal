import React from 'react';
export default function IconArrow({ collapsed, className, ...rest }) {
  // When `collapsed` is true, apply the CSS class to trigger media-query rotation
  const classes = [collapsed ? 'collapseSidebarButtonIcon_Iseg' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <svg
      className={classes}
      width="20"
      height="20"
      viewBox="0 0 24 24" aria-hidden="true" {...rest}>
      <rect x="18" y="4" width="2" height="16" fill="#7a7a7a" />
      <path fill="#7a7a7a" d="M10 17l5-5-5-5v10z" />
    </svg>
  );
}
