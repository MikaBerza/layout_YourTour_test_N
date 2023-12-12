import React from 'react';
import Image from 'next/image';

import { Title } from '../../../components/commons/Title';
import { Subtitle } from '../../../components/commons/Subtitle';
import { travelPhotosData } from '../../../utils/listsOfData';
import styles from './TravelPhotos.module.css';

const TravelPhotos: React.FC = () => {
  return (
    <>
      <Title text='Фотографии путешествий' id='travel-photos' />
      <Subtitle
        text='Идейные соображения высшего порядка, а также рамки и место обучения
        кадров'
      />

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
