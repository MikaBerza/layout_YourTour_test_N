import React from 'react';
import Image from 'next/image';

import styles from './cardStories.module.css';
import { LinkButton } from '../LinkButton';
import {
  CardStoriesPropsType,
  advantagesItemType,
  linkItemSocialType,
} from '@/types/customType';

const CardStories: React.FC<{ cardStoriesData: CardStoriesPropsType[] }> = ({
  cardStoriesData,
}) => {
  // функция, генерации списка преимуществ
  const generateListOfAdvantages = (
    item: advantagesItemType
  ): React.JSX.Element => {
    return (
      <li className={styles.advantagesItem} key={item.id}>
        {item.itemText}
      </li>
    );
  };

  // функция, генерация списка социальных сетей
  const generateListOfSocials = (
    item: linkItemSocialType
  ): React.JSX.Element => {
    return (
      <a className={styles.linkItemSocial} key={item.id} href={item.link}>
        {item.linkName}
      </a>
    );
  };

  return (
    <div className={styles.wrapper}>
      {cardStoriesData.map((item) => {
        return (
          <div className={styles.inner} key={item.id}>
            <Image
              src={item.pathImg}
              width={1170}
              height={567}
              className={`${styles.img} bgp-1`}
              alt='images'
              priority
            />

            <div className={styles.content}>
              <div className={styles.boxText}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <ul className={styles.advantages}>
                  {item.advantages.length > 0 &&
                    item.advantages.map(generateListOfAdvantages)}
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <LinkButton
                  parentStyles={[styles.linkBtn, styles.linkItemBtn]}
                  link={item.link}
                  linkBtnName='Подробнее'
                />
                <div className={styles.linksSocials}>
                  {item.linksSocials.length > 0 &&
                    item.linksSocials.map(generateListOfSocials)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

CardStories.displayName = 'CardStories';
export default CardStories;
