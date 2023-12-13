'use client';
import styles from './AnchorButton.module.css';

const AnchorButton = ({ name }: { name: string }) => {
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
