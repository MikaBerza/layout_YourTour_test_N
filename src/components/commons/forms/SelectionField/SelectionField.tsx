import React from 'react';
import { FieldTitle } from '../indexForms';
import { listOptionData } from '@/utils/listsOfData';
import styles from './selectionField.module.css';
import { FormItemPropsType } from '@/types/customType';

const SelectionField: React.FC<FormItemPropsType> = ({
  title,
  nameAttr,
  idAttr,
  placeholderAttr,
}) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttr={idAttr} text={title} />
      <div className={styles.inner}>
        <select
          className={styles.item}
          name={nameAttr}
          id={idAttr}
          required
          defaultValue=''
        >
          <option value='' disabled>
            {placeholderAttr}
          </option>
          {listOptionData.map((item) => {
            return (
              <option value={item.valueText} key={item.id}>
                {item.valueText}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

SelectionField.displayName = 'SelectionField';
export default SelectionField;
