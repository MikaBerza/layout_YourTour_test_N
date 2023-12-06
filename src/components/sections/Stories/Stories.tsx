import React from 'react';
import styles from './stories.module.css';
import { CardStories } from '@/components/commons/CardStories';
import { CardStoriesPropsType } from '@/types/customType';

const Stories: React.FC<{ cardStoriesData: CardStoriesPropsType[] }> = ({
  cardStoriesData,
}) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {cardStoriesData.length > 0 &&
          cardStoriesData.map((item) => {
            return <CardStories item={item} key={item.id} />;
          })}
      </div>
    </section>
  );
};

Stories.displayName = 'Stories';
export default Stories;
