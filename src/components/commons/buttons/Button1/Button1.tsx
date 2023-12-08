import React from 'react';
import styles from './button1.module.css';

const Button1: React.FC<{ nameBtn: string; nameStyles: string }> = ({
  nameBtn,
  nameStyles,
}) => {
  return <button className={styles[nameStyles]}>{nameBtn}</button>;
};

Button1.displayName = 'Button1';
export default Button1;
