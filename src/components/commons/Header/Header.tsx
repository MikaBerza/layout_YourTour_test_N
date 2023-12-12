'use client';
import React from 'react';
import Link from 'next/link';

import { headerMenuData } from '../../../utils/listsOfData';
import Logo from './Logo';

import styles from './Header.module.css';
import { MenuItemType } from '../../../types/customType';

const Header: React.FC = () => {
  const [flag, setFlag] = React.useState<boolean>(false);

  // функция, отследить прокрутку
  const trackScrolling = React.useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY > 450) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [setFlag]);

  React.useEffect(() => {
    // добавляем обработчик события scroll
    window.addEventListener('scroll', trackScrolling);
    // делаем при размонтировании компонента, чтобы предотвратить вызов обработчика события после того, как компонент ушел с экрана
    return () => {
      // изменим состояние флага на false
      setFlag(false);
      // удаляем обработчик события scroll
      window.removeEventListener('scroll', trackScrolling);
    };
  }, []);

  // функция, сгенерировать пункты меню (JSX-элементы)
  const generateMenuItems = (item: MenuItemType): React.JSX.Element => {
    return (
      <li
        key={item.id}
        className={styles.menuItem}
      >
        <a
          className={`${styles.menuItemAnchor} ${
            flag ? `${styles.scrolledColor} ${styles.scrolledHover}` : ''
          }`}
          href={item.link}
        >
          {item.name}
        </a>
      </li>
    );
  };

  return (
    <header
      className={`${styles.wrapper} ${flag ? styles.scrolledFixBgn : ''}`}
    >
      <nav className={styles.navbar}>
        <Link
          className={`${styles.logo} ${flag ? styles.scrolledColor : ''}`}
          href='#YourTour'
        >
          <Logo />
        </Link>
        <ul className={styles.menu}>{headerMenuData.map(generateMenuItems)}</ul>
        <a
          className={`${styles.telephoneNumber} ${
            flag && styles.scrolledColor
          }`}
          href='tel:+79999999999'
        >
          +7 999 999 99 99
        </a>
      </nav>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
