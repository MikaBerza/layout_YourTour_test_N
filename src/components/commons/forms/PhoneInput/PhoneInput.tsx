import React from 'react';
import { FieldTitle } from '../indexForms';

import styles from './phoneInput.module.css';
import { FormItemPropsType } from '@/types/customType';

const PhoneInput: React.FC<FormItemPropsType> = ({
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
        type='tel'
        pattern='\+7\d{10}'
        maxLength={12}
        id={idAttr}
        placeholder={placeholderAttr}
        autoComplete='off'
        required
      />
    </div>
  );
};

PhoneInput.displayName = 'PhoneInput';
export default PhoneInput;
