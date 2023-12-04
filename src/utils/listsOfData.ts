import { generateId } from './modules';
import { CardTurPropsType, tabType } from '@/types/customType';

// данные вкладок
export const tabsData: tabType[] = [
  {
    id: generateId(),
    link: '#Popular',
    tabName: 'Популярные',
  },
  {
    id: generateId(),
    link: '#Copyright',
    tabName: 'Авторские',
  },
  {
    id: generateId(),
    link: '#Hiking',
    tabName: 'Походы',
  },
  {
    id: generateId(),
    link: '#Alloys',
    tabName: 'Сплавы',
  },
  {
    id: generateId(),
    link: '#CyclingTrips',
    tabName: 'Велопрогулки',
  },
];

// данные карточек CardTur
export const cardTurData: CardTurPropsType[] = [
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_1.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_2.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
];
