import { Title } from '../../../components/commons/Title';
import { Subtitle } from '../../../components/commons/Subtitle';

import {
  ChecksField,
  InputField,
  RadiosField,
  SelectionField,
  TextareaField,
} from '../../../components/commons/forms/indexForms';
import { FormButton } from '../../../components/commons/buttons/indexButtons';
import styles from './QCollectTour.module.css';

const CollectTour = () => {
  return (
    <section className={styles.wrapper}>
      <Title text='Собери свой тур' id='collect-tour' />
      <Subtitle
        text='Идейные соображения высшего порядка, а также рамки и место обучения
        кадров'
      />

      <div className={styles.inner}>
        <form className={styles.formFill} action='#'>
          <div className={styles.container}>
            {/* Ввод имени */}
            <InputField
              title='Имя'
              name='name'
              type='text'
              id='connectionName'
              placeholder='Введите Ваше имя'
            />
            {/* Ввод направления */}
            <SelectionField
              title='Направление'
              name='direction'
              id='connectionDropdown'
              placeholder='Куда хотите ехать'
            />
            {/* Ввод email */}
            <InputField
              title='Email'
              name='email'
              type='email'
              id='connectionEmail'
              placeholder='example@mail.com'
            />
            {/* Ввод телефона */}
            <InputField
              title='Телефон'
              name='phone'
              type='tel'
              id='connectionPhone'
              placeholder='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
              pattern='\+7\d{10}'
              maxLength={12}
            />

            {/* Ввод даты от */}
            <InputField
              nameStyles='inputDate'
              title='Дата от'
              name='dateFrom'
              type='date'
              id='connectionDateFrom'
            />

            {/* Ввод даты до */}
            <InputField
              nameStyles='inputDate'
              title='Дата до'
              name='dateTo'
              type='date'
              id='connectionDateTo'
            />
          </div>
          {/* Ввод комментария*/}
          <TextareaField
            title='Комментарий'
            name='comment'
            id='connectionComment'
            maxLength={300}
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
          <div className={styles.buttonsGroup}>
            <FormButton nameBtn='Найти тур' nameStyles='find' />
            <FormButton nameBtn='Сбросить' nameStyles='reset' />
          </div>
        </form>
      </div>
    </section>
  );
};

CollectTour.displayName = 'CollectTour';
export default CollectTour;
