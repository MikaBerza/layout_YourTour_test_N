'use client';
import React from 'react';
import Link from 'next/link';
import { tabsData } from '../../../utils/listsOfData';
import { tabType } from '../../../types/customType';
import styles from './tabs.module.css';

const Tabs: React.FC = () => {
  const [elementId, setElementId] = React.useState<string>(tabsData[0].id);

  return (
    <nav className={styles.tabs}>
      {tabsData.map((item: tabType) => {
        return (
          <Link
            className={`${styles.tabsLink} ${
              item.id === elementId && styles.tabsLinkActive
            }`}
            key={item.id}
            href={item.link}
            onClick={(event) => {
              // отменяем действие браузера по умолчанию, а именно
              // прокрутку странице вверх после нажатия на вкладку
              event.preventDefault();
              setElementId(item.id);
            }}
          >
            {item.tabName}
          </Link>
        );
      })}
    </nav>
  );
};

export default Tabs;
