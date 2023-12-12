import React from 'react';
import { FormButton } from '../indexButtons';
import styles from './ButtonsGroup.module.css';

const ButtonsGroup: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <FormButton nameBtn='Найти тур' nameStyles='find' />
      <FormButton nameBtn='Сбросить' nameStyles='reset' />
    </div>
  );
};

ButtonsGroup.displayName = 'ButtonsGroup';
export default ButtonsGroup;
