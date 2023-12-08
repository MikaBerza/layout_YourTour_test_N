import React from 'react';
import { FieldTitle } from '../indexForms';
import { listOptionData } from '@/utils/listsOfData';

import styles from './selectionField.module.css';

const SelectionField: React.FC<{
  title: string;
  nameAttribute: string;
  idAttribute: string;
  placeholderAttribute: string;
}> = ({ title, nameAttribute, idAttribute, placeholderAttribute }) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttribute={idAttribute} text={title} />
      <div className={styles.inner}>
        <select
          className={styles.selectItem}
          name={nameAttribute}
          id={idAttribute}
          required
          defaultValue=''
        >
          <option value='' disabled>
            {placeholderAttribute}
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
