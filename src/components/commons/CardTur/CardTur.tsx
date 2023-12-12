import React from 'react';
import Image from 'next/image';

import { LinkButton } from '../buttons/indexButtons';
import styles from './CardTur.module.css';
import { CardTurPropsType } from '../../../types/customType';

const CardTur: React.FC<{ cardTurData: CardTurPropsType[] }> = ({
  cardTurData,
}) => {
  return (
    <div className={styles.wrapper}>
      {cardTurData.map((item: CardTurPropsType) => {
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
              <LinkButton
                parentStyles={[styles.linkBtn, styles.linkItemBtn]}
                link={item.link}
                linkBtnName='Подробнее'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

CardTur.displayName = 'CardTur';
export default CardTur;
