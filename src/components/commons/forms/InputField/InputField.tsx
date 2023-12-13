import React from 'react';
import { FieldTitle } from '../indexForms';
import styles from './InputField.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const InputField: React.FC<FormItemPropsType> = ({
  nameStyles,
  title,
  nameAttr,
  typeAttr,
  idAttr,
  placeholderAttr,
  patternAttr,
  maxLengthAttr,
}) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttr={idAttr} text={title} />
      <input
        // делаем проверку, чтобы в инспекторе не появлялся undefined
        className={`${styles.item} ${nameStyles ? styles[nameStyles] : ''}`}
        name={nameAttr}
        type={typeAttr}
        id={idAttr}
        autoComplete='off'
        placeholder={placeholderAttr}
        required
        //
        pattern={patternAttr}
        maxLength={maxLengthAttr}
      />
    </div>
  );
};

InputField.displayName = 'InputField';
export default InputField;
