'use client';
import React from 'react';
import styles from './AnchorButton.module.css';

const AnchorButton: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.item} href='#collect-tour'>
        {name}
      </a>
    </div>
  );
};

AnchorButton.displayName = 'AnchorButton';
export default AnchorButton;
