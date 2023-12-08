import React from 'react';
import styles from './textareaField.module.css';

const TextareaField: React.FC<{
  nameAttribute: string;
  idAttribute: string;
  maxLengthAttribute: number;
}> = ({ nameAttribute, idAttribute, maxLengthAttribute }) => {
  return (
    <textarea
      className={styles.comment}
      name={nameAttribute}
      id={idAttribute}
      autoComplete='off'
      maxLength={maxLengthAttribute}
      required
    />
  );
};

TextareaField.displayName = 'TextareaField';
export default TextareaField;
