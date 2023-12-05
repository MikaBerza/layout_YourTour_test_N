import { generateId } from './modules';
import {
  CardTurPropsType,
  CardStoriesPropsType,
  tabType,
  TravelPhotosPropsType,
} from '@/types/customType';

// страницы 1, данные вкладок
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

// страницы 1, данные карточек CardTur
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

export const cardTurData2: CardTurPropsType[] = [
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
];

export const cardTurData3: CardTurPropsType[] = [
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
];

export const cardTurData4: CardTurPropsType[] = [
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
];

export const cardTurData5: CardTurPropsType[] = [
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
  },
];

// страницы 1, данные карточек CardStories
export const cardStoriesData: CardStoriesPropsType[] = [
  {
    id: generateId(),
    pathImg: '/images/stories/storyPhoto1.png',
    title: 'Автостопом в Стамбул',
    description: `Идейные соображения высшего порядка, а также рамки и место
    обучения кадров обеспечивает широкому кругу (специалистов)
    участие в формировании новых предложений:`,
    advantages: [
      {
        id: generateId(),
        itemText: 'вкусная еда',
      },
      {
        id: generateId(),
        itemText: 'дешевый транспорт',
      },
      {
        id: generateId(),
        itemText: 'красивый город.',
      },
    ],
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
    linksSocials: [
      {
        id: generateId(),
        link: '#instagram',
        linkName: 'instagram',
      },
      {
        id: generateId(),
        link: '#facebook',
        linkName: 'facebook',
      },
      {
        id: generateId(),
        link: '#YouTube',
        linkName: 'YouTube',
      },
    ],
  },
  {
    id: generateId(),
    pathImg: '/images/stories/storyPhoto2.png',
    title: 'Автостопом в Стамбул',
    description: `Идейные соображения высшего порядка, а также рамки и место
    обучения кадров обеспечивает широкому кругу (специалистов)
    участие в формировании новых предложений:`,
    advantages: [],
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
    linksSocials: [
      {
        id: generateId(),
        link: '#instagram',
        linkName: 'instagram',
      },
      {
        id: generateId(),
        link: '#ВКонтакте',
        linkName: 'ВКонтакте',
      },
    ],
  },
  {
    id: generateId(),
    pathImg: '/images/stories/storyPhoto3.png',
    title: 'Автостопом в Стамбул',
    description: `Идейные соображения высшего порядка, а также рамки и место
    обучения кадров обеспечивает широкому кругу (специалистов)
    участие в формировании новых предложений:`,
    advantages: [],
    link: '#MoreDetailed',
    linkBtnName: 'Подробнее',
    linksSocials: [
      {
        id: generateId(),
        link: '#instagram',
        linkName: 'instagram',
      },
      {
        id: generateId(),
        link: '#facebook',
        linkName: 'facebook',
      },
      {
        id: generateId(),
        link: '#ВКонтакте',
        linkName: 'ВКонтакте',
      },
    ],
  },
];

// страницы 1, данные TravelPhotos
export const travelPhotosData: TravelPhotosPropsType[] = [
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto1.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto2.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto3.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto4.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto5.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto6.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto7.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto8.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto9.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto10.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto11.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto12.png' },
  { id: generateId(), pathImg: '/images/travelPhotos/travelPhoto13.png' },
];
