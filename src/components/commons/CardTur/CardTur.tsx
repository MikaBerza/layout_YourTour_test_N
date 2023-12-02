import React from 'react';
import Image from 'next/image';
import { CardTurPropsType } from '../../../types/customType';
import styles from './cardTur.module.css';

const CardTur: React.FC<CardTurPropsType> = ({
  pathImg,
  price,
  title,
  link,
  linkName,
}) => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={`${styles.inner} ${styles.img1} bgp-1`} /> */}
      <Image
        src={pathImg}
        width={550}
        height={531}
        className={`${styles.img} bgp-1`}
        alt='images'
        priority
      />
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
