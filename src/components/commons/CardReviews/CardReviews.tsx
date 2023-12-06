import React from 'react';
import Image from 'next/image';

import { CardReviewsPropsType } from '@/types/customType';
import { splitSentenceWithLineBreak } from '@/utils/modules';

import styles from './cardReviews.module.css';

const CardReviews: React.FC<CardReviewsPropsType> = (item) => {
  // функция, генерации текста отзывов
  // const generateListOfReviews = (str: string): React.JSX.Element | null => {
  //   if (splitSentenceWithLineBreak(str).length === 1) {
  //     return (
  //       <p className={styles.text}>{splitSentenceWithLineBreak(str)[0]}</p>
  //     );
  //   } else if (splitSentenceWithLineBreak(str).length > 1) {
  //     splitSentenceWithLineBreak(str).map((item, index) => {
  //       return (
  //         <p className={styles.text} key={index}>
  //           {item}
  //         </p>
  //       );
  //     });
  //   }
  //   return null;
  // };

  return (
    <div className={styles.wrapper} key={item.id}>
      <div className={styles.innerText}>
        {splitSentenceWithLineBreak(item.text).length === 1 ? (
          <p className={styles.text}>
            {splitSentenceWithLineBreak(item.text)[0]}
          </p>
        ) : (
          splitSentenceWithLineBreak(item.text).map((item, index) => {
            return (
              <p className={styles.text} key={index}>
                {item}
              </p>
            );
          })
        )}
      </div>
      <div className={styles.aboutAuthor}>
        <div className={styles.innerAuthor}>
          <span className={styles.authorName}>{item.authorName}</span>
          <span className={styles.tourName}>{item.tourName}</span>
        </div>
        <div className={styles.authorPhoto}>
          <Image
            src={item.pathImg}
            width={75}
            height={75}
            className={styles.authorPhoto}
            alt='photo'
            priority
          />
        </div>

        {/* <div className='authorPhoto'>
          <img src='./images/reviewPhoto1.png' alt='photo' />
        </div> */}
      </div>
    </div>
  );
};

CardReviews.displayName = 'CardReviews';
export default CardReviews;
