import React from 'react';
import styles from './styles.module.css';

export default function TestEnvironmentBanner() {
  return (
    <div className={styles.testEnvDiv}>
      ⚠️ This is a test environment</div>
  );
}