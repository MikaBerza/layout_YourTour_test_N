import React from 'react';
import styles from './subtitle.module.css';

const Subtitle: React.FC<{ nameStyles: string; text: string }> = ({
  nameStyles,
  text,
}) => {
  return (
    <p className={`${styles[nameStyles]} ${styles.generalText}`}>{text}</p>
  );
};

Subtitle.displayName = 'Subtitle';
export default Subtitle;
