import React from 'react';
import Image from 'next/image';

import { Title } from '@/components/commons/Title';
import { Subtitle } from '@/components/commons/Subtitle';
import { travelPhotosData } from '@/utils/listsOfData';

import styles from './travelPhotos.module.css';
import { SectionsPropsType } from '@/types/customType';

const TravelPhotos: React.FC<SectionsPropsType> = ({
  titleStyleName,
  titleText,
  titleUniqueName,
  subtitleStyeName,
  subtitleText,
}) => {
  return (
    <>
      <Title
        nameStyles={titleStyleName}
        text={titleText}
        uniqueName={titleUniqueName}
      />
      <Subtitle nameStyles={subtitleStyeName} text={subtitleText} />

      <section className={styles.wrapper}>
        {travelPhotosData.length > 0 &&
          travelPhotosData.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.pathImg}
                width={442}
                height={301}
                className={styles.img1}
                alt='images'
                priority
              />
            );
          })}
      </section>
    </>
  );
};

TravelPhotos.displayName = 'TravelPhotos';
export default TravelPhotos;
