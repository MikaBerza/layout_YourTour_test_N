import React from 'react';
import styles from './textareaField.module.css';
import { FieldTitle } from '../indexForms';

const TextareaField: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttribute='connectionComment' text={title} />
      <textarea
        className={styles.comment}
        name='comment'
        id='connectionComment'
        autoComplete='off'
        maxLength={300}
        required
      />
    </div>
  );
};

TextareaField.displayName = 'TextareaField';
export default TextareaField;
