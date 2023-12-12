import React from 'react';
import styles from './Title.module.css';
import { TitleElementsPropsType } from '../../../types/customType';

const Title: React.FC<TitleElementsPropsType> = ({ nameStyles, text, id }) => {
  return (
    <h2 className={`${styles[nameStyles]} ${styles.generalText}`} id={id}>
      {text}
    </h2>
  );
};

Title.displayName = 'Title';
export default Title;
