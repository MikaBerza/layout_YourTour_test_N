import React from 'react';
import { Title } from '@/components/commons/Title';
import { Subtitle } from '@/components/commons/Subtitle';
import { AnchorButton } from '@/components/commons/buttons/indexButtons';

import styles from './greeting.module.css';
import { SectionsPropsType } from '@/types/customType';

const Greeting: React.FC<SectionsPropsType> = ({
  titleStyleName,
  titleText,
  titleUniqueName,
  subtitleStyeName,
  subtitleText,
}) => {
  return (
    <section className={`${styles.wrapper} ${'bgp-1'}`}>
      <Title
        nameStyles={titleStyleName}
        text={titleText}
        uniqueName={titleUniqueName}
      />
      <Subtitle nameStyles={subtitleStyeName} text={subtitleText} />
      <AnchorButton name='Найти тур' />
    </section>
  );
};

Greeting.displayName = 'Greeting';
export default Greeting;
