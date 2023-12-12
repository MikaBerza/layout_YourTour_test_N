import React from 'react';
import { Subtitle } from '../../../components/commons/Subtitle';
import { AnchorButton } from '../../../components/commons/buttons/indexButtons';
import styles from './Greeting.module.css';

const Greeting: React.FC = () => {
  return (
    <section className={`${styles.wrapper} ${'bgp-1'}`}>
      <h1 className={`${styles.mainText} ${styles.generalText}`} id='greeting'>
        Идеальные путешествия существуют
      </h1>

      <Subtitle
        nameStyles='mainText'
        text='Идейные соображения высшего порядка, а также рамки и место обучения
      кадров'
      />

      <AnchorButton name='Найти тур' />
    </section>
  );
};

Greeting.displayName = 'Greeting';
export default Greeting;
