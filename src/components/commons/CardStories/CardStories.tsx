import React from 'react';
import Image from 'next/image';

import { LinkButton } from '../buttons/indexButtons';
import {
  CardStoriesPropsType,
  AdvantagesItemType,
  LinkItemSocialType,
} from '../../../types/customType';

import styles from './CardStories.module.css';

const CardStories: React.FC<{ item: CardStoriesPropsType }> = ({ item }) => {
  // функция, генерации списка преимуществ
  const generateListOfAdvantages = (
    item: AdvantagesItemType
  ): React.JSX.Element => {
    return (
      <li className={styles.advantagesItem} key={item.id}>
        {item.text}
      </li>
    );
  };

  // функция, генерация списка социальных сетей
  const generateListOfSocials = (
    item: LinkItemSocialType
  ): React.JSX.Element => {
    return (
      <a className={styles.linkItemSocial} key={item.id} href={item.link}>
        {item.linkName}
      </a>
    );
  };

  return (
    <div className={styles.wrap} key={item.id}>
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
            {item.advantages.length &&
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
            {item.linksSocials.length &&
              item.linksSocials.map(generateListOfSocials)}
          </div>
        </div>
      </div>
    </div>
  );
};

CardStories.displayName = 'CardStories';
export default CardStories;
