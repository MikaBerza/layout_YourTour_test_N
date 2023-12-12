import React from 'react';
import styles from './Subtitle.module.css';
import { TitleElementsPropsType } from '../../../types/customType';

const Subtitle: React.FC<TitleElementsPropsType> = ({ nameStyles, text }) => {
  if (
    !nameStyles ||
    !text ||
    nameStyles.trim().length === 0 ||
    text.trim().length === 0
  ) {
    return null;
  } else {
    return (
      <p className={`${styles[nameStyles]} ${styles.generalText}`}>{text}</p>
    );
  }
};

Subtitle.displayName = 'Subtitle';
export default Subtitle;
