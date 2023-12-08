import React from 'react';
import { FieldTitle } from '../indexForms';

import styles from './dateInput.module.css';

const DateInput: React.FC<{
  title: string;
  nameAttribute: string;
  idAttribute: string;
}> = ({ title, nameAttribute, idAttribute }) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttribute={idAttribute} text={title} />
      <input
        className={styles.inpDate}
        name={nameAttribute}
        type='date'
        id={idAttribute}
        autoComplete='off'
        required
      />
    </div>
  );
};

DateInput.displayName = 'DateInput';
export default DateInput;
