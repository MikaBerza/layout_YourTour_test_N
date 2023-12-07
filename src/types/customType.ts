export type MenuItemType = {
  id: string;
  link: string;
  name: string;
};

export type CardTurPropsType = {
  id: string;
  pathImg: string;
  price: string;
  title: string;
  link: string;
};

export type linkItemSocialType = {
  id: string;
  link: string;
  linkName: string;
};

export type advantagesItemType = {
  id: string;
  itemText: string;
};

export type CardStoriesPropsType = {
  id: string;
  pathImg: string;
  title: string;
  description: string;
  advantages: advantagesItemType[] | [];
  link: string;
  linksSocials: linkItemSocialType[] | [];
};

export type LinkButtonPropsType = {
  parentStyles: string[];
  link: string;
  linkBtnName: string;
};

export type TravelPhotosPropsType = {
  id: string;
  pathImg: string;
};

export type CardReviewsPropsType = {
  id: string;
  text: string;
  authorName: string;
  tourName: string;
  pathImg: string;
};