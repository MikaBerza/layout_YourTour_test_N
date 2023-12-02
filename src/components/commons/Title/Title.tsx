import React from 'react';
import { TitlePropsType } from '../../../types/customType';
import styles from './title.module.css';

const Title: React.FC<TitlePropsType> = ({ title, uniqueName }) => {
  return (
    <h2 className={styles.text} id={uniqueName}>
      {title}
    </h2>
  );
};

Title.displayName = 'Title';
export default Title;
