import styles from './QFieldTitle.module.css';

const FieldTitle = ({
  htmlForAttr,
  text,
}: {
  htmlForAttr: string;
  text: string;
}) => {
  return (
    <label className={styles.text} htmlFor={htmlForAttr}>
      {text}
    </label>
  );
};

FieldTitle.displayName = 'FieldTitle';
export default FieldTitle;
