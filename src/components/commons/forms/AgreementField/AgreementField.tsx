import React from 'react';
import Link from 'next/link';

import styles from './agreementField.module.css';

const AgreementField: React.FC<{
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

AgreementField.displayName = 'AgreementField';
export default AgreementField;
