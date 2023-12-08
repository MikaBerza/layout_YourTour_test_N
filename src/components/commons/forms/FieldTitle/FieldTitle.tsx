import React from 'react';
import styles from './fieldTitle.module.css';

const FieldTitle: React.FC<{ htmlForAttribute: string; text: string }> = ({
  htmlForAttribute,
  text,
}) => {
  return (
    <label className={styles.text} htmlFor={htmlForAttribute}>
      {text}
    </label>
  );
};

FieldTitle.displayName = 'FieldTitle';
export default FieldTitle;
