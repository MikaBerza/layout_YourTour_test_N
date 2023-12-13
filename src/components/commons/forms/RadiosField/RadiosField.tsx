import { Radio } from '../indexForms';
import styles from './QRadiosField.module.css';

const RadiosField = ({ legendTitle }: { legendTitle: string }) => {
  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.title}>{legendTitle}</legend>
      <div className={styles.group}>
        <Radio
          title='Да'
          name='clientAge'
          id='connectionAgeYes'
          value='Yes'
        />
        <Radio
          title='Нет'
          name='clientAge'
          id='connectionAgeNo'
          value='No'
        />
      </div>
    </fieldset>
  );
};

RadiosField.displayName = 'RadiosField';
export default RadiosField;
