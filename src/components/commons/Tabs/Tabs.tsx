import React from 'react';
import Link from 'next/link';
import { tabType } from '../../../types/customType';
import styles from './tabs.module.css';

const Tabs: React.FC<{
  tabsData: tabType[];
  setTabName: (itemName: string) => void;
}> = ({ tabsData, setTabName }) => {
  const [elementId, setElementId] = React.useState<string>(tabsData[0].id);

  // функция, обработать клик по вкладке
  const handleTabClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: tabType
  ) => {
    // отменяем действие браузера по умолчанию, а именно
    // прокрутку странице вверх после нажатия на вкладку
    event.preventDefault();
    setElementId(item.id);
    setTabName(item.tabName);
  };

  return (
    <nav className={styles.tabs}>
      {tabsData.map((item) => {
        return (
          <Link
            className={`${styles.tabsLink} ${
              item.id === elementId && styles.tabsLinkActive
            }`}
            key={item.id}
            href={item.link}
            onClick={(event) => handleTabClick(event, item)}
          >
            {item.tabName}
          </Link>
        );
      })}
    </nav>
  );
};

Tabs.displayName = 'Tabs';
export default Tabs;
