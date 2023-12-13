import React from 'react';
import styles from './FieldTitle.module.css';

const FieldTitle = ({
  htmlForAttr,
  text,
}: {
  htmlForAttr: string;
  text: string;
}) => {
  return (
    <label className={styles.text} htmlFor={htmlForAttr}>
      {text}
    </label>
  );
};

FieldTitle.displayName = 'FieldTitle';
export default FieldTitle;
