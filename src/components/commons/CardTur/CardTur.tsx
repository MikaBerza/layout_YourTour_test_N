import React from 'react';
import { CardTurPropsType } from '../../../types/customType';
import styles from './cardTur.module.css';

const CardTur: React.FC<CardTurPropsType> = ({
  styleName,
  price,
  title,
  link,
  linkName,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.inner} ${styles[styleName]} bgp-1`} />
      <div className={styles.content}>
        <h3 className={styles.title} data-price={price}>
          {title}
        </h3>
        <div className={styles.link}>
          <a className={styles.linkItem} href={link}>
            {linkName}
          </a>
        </div>
      </div>
    </div>
  );
};

CardTur.displayName = 'CardTur';
export default CardTur;
