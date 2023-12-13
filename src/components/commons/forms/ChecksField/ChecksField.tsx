import Link from 'next/link';
import styles from './QChecksField.module.css';

const ChecksField = ({
  text,
  link,
  linkText,
}: {
  text: string;
  link: string;
  linkText: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type='checkbox'
        name='acceptAgreement'
        id='connectionAgreement'
        required
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
