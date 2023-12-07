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

// import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/*___greeting */}
      <section className='greeting bgp-1'>
        <h1 className='section-title-main' id='YourTour'>
          Идеальные путешествия существуют
        </h1>
        <p className='section-subtitle-main'>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <AnchorButton name='Найти тур'/>
      </section>

      {/*___choose-tour */}
      <Title title='Выбери свой тур' uniqueName='choose-tour' />
      <ChooseTour />

      {/*___collect-tour */}
      <section className='collect-tour'>
        <Title title='Собери свой тур' uniqueName='collect-tour' />
        <Subtitle
          subtitle='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
        />
        <div className='collect-tour__container'>
          <form className='form-fill' action='#'>
            <div className='input-fields'>
              <div className='input-fields__name'>
                <label
                  className='input-fields__name-label'
                  htmlFor='connectionName'
                >
                  Имя
                </label>
                <input
                  className='input-fields__name-input'
                  name='name'
                  type='text'
                  id='connectionName'
                  placeholder='Введите Ваше имя'
                  autoComplete='off'
                  required
                />
              </div>
              <div className='input-fields__dropdown'>
                <label
                  className='input-fields__dropdown-label'
                  htmlFor='connectionDropdown'
                >
                  Направление
                </label>
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
              </div>

              <div className='input-fields__email'>
                <label
                  className='input-fields__email-label'
                  htmlFor='connectionEmail'
                >
                  Email
                </label>
                <input
                  className='input-fields__email-input'
                  name='email'
                  type='email'
                  id='connectionEmail'
                  placeholder='example@mail.com'
                  autoComplete='off'
                  required
                />
              </div>

              <div className='input-fields__phone'>
                <label
                  className='input-fields__phone-label'
                  htmlFor='connectionPhone'
                >
                  Телефон
                </label>
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
              </div>

              <div className='input-fields__dateFrom'>
                <label
                  className='input-fields__dateFrom-label'
                  htmlFor='connectionDateFrom'
                >
                  Дата от
                </label>
                <input
                  className='input-fields__dateFrom-input'
                  name='dateFrom'
                  type='date'
                  id='connectionDateFrom'
                  autoComplete='off'
                  required
                />
              </div>

              <div className='input-fields__dateTo'>
                <label
                  className='input-fields__dateTo-label'
                  htmlFor='connectionDateTo'
                >
                  Дата до
                </label>
                <input
                  className='input-fields__dateTo-input'
                  name='dateTo'
                  type='date'
                  id='connectionDateTo'
                  autoComplete='off'
                  required
                />
              </div>
            </div>

            <div className='comment-field'>
              <label
                className='comment-field__label'
                htmlFor='connectionComment'
              >
                Комментарий
              </label>
              <textarea
                className='comment-field__textarea'
                name='comment'
                id='connectionComment'
                autoComplete='off'
                maxLength={300}
                required
              />
            </div>

            <fieldset className='radio-fields'>
              <legend className='legend-title'>Вам есть 18 лет?</legend>
              <div className='radio-group'>
                <div className='radio-group__item'>
                  <input
                    className='radio-group__item-input'
                    type='radio'
                    name='clientAge'
                    id='connectionAgeYes'
                    value='Yes'
                  />
                  <label
                    className='radio-group__item-label'
                    htmlFor='connectionAgeYes'
                  >
                    Да
                  </label>
                </div>
                <div className='radio-group__item'>
                  <input
                    className='radio-group__item-input'
                    type='radio'
                    name='clientAge'
                    id='connectionAgeNo'
                    value='No'
                  />
                  <label
                    className='radio-group__item-label'
                    htmlFor='connectionAgeNo'
                  >
                    Нет
                  </label>
                </div>
              </div>
            </fieldset>

            <div className='agreement-field'>
              <input
                className='agreement-field__input'
                type='checkbox'
                name='acceptAgreement'
                id='connectionAgreement'
              />
              <label
                className='agreement-field__customCheckbox'
                htmlFor='connectionAgreement'
              ></label>
              <p className='agreement-field__text'>
                Нажимая кнопку, я принимаю условия
                <a className='agreement-field__link' href='#licenseAgreement'>
                  Лицензионного договора
                </a>
              </p>
            </div>

            <div className='buttons-group'>
              <button className='buttons-group__find'>Найти тур</button>
              <button className='buttons-group__reset'>Сбросить</button>
            </div>
          </form>
        </div>
      </section>

      {/*___reviews */}
      <Title title='Отзывы наших путешественников' uniqueName='reviews' />
      <Subtitle
        subtitle='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
      />
      <Reviews cardReviewsData={cardReviewsData} />

      {/*___travel-photos */}
      <Title title='Фотографии путешествий' uniqueName='travel-photos' />
      <Subtitle
        subtitle='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
      />
      <TravelPhotos travelPhotosData={travelPhotosData} />

      {/*___stories */}
      <Title title='Истории путешествий' uniqueName='stories' />
      <Subtitle
        subtitle='Идейные соображения высшего порядка, а также рамки и место обучения
          кадров'
      />
      <Stories cardStoriesData={cardStoriesData} />
    </>
  );
}
