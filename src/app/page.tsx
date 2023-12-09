import React from 'react';

import {
  Greeting,
  ChooseTour,
  Reviews,
  TravelPhotos,
  Stories,
  CollectTour,
} from '@/components/sections/indexSections';

// import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/*___greeting */}
      <Greeting
        titleStyleName='mainText'
        titleText='Идеальные путешествия существуют'
        titleUniqueName='greeting'
        //
        subtitleStyeName='mainText'
        subtitleText='Идейные соображения высшего порядка, а также рамки и место обучения
      кадров'
      />

      {/*___choose-tour */}
      <ChooseTour
        titleStyleName='minorText'
        titleText='Выбери свой тур'
        titleUniqueName='choose-tour'
      />

      {/*___collect-tour */}
      <CollectTour
        titleStyleName='minorText'
        titleText='Собери свой тур'
        titleUniqueName='collect-tour'
        //
        subtitleStyeName='minorText'
        subtitleText='Идейные соображения высшего порядка, а также рамки и место обучения
        кадров'
      />

      {/*___reviews */}
      <Reviews
        titleStyleName='minorText'
        titleText='Отзывы наших путешественников'
        titleUniqueName='reviews'
        //
        subtitleStyeName='minorText'
        subtitleText='Идейные соображения высшего порядка, а также рамки и место обучения
        кадров'
      />

      {/*___travel-photos */}
      <TravelPhotos
        titleStyleName='minorText'
        titleText='Фотографии путешествий'
        titleUniqueName='travel-photos'
        //
        subtitleStyeName='minorText'
        subtitleText='Идейные соображения высшего порядка, а также рамки и место обучения
        кадров'
      />

      {/*___stories */}
      <Stories
        titleStyleName='minorText'
        titleText='Истории путешествий'
        titleUniqueName='stories'
        //
        subtitleStyeName='minorText'
        subtitleText='Идейные соображения высшего порядка, а также рамки и место обучения
              кадров'
      />
    </>
  );
}
