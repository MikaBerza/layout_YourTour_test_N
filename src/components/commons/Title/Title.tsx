import React from 'react';
import styles from './title.module.css';

const Title: React.FC<{ title: string; uniqueName: string }> = ({
  title,
  uniqueName,
}) => {
  return (
    <h2 className={styles.text} id={uniqueName}>
      {title}
    </h2>
  );
};

Title.displayName = 'Title';
export default Title;
