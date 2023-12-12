import React from 'react';

import { Title } from '../../../components/commons/Title';
import { Subtitle } from '../../../components/commons/Subtitle';
import { CardReviews } from '../../../components/commons/CardReviews';
import { cardReviewsData } from '../../../utils/listsOfData';
import styles from './Reviews.module.css';

const Reviews: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <Title text='Отзывы наших путешественников' id='reviews' />
      <Subtitle
        text='Идейные соображения высшего порядка, а также рамки и место обучения
        кадров'
      />

      <div className={styles.inner}>
        {cardReviewsData.length &&
          cardReviewsData.map((item) => (
            <CardReviews key={item.id} {...item} />
          ))}
      </div>
    </section>
  );
};

Reviews.displayName = 'Reviews';
export default Reviews;
