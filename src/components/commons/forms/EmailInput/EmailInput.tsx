import React from 'react';
import { FieldTitle } from '../indexForms';

import styles from './emailInput.module.css';
import { FormItemPropsType } from '@/types/customType';

const EmailInput: React.FC<FormItemPropsType> = ({
  title,
  nameAttr,
  idAttr,
  placeholderAttr,
}) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttr={idAttr} text={title} />
      <input
        className={styles.emailInp}
        name={nameAttr}
        type='email'
        id={idAttr}
        placeholder={placeholderAttr}
        autoComplete='off'
        required
      />
    </div>
  );
};

EmailInput.displayName = 'EmailInput';
export default EmailInput;
