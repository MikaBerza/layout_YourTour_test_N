import { FieldTitle } from '../indexForms';
import styles from './InputField.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const InputField = ({
  nameStyles,
  title,
  name,
  type,
  id,
  placeholder,
  pattern,
  maxLength,
}: FormItemPropsType) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttr={id} text={title} />
      <input
        // делаем проверку, чтобы в инспекторе не появлялся undefined
        className={`${styles.item} ${nameStyles ? styles[nameStyles] : ''}`}
        name={name}
        type={type}
        id={id}
        autoComplete='off'
        placeholder={placeholder}
        required
        //
        pattern={pattern}
        maxLength={maxLength}
      />
    </div>
  );
};

InputField.displayName = 'InputField';
export default InputField;
