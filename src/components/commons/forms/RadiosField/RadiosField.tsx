import React from 'react';
import { Radio } from '../indexForms';

import styles from './radiosField.module.css';

const RadiosField: React.FC<{ title: string }> = ({ title }) => {
  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.title}>{title}</legend>
      <div className={styles.group}>
        <Radio
          nameAttribute='clientAge'
          idAttribute='connectionAgeYes'
          valueAttribute='Yes'
          text='Да'
        />
        <Radio
          nameAttribute='clientAge'
          idAttribute='connectionAgeNo'
          valueAttribute='No'
          text='Нет'
        />
      </div>
    </fieldset>
  );
};

RadiosField.displayName = 'RadiosField';
export default RadiosField;
