'use client';
import React from 'react';
import styles from './anchorButton.module.css';
import { handleSmoothScrolling } from '@/utils/modules';

const AnchorButton: React.FC = () => {
  return (
    <div className={styles.wrapper} onClick={handleSmoothScrolling}>
      <a className={styles.item} href='#collect-tour'>
        Найти тур
      </a>
    </div>
  );
};

AnchorButton.displayName = 'AnchorButton';
export default AnchorButton;
