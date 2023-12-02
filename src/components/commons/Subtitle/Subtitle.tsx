import React from 'react';
import { SubtitlePropsType } from '../../../types/customType';
import styles from './subtitle.module.css';

const Subtitle: React.FC<SubtitlePropsType> = ({ subtitle }) => {
  return <p className={styles.text}>{subtitle}</p>;
};

Subtitle.displayName = 'Subtitle';
export default Subtitle;
