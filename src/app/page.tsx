import React from 'react';

import { AnchorButton } from '../components/commons/buttons/indexButtons';
import { Title } from '../components/commons/Title';
import { Subtitle } from '../components/commons/Subtitle';
import {
  ChooseTour,
  Reviews,
  TravelPhotos,
  Stories,
} from '@/components/sections/indexSections';

import {
  cardReviewsData,
  cardStoriesData,
  travelPhotosData,
} from '../utils/listsOfData';

import ButtonsGroup from '@/components/group/ButtonsGroup/ButtonsGroup';
import {
  ChecksField,
  RadiosField,
  FieldTitle,
  TextareaField,
  DateInput,
  PhoneInput,
  EmailInput,
  NameInput,
  SelectionField,
} from '@/components/commons/forms/indexForms';

// import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/*___greeting */}
      <section className='greeting bgp-1'>
        <Title
          nameStyles={'mainText'}
          text='Идеальные путешествия существуют'
          uniqueName='greeting'
        />
        <Subtitle
          nameStyles={'mainText'}
          text='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
        />
        <AnchorButton name='Найти тур' />
      </section>

      {/*___choose-tour */}
      <Title
        nameStyles={'minorText'}
        text='Выбери свой тур'
        uniqueName='choose-tour'
      />
      <ChooseTour />

      {/*___collect-tour */}
      <section className='collect-tour'>
        <Title
          nameStyles={'minorText'}
          text='Собери свой тур'
          uniqueName='collect-tour'
        />
        <Subtitle
          nameStyles={'minorText'}
          text='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
        />
        <div className='collect-tour__container'>
          <form className='form-fill' action='#'>
            <div className='input-fields'>
              {/* Ввод имени */}
              <NameInput
                title='Имя'
                nameAttr='name'
                idAttr='connectionName'
                placeholderAttr='Введите Ваше имя'
              />
              {/* Ввод направления */}
              <SelectionField
                title='Направление'
                nameAttr='direction'
                idAttr='connectionDropdown'
                placeholderAttr='Куда хотите ехать'
              />
              {/* Ввод email */}
              <EmailInput
                title='Email'
                nameAttr='email'
                idAttr='connectionEmail'
                placeholderAttr='example@mail.com'
              />
              {/* Ввод телефона */}
              <PhoneInput
                title='Телефон'
                nameAttr='phone'
                idAttr='connectionPhone'
                placeholderAttr='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
              />

              {/* Ввод даты от*/}
              <DateInput
                title='Дата от'
                nameAttr='dateFrom'
                idAttr='connectionDateFrom'
              />
              {/* Ввод даты до*/}
              <DateInput
                title='Дата до'
                nameAttr='dateTo'
                idAttr='connectionDateTo'
              />
            </div>
            {/* Ввод комментария*/}
            <TextareaField
              title='Комментарий'
              nameAttr='comment'
              idAttr='connectionComment'
            />
            {/* Радио кнопки */}
            <RadiosField legendTitle='Вам есть 18 лет?' />
            {/* Чекбокс */}
            <ChecksField
              text='Нажимая кнопку, я принимаю условия'
              link='#licenseAgreement'
              linkText='Лицензионного договора'
            />
            {/* Группа кнопок */}
            <ButtonsGroup />
          </form>
        </div>
      </section>

      {/*___reviews */}
      <Title
        nameStyles={'minorText'}
        text='Отзывы наших путешественников'
        uniqueName='reviews'
      />
      <Subtitle
        nameStyles={'minorText'}
        text='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
      />
      <Reviews cardReviewsData={cardReviewsData} />

      {/*___travel-photos */}
      <Title
        nameStyles={'minorText'}
        text='Фотографии путешествий'
        uniqueName='travel-photos'
      />
      <Subtitle
        nameStyles={'minorText'}
        text='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
      />
      <TravelPhotos travelPhotosData={travelPhotosData} />

      {/*___stories */}
      <Title
        nameStyles={'minorText'}
        text='Истории путешествий'
        uniqueName='stories'
      />
      <Subtitle
        nameStyles={'minorText'}
        text='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
      />
      <Stories cardStoriesData={cardStoriesData} />
    </>
  );
}
