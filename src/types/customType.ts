export type menuItemType = {
  id: string;
  name: string;
  anchor: string;
};

export type TitlePropsType = {
  title: string;
  uniqueName: string;
};

export type SubtitlePropsType = {
  subtitle: string;
};

export type tabType = {
  id: string;
  link: string;
  tabName: string;
};

export type CardTurPropsType = {
  id: string;
  pathImg: string;
  price: string;
  title: string;
  link: string;
  linkBtnName: string;
};

export type advantagesItemType = {
  id: string;
  itemText: string;
};

export type linkItemSocialType = {
  id: string;
  link: string;
  linkName: string;
};

export type CardStoriesPropsType = {
  id: string;
  pathImg: string;
  title: string;
  description: string;
  advantages: advantagesItemType[] | [];
  link: string;
  linkBtnName: string;
  linksSocials: linkItemSocialType[] | [];
};

export type LinkButtonPropsType = {
  parentStyles: string[];
  link: string;
  linkBtnName: string;
};
