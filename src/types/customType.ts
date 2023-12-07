export type MenuItemType = {
  id: string;
  link: string;
  name: string;
};

export type CardTurPropsType = {
  id: string;
  link: string;
  pathImg: string;
  title: string;
  price: string;
};

export type LinkItemSocialType = {
  id: string;
  link: string;
  linkName: string;
};

export type AdvantagesItemType = {
  id: string;
  text: string;
};

export type CardStoriesPropsType = {
  id: string;
  link: string;
  linksSocials: LinkItemSocialType[] | [];
  pathImg: string;
  title: string;
  description: string;
  advantages: AdvantagesItemType[] | [];
};

export type LinkButtonPropsType = {
  link: string;
  linkBtnName: string;
  parentStyles: string[];
};

export type TravelPhotosPropsType = {
  id: string;
  pathImg: string;
};

export type CardReviewsPropsType = {
  id: string;
  pathImg: string;
  text: string;
  authorName: string;
  tourName: string;
};
