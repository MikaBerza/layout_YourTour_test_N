import { generateId } from './modules';
import {
  CardTurPropsType,
  CardStoriesPropsType,
  tabType,
} from '@/types/customType';

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

// данные карточек CardStories
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
