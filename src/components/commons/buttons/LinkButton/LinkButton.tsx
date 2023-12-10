'use client';
import React from 'react';
import Link from 'next/link';
import { LinkButtonPropsType } from '../../../../types/customType';

const LinkButton: React.FC<LinkButtonPropsType> = ({
  parentStyles: [linkBtn, linkItemBtn],
  link,
  linkBtnName,
}) => {
  return (
    <div className={linkBtn}>
      <Link
        className={linkItemBtn}
        href={link}
        onClick={(event) => {
          // отменяем действие браузера по умолчанию, а именно
          // прокрутку странице вверх после нажатия на вкладку
          event.preventDefault();
        }}
      >
        {linkBtnName}
      </Link>
    </div>
  );
};

LinkButton.displayName = 'LinkButton';
export default LinkButton;
