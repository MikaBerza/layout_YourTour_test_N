import React from 'react';
import { FieldTitle } from '../indexForms';

import styles from './textareaField.module.css';
import { FormItemPropsType } from '@/types/customType';

const TextareaField: React.FC<FormItemPropsType> = ({
  title,
  nameAttr,
  idAttr,
}) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttr={idAttr} text={title} />
      <textarea
        className={styles.item}
        name={nameAttr}
        id={idAttr}
        autoComplete='off'
        maxLength={300}
        required
      />
    </div>
  );
};

TextareaField.displayName = 'TextareaField';
export default TextareaField;
