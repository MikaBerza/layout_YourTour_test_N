import { FieldTitle } from '../indexForms';
import styles from './TextareaField.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const TextareaField = ({
  title,
  name,
  id,
  maxLength,
}: FormItemPropsType) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttr={id} text={title} />
      <textarea
        className={styles.item}
        name={name}
        id={id}
        autoComplete='off'
        maxLength={maxLength}
        required
      />
    </div>
  );
};

TextareaField.displayName = 'TextareaField';
export default TextareaField;
