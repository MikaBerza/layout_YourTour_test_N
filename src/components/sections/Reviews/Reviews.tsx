import React from 'react';
import { CardReviews } from '@/components/commons/CardReviews';
import { CardReviewsPropsType } from '@/types/customType';
import styles from './reviews.module.css';

const Reviews: React.FC<{ cardReviewsData: CardReviewsPropsType[] }> = ({
  cardReviewsData,
}) => {
  return (
    <section className={styles.wrapper}>
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
