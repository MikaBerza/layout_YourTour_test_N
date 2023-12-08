import React from 'react';
import { FieldTitle } from '../indexForms';

import styles from './nameInput.module.css';

const NameInput: React.FC<{
  title: string;
  nameAttribute: string;
  idAttribute: string;
  placeholderAttribute: string;
}> = ({ title, nameAttribute, idAttribute, placeholderAttribute }) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttribute={idAttribute} text={title} />
      <input
        className={styles.nameInp}
        name={nameAttribute}
        type='text'
        id={idAttribute}
        placeholder={placeholderAttribute}
        autoComplete='off'
        required
      />
    </div>
  );
};

NameInput.displayName = 'NameInput';
export default NameInput;
