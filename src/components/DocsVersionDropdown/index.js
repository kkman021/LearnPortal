import React, { useEffect, useRef } from 'react';
import {
  useVersions,
  useActiveDocContext,
} from '@docusaurus/plugin-content-docs/client';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

export default function VersionDropdown({ pluginId }) {
  // If no pluginId prop, infer from URL path
  const { pathname } = useLocation();
  const inferredId = pathname.startsWith('/') ? pathname.split('/')[1] : undefined;
  const docPluginId = pluginId ?? inferredId ?? undefined;
  const selectId = `version-dropdown-${docPluginId ?? 'default'}`;

  const versions = useVersions(docPluginId);
  const activeDocContext = useActiveDocContext(docPluginId);

  const didLog = useRef(false);

  useEffect(() => {
    if (!didLog.current) {
      //console.log(`Versions for pluginId "${docPluginId}":`, versions);
      //console.log(`Active version for pluginId "${docPluginId}":`, activeDocContext.activeVersion);
      didLog.current = true;
    }
  }, [docPluginId, versions, activeDocContext]);

  if (!versions || versions.length <= 1) {
    return null;
  }

  const handleChange = (e) => {
    const selected = e.target.value;
    const newVer = versions.find((v) => v.name === selected);
    if (newVer) {
      const mainDoc = newVer.docs.find((d) => d.id === newVer.mainDocId);
      if (mainDoc) {
        window.location.href = mainDoc.path;
      }
    }
  };

  return (
    <div className={styles.versionWrapper}>
      <label htmlFor={selectId} className={styles.versionLabel}>
        <Translate id="DocVersionDropdownComponment.Versions">
          Versions
        </Translate>
      </label>
      <select
        id={selectId}
        value={activeDocContext.activeVersion.name}
        onChange={handleChange}
        className={styles.versionDropdown}
      >
        {versions.map((v) => (
          <option key={v.name} value={v.name}>
            {v.label}
          </option>
        ))}
      </select>
    </div>
  );
}
