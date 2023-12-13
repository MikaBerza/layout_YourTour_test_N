import { FieldTitle } from '../indexForms';
import styles from './TextareaField.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const TextareaField = ({
  title,
  nameAttr,
  idAttr,
  maxLengthAttr,
}: FormItemPropsType) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttr={idAttr} text={title} />
      <textarea
        className={styles.item}
        name={nameAttr}
        id={idAttr}
        autoComplete='off'
        maxLength={maxLengthAttr}
        required
      />
    </div>
  );
};

TextareaField.displayName = 'TextareaField';
export default TextareaField;
