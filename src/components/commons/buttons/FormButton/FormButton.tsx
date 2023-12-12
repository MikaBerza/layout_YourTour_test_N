import React from 'react';
import styles from './FormButton.module.css';

const FormButton: React.FC<{ nameBtn: string; nameStyles: string }> = ({
  nameBtn,
  nameStyles,
}) => {
  return <button className={styles[nameStyles]}>{nameBtn}</button>;
};

FormButton.displayName = 'FormButton';
export default FormButton;
