import React from 'react';

import { Title } from '../../../components/commons/Title';
import { Subtitle } from '../../../components/commons/Subtitle';
import { CardStories } from '../../../components/commons/CardStories';
import { cardStoriesData } from '../../../utils/listsOfData';
import styles from './Stories.module.css';

const Stories: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <Title text='Истории путешествий' id='stories' />
      <Subtitle
        text='Идейные соображения высшего порядка, а также рамки и место обучения
              кадров'
      />
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
