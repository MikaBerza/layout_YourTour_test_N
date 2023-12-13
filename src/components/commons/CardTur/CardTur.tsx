import Image from 'next/image';
import { LinkButton } from '../buttons/indexButtons';
import styles from './CardTur.module.css';
import { CardTurPropsType } from '../../../types/customType';

const CardTur = ({ cardTurData }: { cardTurData: CardTurPropsType[] }) => {
  return (
    <div className={styles.wrapper}>
      {cardTurData.map((item: CardTurPropsType) => (
        <div className={styles.inner} key={item.id}>
          <Image
            src={item.pathImg}
            width={370}
            height={531}
            className={`${styles.img} bgp-1`}
            alt='images'
            priority
          />
          <div className={styles.content}>
            <div>
              <h3 className={styles.title} data-price={item.price}>
                {item.title}
              </h3>
              <p className={styles.price}>{item.price}</p>
            </div>
            <LinkButton
              parentStyles={[styles.linkBtn, styles.linkItemBtn]}
              link={item.link}
              linkBtnName='Подробнее'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

CardTur.displayName = 'CardTur';
export default CardTur;
