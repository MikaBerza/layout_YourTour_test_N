import { LinkButtonPropsType } from '@/types/customType';
import React from 'react';

const LinkButton: React.FC<LinkButtonPropsType> = ({
  parentStyles: [linkBtn, linkItemBtn],
  link,
  linkBtnName,
}) => {
  return (
    <div className={linkBtn}>
      <a className={linkItemBtn} href={link}>
        {linkBtnName}
      </a>
    </div>
  );
};

LinkButton.displayName = 'LinkButton';
export default LinkButton;
