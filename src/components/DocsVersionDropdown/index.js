import {
  useActiveDocContext,
} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import {useActivePlugin} from '@docusaurus/plugin-content-docs/client';

export default function VersionDropdown() {
  const activePlugin = useActivePlugin();
  const docPluginId = activePlugin?.pluginId;

  const selectId = `version-dropdown-${docPluginId ?? 'default'}`;
  const versions = docPluginId === '' ? undefined : activePlugin?.pluginData?.versions;

  if (docPluginId === undefined || versions.length <= 1) {
    return null;
  }

  const activeDocContext = useActiveDocContext(docPluginId);

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
