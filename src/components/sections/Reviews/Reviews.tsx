import React from 'react';

import { Title } from '../../../components/commons/Title';
import { Subtitle } from '../../../components/commons/Subtitle';
import { CardReviews } from '../../../components/commons/CardReviews';
import { cardReviewsData } from '../../../utils/listsOfData';
import styles from './Reviews.module.css';

const Reviews: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <Title
        nameStyles='minorText'
        text='Отзывы наших путешественников'
        id='reviews'
      />
      <Subtitle
        nameStyles='minorText'
        text='Идейные соображения высшего порядка, а также рамки и место обучения
        кадров'
      />

      <div className={styles.inner}>
        {cardReviewsData.length > 0 &&
          cardReviewsData.map((item) => {
            return <CardReviews key={item.id} {...item} />;
          })}
      </div>
    </section>
  );
};

Reviews.displayName = 'Reviews';
export default Reviews;
