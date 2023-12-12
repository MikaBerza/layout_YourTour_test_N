import React from 'react';
import styles from './Radio.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const Radio: React.FC<FormItemPropsType> = ({
  title,
  nameAttr,
  idAttr,
  valueAttr,
}) => {
  return (
    <div className={styles.inner}>
      <input
        className={styles.item}
        type='radio'
        name={nameAttr}
        id={idAttr}
        value={valueAttr}
      />
      <label className={styles.text} htmlFor={idAttr}>
        {title}
      </label>
    </div>
  );
};

Radio.displayName = 'Radio';
export default Radio;
