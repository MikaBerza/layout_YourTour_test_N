import React from 'react';
import { Radio } from '../indexForms';
import styles from './RadiosField.module.css';

const RadiosField = ({ legendTitle }: { legendTitle: string }) => {
  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.title}>{legendTitle}</legend>
      <div className={styles.group}>
        <Radio
          title='Да'
          nameAttr='clientAge'
          idAttr='connectionAgeYes'
          valueAttr='Yes'
        />
        <Radio
          title='Нет'
          nameAttr='clientAge'
          idAttr='connectionAgeNo'
          valueAttr='No'
        />
      </div>
    </fieldset>
  );
};

RadiosField.displayName = 'RadiosField';
export default RadiosField;
