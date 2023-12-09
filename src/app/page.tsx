import React from 'react';

import { AnchorButton } from '../components/commons/buttons/indexButtons';
import { Title } from '../components/commons/Title';
import { Subtitle } from '../components/commons/Subtitle';
import {
  ChooseTour,
  Reviews,
  TravelPhotos,
  Stories,
  CollectTour,
} from '@/components/sections/indexSections';

import {
  cardReviewsData,
  cardStoriesData,
  travelPhotosData,
} from '../utils/listsOfData';

// import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/*___greeting */}
      <section className='greeting bgp-1'>
        <Title
          nameStyles={'mainText'}
          text='Идеальные путешествия существуют'
          uniqueName='greeting'
        />
        <Subtitle
          nameStyles={'mainText'}
          text='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
        />
        <AnchorButton name='Найти тур' />
      </section>

      {/*___choose-tour */}
      <Title
        nameStyles={'minorText'}
        text='Выбери свой тур'
        uniqueName='choose-tour'
      />
      <ChooseTour />

      {/*___collect-tour */}
      <Title
        nameStyles={'minorText'}
        text='Собери свой тур'
        uniqueName='collect-tour'
      />
      <Subtitle
        nameStyles={'minorText'}
        text='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
      />
      <CollectTour />

      {/*___reviews */}
      <Title
        nameStyles={'minorText'}
        text='Отзывы наших путешественников'
        uniqueName='reviews'
      />
      <Subtitle
        nameStyles={'minorText'}
        text='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
      />
      <Reviews cardReviewsData={cardReviewsData} />

      {/*___travel-photos */}
      <Title
        nameStyles={'minorText'}
        text='Фотографии путешествий'
        uniqueName='travel-photos'
      />
      <Subtitle
        nameStyles={'minorText'}
        text='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
      />
      <TravelPhotos travelPhotosData={travelPhotosData} />

      {/*___stories */}
      <Title
        nameStyles={'minorText'}
        text='Истории путешествий'
        uniqueName='stories'
      />
      <Subtitle
        nameStyles={'minorText'}
        text='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
      />
      <Stories cardStoriesData={cardStoriesData} />
    </>
  );
}
