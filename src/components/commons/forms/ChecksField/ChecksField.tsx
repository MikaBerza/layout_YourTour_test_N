import React from 'react';
import Link from 'next/link';

import styles from './checksField.module.css';

const ChecksField: React.FC<{
  text: string;
  link: string;
  linkText: string;
}> = ({ text, link, linkText }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.inpCheckbox}
        type='checkbox'
        name='acceptAgreement'
        id='connectionAgreement'
      />
      <label className={styles.customCheckbox} htmlFor='connectionAgreement' />
      <p className={styles.text}>
        {text}
        <Link className={styles.linkText} href={link}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};

ChecksField.displayName = 'ChecksField';
export default ChecksField;
