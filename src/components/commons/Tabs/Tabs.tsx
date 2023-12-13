import React from 'react';
import { MenuItemType } from '../../../types/customType';
import styles from './QTabs.module.css';

const Tabs = ({
  tabsData,
  setTabName,
}: {
  tabsData: MenuItemType[];
  setTabName: (itemName: string) => void;
}) => {
  const [elementId, setElementId] = React.useState<string>(tabsData[0].id);

  // функция, обработать клик по вкладке
  const handleTabClick = (item: MenuItemType) => {
    setElementId(item.id);
    setTabName(item.name);
  };

  return (
    <nav className={styles.tabs}>
      {tabsData.map((item) => (
        <a
          className={`${styles.tabsLink} ${
            item.id === elementId && styles.tabsLinkActive
          }`}
          key={item.id}
          href={item.link}
          onClick={() => handleTabClick(item)}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

Tabs.displayName = 'Tabs';
export default Tabs;
