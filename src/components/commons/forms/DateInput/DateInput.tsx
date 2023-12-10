import React from 'react';
import { FieldTitle } from '../indexForms';
import styles from './dateInput.module.css';
import { FormItemPropsType } from '@/types/customType';

const DateInput: React.FC<FormItemPropsType> = ({ title, nameAttr, idAttr }) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttr={idAttr} text={title} />
      <input
        className={styles.item}
        name={nameAttr}
        type='date'
        id={idAttr}
        autoComplete='off'
        required
      />
    </div>
  );
};

DateInput.displayName = 'DateInput';
export default DateInput;
