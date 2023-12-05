import React from 'react';
import Image from 'next/image';
import { TravelPhotosPropsType } from '@/types/customType';
import styles from './travelPhotos.module.css';

const TravelPhotos: React.FC<{ travelPhotosData: TravelPhotosPropsType[] }> = ({
  travelPhotosData,
}) => {
  return (
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
  );
};

TravelPhotos.displayName = 'TravelPhotos';
export default TravelPhotos;
