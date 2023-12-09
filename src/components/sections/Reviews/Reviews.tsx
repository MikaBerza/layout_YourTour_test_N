import React from 'react';

import { Title } from '@/components/commons/Title';
import { Subtitle } from '@/components/commons/Subtitle';
import { CardReviews } from '@/components/commons/CardReviews';
import { cardReviewsData } from '@/utils/listsOfData';

import styles from './reviews.module.css';
import { SectionsPropsType } from '@/types/customType';

const Reviews: React.FC<SectionsPropsType> = ({
  titleStyleName,
  titleText,
  titleUniqueName,
  subtitleStyeName,
  subtitleText,
}) => {
  return (
    <section className={styles.wrapper}>
      <Title
        nameStyles={titleStyleName}
        text={titleText}
        uniqueName={titleUniqueName}
      />
      <Subtitle nameStyles={subtitleStyeName} text={subtitleText} />

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
