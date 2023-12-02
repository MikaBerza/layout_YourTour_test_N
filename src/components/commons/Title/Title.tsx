import React from 'react';
import styles from './title.module.css';

type TitlePropsType = {
  title: string;
  uniqueName: string;
};

const Title: React.FC<TitlePropsType> = ({ title, uniqueName }) => {
  return (
    <h2 className={styles.text} id={uniqueName}>
      {title}
    </h2>
  );
};

Title.displayName = 'Title';
export default Title;
