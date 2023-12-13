'use client';
import Link from 'next/link';
import { LinkButtonPropsType } from '../../../../types/customType';

const LinkButton = ({
  parentStyles: [linkBtn, linkItemBtn],
  link,
  linkBtnName,
}: LinkButtonPropsType) => {
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
