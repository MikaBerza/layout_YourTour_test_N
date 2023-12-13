import styles from './Subtitle.module.css';
import { TitleElementsPropsType } from '../../../types/customType';

const Subtitle = ({ nameStyles, text }: TitleElementsPropsType) => {
  return (
    <p className={`${styles[nameStyles]} ${styles.generalText}`}>{text}</p>
  );
};

Subtitle.defaultProps = {
  nameStyles: 'minorText',
};

Subtitle.displayName = 'Subtitle';
export default Subtitle;
