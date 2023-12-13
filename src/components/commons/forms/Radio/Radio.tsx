import styles from './Radio.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const Radio = ({ title, name, id, value }: FormItemPropsType) => {
  return (
    <div className={styles.inner}>
      <input
        className={styles.item}
        type='radio'
        name={name}
        id={id}
        value={value}
        required
      />
      <label className={styles.text} htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

Radio.displayName = 'Radio';
export default Radio;
