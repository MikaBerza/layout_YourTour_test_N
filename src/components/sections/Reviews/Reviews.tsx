import React from 'react';
import { CardReviews } from '@/components/commons/CardReviews';
import { CardReviewsPropsType } from '@/types/customType';

const Reviews: React.FC<{ cardReviewsData: CardReviewsPropsType[] }> = ({
  cardReviewsData,
}) => {
  return (
    <section className='reviews'>
      <div className='reviews__container'>
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
