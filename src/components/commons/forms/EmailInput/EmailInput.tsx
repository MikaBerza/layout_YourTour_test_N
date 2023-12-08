import React from 'react';
import { FieldTitle } from '../indexForms';

import styles from './emailInput.module.css';

const EmailInput: React.FC<{
  title: string;
  nameAttribute: string;
  idAttribute: string;
  placeholderAttribute: string;
}> = ({ title, nameAttribute, idAttribute, placeholderAttribute }) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttribute={idAttribute} text={title} />
      <input
        className={styles.emailInp}
        name={nameAttribute}
        type='email'
        id={idAttribute}
        placeholder={placeholderAttribute}
        autoComplete='off'
        required
      />
    </div>
  );
};

EmailInput.displayName = 'EmailInput';
export default EmailInput;
