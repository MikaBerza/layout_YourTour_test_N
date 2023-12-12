'use client';
import React from 'react';
import { Title } from '../../../components/commons/Title';
import { Tabs } from '../../../components/commons/Tabs';
import { CardTur } from '../../../components/commons/CardTur';

import {
  tabsData,
  cardTurData,
  cardTurData2,
  cardTurData3,
  cardTurData4,
  cardTurData5,
} from '../../../utils/listsOfData';
import styles from './ChooseTour.module.css';

const ChooseTour: React.FC = () => {
  const [tabName, setTabName] = React.useState('Популярные');

  return (
    <section className={styles.wrapper}>
      <Title
        nameStyles='minorText'
        text='Выбери свой тур'
        uniqueName='choose-tour'
      />
      <Tabs tabsData={tabsData} setTabName={setTabName} />
      {tabName === 'Популярные' && <CardTur cardTurData={cardTurData} />}
      {tabName === 'Авторские' && <CardTur cardTurData={cardTurData2} />}
      {tabName === 'Походы' && <CardTur cardTurData={cardTurData3} />}
      {tabName === 'Сплавы' && <CardTur cardTurData={cardTurData4} />}
      {tabName === 'Велопрогулки' && <CardTur cardTurData={cardTurData5} />}
    </section>
  );
};

ChooseTour.displayName = 'ChooseTour';
export default ChooseTour;
