import React from 'react';
import styles from './subtitle.module.css';
import { TitleElementsPropsType } from '@/types/customType';

const Subtitle: React.FC<TitleElementsPropsType> = ({ nameStyles, text }) => {
  return (
    <p className={`${styles[nameStyles]} ${styles.generalText}`}>{text}</p>
  );
};

Subtitle.displayName = 'Subtitle';
export default Subtitle;
