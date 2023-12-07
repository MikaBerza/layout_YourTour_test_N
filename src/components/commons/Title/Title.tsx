import React from 'react';
import styles from './title.module.css';

const Title: React.FC<{
  nameStyles: string;
  title: string;
  uniqueName: string;
}> = ({ nameStyles, title, uniqueName }) => {
  return (
    <h2
      className={`${styles[nameStyles]} ${styles.generalTitle}`}
      id={uniqueName}
    >
      {title}
    </h2>
  );
};

Title.displayName = 'Title';
export default Title;
