import { FieldTitle } from '../indexForms';
import { listOptionData } from '../../../../utils/listsOfData';
import styles from './QSelectionField.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const SelectionField = ({
  title,
  name,
  id,
  placeholder,
}: FormItemPropsType) => {
  return (
    <div className={styles.wrapper}>
      <FieldTitle htmlForAttr={id} text={title} />
      <div className={styles.inner}>
        <select
          className={styles.selects}
          name={name}
          id={id}
          required
          defaultValue=''
        >
          <option value='' disabled>
            {placeholder}
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
