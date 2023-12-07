import React from 'react';
import styles from './subtitle.module.css';

const Subtitle: React.FC<{ subtitle: string }> = ({ subtitle }) => {
  return <p className={styles.text}>{subtitle}</p>;
};

Subtitle.displayName = 'Subtitle';
export default Subtitle;
