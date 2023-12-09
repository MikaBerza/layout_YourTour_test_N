import React from 'react';
import { Title } from '@/components/commons/Title';
import { Subtitle } from '@/components/commons/Subtitle';
import { AnchorButton } from '@/components/commons/buttons/indexButtons';

import styles from './greeting.module.css';

const Greeting: React.FC = () => {
  return (
    <section className={`${styles.wrapper} ${'bgp-1'}`}>
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
  );
};

Greeting.displayName = 'Greeting';
export default Greeting;
