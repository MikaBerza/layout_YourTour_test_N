import React from 'react';
import Image from 'next/image';
import { cardTurData } from '../../../utils/listsOfData';
import { cardTurType } from '@/types/customType';
import styles from './cardTur.module.css';

const CardTur: React.FC = () => {
  // функция, сгенерировать карточки туров (JSX-элементы)
  const generateCardTur = (item: cardTurType): React.JSX.Element => {
    return (
      <div className={styles.inner} key={item.id}>
        <Image
          src={item.pathImg}
          width={370}
          height={531}
          className={`${styles.img} bgp-1`}
          alt='images'
          priority
        />
        <div className={styles.content}>
          <h3 className={styles.title} data-price={item.price}>
            {item.title}
          </h3>
          <div className={styles.link}>
            <a className={styles.linkItem} href={item.link}>
              {item.linkName}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>{cardTurData.map(generateCardTur)}</div>
  );
};

CardTur.displayName = 'CardTur';
export default CardTur;
