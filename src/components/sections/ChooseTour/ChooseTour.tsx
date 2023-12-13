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

const ChooseTour = () => {
  const [tabName, setTabName] = React.useState('Популярные');

  const getTurData = React.useCallback(() => {
    switch (tabName) {
      case 'Популярные':
        return cardTurData;
      case 'Авторские':
        return cardTurData2;
      case 'Походы':
        return cardTurData3;
      case 'Сплавы':
        return cardTurData4;
      case 'Велопрогулки':
        return cardTurData5;
    }
  }, [tabName]);

  return (
    <section className={styles.wrapper}>
      <Title text='Выбери свой тур' id='choose-tour' />
      <Tabs tabsData={tabsData} setTabName={setTabName} />
      <CardTur cardTurData = {getTurData()} />
    </section>
  );
};

ChooseTour.displayName = 'ChooseTour';
export default ChooseTour;
