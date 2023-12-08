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
              {/* <div className='input-fields__name'>
                <FieldTitle htmlForAttribute='connectionName' text='Имя' />
                <input
                  className='input-fields__name-input'
                  name='name'
                  type='text'
                  id='connectionName'
                  placeholder='Введите Ваше имя'
                  autoComplete='off'
                  required
                />
              </div> */}
              <NameInput
                title='Имя'
                nameAttribute='name'
                idAttribute='connectionName'
                placeholderAttribute='Введите Ваше имя'
              />
              {/* <div className='input-fields__dropdown'>
                <FieldTitle
                  htmlForAttribute='connectionDropdown'
                  text='Направление'
                />
                <div className='input-fields__dropdown-select'>
                  <select
                    className='input-fields__dropdown-select-item'
                    name='direction'
                    id='connectionDropdown'
                    required
                    defaultValue=''
                  >
                    <option value='' disabled>
                      Куда хотите ехать
                    </option>
                    <option value='Вариант 1'>Вариант 1</option>
                    <option value='Вариант 2'>Вариант 2</option>
                    <option value='Вариант 3'>Вариант 3</option>
                    <option value='Вариант 4'>Вариант 4</option>
                  </select>
                </div>
              </div> */}
              <SelectionField
                title='Направление'
                nameAttribute='direction'
                idAttribute='connectionDropdown'
                placeholderAttribute='Куда хотите ехать'
              />
              {/* <div className='input-fields__email'>
                <FieldTitle htmlForAttribute='connectionEmail' text='Email' />
                <input
                  className='input-fields__email-input'
                  name='email'
                  type='email'
                  id='connectionEmail'
                  placeholder='example@mail.com'
                  autoComplete='off'
                  required
                />
              </div> */}
              <EmailInput
                title='Email'
                nameAttribute='email'
                idAttribute='connectionEmail'
                placeholderAttribute='example@mail.com'
              />
              {/* <div className='input-fields__phone'>
                <FieldTitle htmlForAttribute='connectionPhone' text='Телефон' />
                <input
                  className='input-fields__phone-input'
                  name='phone'
                  type='tel'
                  pattern='\+7\d{10}'
                  maxLength={12}
                  id='connectionPhone'
                  placeholder='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
                  autoComplete='off'
                  required
                />
              </div> */}
              <PhoneInput
                title='Телефон'
                nameAttribute='phone'
                idAttribute='connectionPhone'
                placeholderAttribute='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
              />

              {/* <div className='input-fields__dateFrom'>
                <FieldTitle
                  htmlForAttribute='connectionDateFrom'
                  text='Дата от'
                />
                <input
                  className='input-fields__dateFrom-input'
                  name='dateFrom'
                  type='date'
                  id='connectionDateFrom'
                  autoComplete='off'
                  required
                />
              </div> */}
              <DateInput
                title='Дата от'
                nameAttribute='dateFrom'
                idAttribute='connectionDateFrom'
              />
              {/* <div className='input-fields__dateTo'>
                <FieldTitle
                  htmlForAttribute='connectionDateTo'
                  text='Дата до'
                />
                <input
                  className='input-fields__dateTo-input'
                  name='dateTo'
                  type='date'
                  id='connectionDateTo'
                  autoComplete='off'
                  required
                />
              </div> */}
              <DateInput
                title='Дата до'
                nameAttribute='dateTo'
                idAttribute='connectionDateTo'
              />
            </div>

            <TextareaField title='Комментарий' />
            <RadiosField title='Вам есть 18 лет?' />
            <ChecksField
              text='Нажимая кнопку, я принимаю условия'
              link='#licenseAgreement'
              linkText='Лицензионного договора'
            />
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
