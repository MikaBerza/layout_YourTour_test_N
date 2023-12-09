import React from 'react';
import { FieldTitle } from '../indexForms';

import styles from './nameInput.module.css';
import { FormItemPropsType } from '@/types/customType';

const NameInput: React.FC<FormItemPropsType> = ({
  title,
  nameAttr,
  idAttr,
  placeholderAttr,
}) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttr={idAttr} text={title} />
      <input
        className={styles.item}
        name={nameAttr}
        type='text'
        id={idAttr}
        placeholder={placeholderAttr}
        autoComplete='off'
        required
      />
    </div>
  );
};

NameInput.displayName = 'NameInput';
export default NameInput;
