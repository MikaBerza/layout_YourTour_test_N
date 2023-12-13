import styles from './QSubtitle.module.css';
import { TitleElementsPropsType } from '../../../types/customType';

const Subtitle = ({ nameStyles = 'minorText', text }: TitleElementsPropsType) => {
  return (
    <p className={`${styles[nameStyles]} ${styles.generalText}`}>{text}</p>
  );
};

Subtitle.displayName = 'Subtitle';
export default Subtitle;
