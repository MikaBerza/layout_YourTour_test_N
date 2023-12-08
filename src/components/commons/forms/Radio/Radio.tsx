import React from 'react';
import styles from './radio.module.css';

const Radio: React.FC<{
  nameAttribute: string;
  idAttribute: string;
  valueAttribute: string;
  text: string;
}> = ({ nameAttribute, idAttribute, valueAttribute, text }) => {
  return (
    <div className={styles.inner}>
      <input
        className={styles.inp}
        type='radio'
        name={nameAttribute}
        id={idAttribute}
        value={valueAttribute}
      />
      <label className={styles.text} htmlFor={idAttribute}>
        {text}
      </label>
    </div>
  );
};

Radio.displayName = 'Radio';
export default Radio;
