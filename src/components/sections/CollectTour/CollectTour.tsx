import React from 'react';
import { Title } from '../../../components/commons/Title';
import { Subtitle } from '../../../components/commons/Subtitle';

import {
  ChecksField,
  DateInput,
  EmailInput,
  NameInput,
  PhoneInput,
  RadiosField,
  SelectionField,
  TextareaField,
} from '../../../components/commons/forms/indexForms';
import { ButtonsGroup } from '../../../components/commons/buttons/indexButtons';
import styles from './CollectTour.module.css';

const CollectTour: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <Title nameStyles='minorText' text='Собери свой тур' id='collect-tour' />
      <Subtitle
        nameStyles='minorText'
        text='Идейные соображения высшего порядка, а также рамки и место обучения
        кадров'
      />

      <div className={styles.inner}>
        <form className={styles.formFill} action='#'>
          <div className={styles.inputsFields}>
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
  );
};

CollectTour.displayName = 'CollectTour';
export default CollectTour;
