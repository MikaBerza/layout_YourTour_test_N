import React from 'react';
import { Button1 } from '../indexButtons';
import styles from './buttonsGroup.module.css';

const ButtonsGroup: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Button1 nameBtn='Найти тур' nameStyles='find' />
      <Button1 nameBtn='Сбросить' nameStyles='reset' />
    </div>
  );
};

ButtonsGroup.displayName = 'ButtonsGroup';
export default ButtonsGroup;
