import React from 'react';
export default function FooterCopyright({ copyright }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/img/logo.svg" alt="Advantech Developer Portal" style={{ marginRight: '1.5em' }} />
        <div
          className="footer__copyright"
        >
          © 1983-{new Date().getFullYear()} Advantech Co., Ltd.
        </div>
      </div>
    </>
  );
}
