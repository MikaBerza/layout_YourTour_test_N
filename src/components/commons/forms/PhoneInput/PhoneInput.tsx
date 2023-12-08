import React from 'react';
import { FieldTitle } from '../indexForms';

import styles from './phoneInput.module.css';

const PhoneInput: React.FC<{
  title: string;
  nameAttribute: string;
  idAttribute: string;
  placeholderAttribute: string;
}> = ({ title, nameAttribute, idAttribute, placeholderAttribute }) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttribute={idAttribute} text={title} />
      <input
        className={styles.phoneInp}
        name={nameAttribute}
        type='tel'
        pattern='\+7\d{10}'
        maxLength={12}
        id={idAttribute}
        placeholder={placeholderAttribute}
        autoComplete='off'
        required
      />
    </div>
  );
};

PhoneInput.displayName = 'PhoneInput';
export default PhoneInput;
