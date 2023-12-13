import React from 'react';
import styles from './Title.module.css';
import { TitleElementsPropsType } from '../../../types/customType';

const Title = React.memo(({ text, id }: TitleElementsPropsType) => {
  return (
    <h2 className={`${styles.minorText} ${styles.generalText}`} id={id}>
      {text}
    </h2>
  );
});

Title.displayName = 'Title';
export default Title;
