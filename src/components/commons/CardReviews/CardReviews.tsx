import Image from 'next/image';
import { CardReviewsPropsType } from '../../../types/customType';
import { splitSentenceWithLineBreak } from '../../../utils/modules';
import styles from './QCardReviews.module.css';

const CardReviews = (item: CardReviewsPropsType) => {
  // функция, генерации списка отзывов
  const generateListOfReviews = (itemText: string, index: number) => {
    return (
      <p className={styles.text} key={index}>
        {itemText}
      </p>
    );
  };

  return (
    <div className={styles.wrapper} key={item.id}>
      <div className={styles.innerText}>
        {splitSentenceWithLineBreak(item.text).map((item, index) =>
          generateListOfReviews(item, index)
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
      </div>
    </div>
  );
};

CardReviews.displayName = 'CardReviews';
export default CardReviews;
