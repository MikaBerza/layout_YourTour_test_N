import React from 'react';

import { Title } from '../../../components/commons/Title';
import { Subtitle } from '../../../components/commons/Subtitle';
import { CardStories } from '../../../components/commons/CardStories';
import { cardStoriesData } from '../../../utils/listsOfData';

import styles from './Stories.module.css';
import { SectionsPropsType } from '../../../types/customType';

const Stories: React.FC<SectionsPropsType> = ({
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
