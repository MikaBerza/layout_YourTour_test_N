import React from 'react';

import {
  Greeting,
  ChooseTour,
  Reviews,
  TravelPhotos,
  Stories,
  CollectTour,
} from '../components/sections/indexSections';

export default function Home() {
  return (
    <>
      <Greeting />
      <ChooseTour />
      <CollectTour />
      <Reviews />
      <TravelPhotos />
      <Stories />
    </>
  );
}
