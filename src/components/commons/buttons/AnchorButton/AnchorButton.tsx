'use client';
import React from 'react';
import { handleSmoothScrolling } from '@/utils/modules';
import styles from './anchorButton.module.css';

const AnchorButton: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className={styles.wrapper} onClick={handleSmoothScrolling}>
      <a className={styles.item} href='#collect-tour'>
        {name}
      </a>
    </div>
  );
};

AnchorButton.displayName = 'AnchorButton';
export default AnchorButton;
