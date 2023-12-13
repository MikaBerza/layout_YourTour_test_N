import styles from './Radio.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const Radio = ({ title, nameAttr, idAttr, valueAttr }: FormItemPropsType) => {
  return (
    <div className={styles.inner}>
      <input
        className={styles.item}
        type='radio'
        name={nameAttr}
        id={idAttr}
        value={valueAttr}
        required
      />
      <label className={styles.text} htmlFor={idAttr}>
        {title}
      </label>
    </div>
  );
};

Radio.displayName = 'Radio';
export default Radio;
