import React from 'react';
import styles from './title.module.css';
import { TitleElementsPropsType } from '@/types/customType';

const Title: React.FC<TitleElementsPropsType> = ({
  nameStyles,
  text,
  uniqueName,
}) => {
  if (nameStyles) {
    return (
      <h2
        className={`${styles[nameStyles]} ${styles.generalText}`}
        id={uniqueName}
      >
        {text}
      </h2>
    );
  }
};

Title.displayName = 'Title';
export default Title;
