import React from 'react';
import styles from './subtitle.module.css';

type SubtitlePropsType = {
  subtitle: string;
};

const Subtitle: React.FC<SubtitlePropsType> = ({ subtitle }) => {
  return <p className={styles.text}>{subtitle}</p>;
};

Subtitle.displayName = 'Subtitle';
export default Subtitle;
