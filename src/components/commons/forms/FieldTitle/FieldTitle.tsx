import React from 'react';
import styles from './fieldTitle.module.css';

const FieldTitle: React.FC<{ htmlForAttr: string; text: string }> = ({
  htmlForAttr,
  text,
}) => {
  return (
    <label className={styles.text} htmlFor={htmlForAttr}>
      {text}
    </label>
  );
};

FieldTitle.displayName = 'FieldTitle';
export default FieldTitle;
