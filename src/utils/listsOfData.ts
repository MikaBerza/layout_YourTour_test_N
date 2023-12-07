import { generateId } from './modules';
import {
  CardTurPropsType,
  CardStoriesPropsType,
  MenuItemType,
  TravelPhotosPropsType,
  CardReviewsPropsType,
} from '@/types/customType';

// страницы 1, данные вкладок
export const tabsData: MenuItemType[] = [
  {
    id: generateId(),
    link: '#Popular',
    name: 'Популярные',
  },
  {
    id: generateId(),
    link: '#Copyright',
    name: 'Авторские',
  },
  {
    id: generateId(),
    link: '#Hiking',
    name: 'Походы',
  },
  {
    id: generateId(),
    link: '#Alloys',
    name: 'Сплавы',
  },
  {
    id: generateId(),
    link: '#CyclingTrips',
    name: 'Велопрогулки',
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
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_2.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 80 000 руб',
    title: 'Путешествие в горы',
    link: '#MoreDetailed',
  },
];

export const cardTurData2: CardTurPropsType[] = [
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_6.png',
    price: 'от 100 000 руб',
    title: 'Авторские вечера',
    link: '#MoreDetailed',
  },
];

export const cardTurData3: CardTurPropsType[] = [
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_4.png',
    price: 'от 30 000 руб',
    title: 'Походы по улицам',
    link: '#MoreDetailed',
  },
];

export const cardTurData4: CardTurPropsType[] = [
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_3.png',
    price: 'от 55 000 руб',
    title: 'Сплавы по рекам',
    link: '#MoreDetailed',
  },
];

export const cardTurData5: CardTurPropsType[] = [
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
  },
  {
    id: generateId(),
    pathImg: '/images/chooseTour/card_tour_photo_5.png',
    price: 'от 15 000 руб',
    title: 'Велопрогулки по побережью',
    link: '#MoreDetailed',
  },
];

// страницы 1, данные CardReviews
export const cardReviewsData: CardReviewsPropsType[] = [
  {
    id: generateId(),
    text: `Идейные соображения высшего порядка, а также рамки и место обучения
    кадров обеспечивает широкому кругу (специалистов) участие в
    формировании новых предложений. Идейные соображения высшего порядка, а
    также начало повседневной работы по формированию позиции позволяет
    оценить значение модели развития.`,
    authorName: 'Мария',
    tourName: 'Тур: Вдали от дома',
    pathImg: '/images/reviewPhoto1.png',
  },
  {
    id: generateId(),
    text: `Равным образом постоянный количественный рост и сфера нашей
    активности играет важную роль в формировании системы обучения
    кадров, соответствует насущным потребностям. \nЗначимость этих проблем настолько очевидна, что дальнейшее
    развитие различных форм деятельности обеспечивает широкому кругу
    (специалистов) участие в формировании новых предложений.
    Повседневная практика показывает, что реализация намеченных
    плановых заданий в значительной степени обуславливает создание
    модели развития.`,
    authorName: 'Павел',
    tourName: 'Тур: Путешествие в горы',
    pathImg: '/images/reviewPhoto2.png',
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
