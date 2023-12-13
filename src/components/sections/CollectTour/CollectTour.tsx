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
import styles from './CollectTour.module.css';

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
              nameAttr='name'
              typeAttr='text'
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
            <InputField
              title='Email'
              nameAttr='email'
              typeAttr='email'
              idAttr='connectionEmail'
              placeholderAttr='example@mail.com'
            />
            {/* Ввод телефона */}
            <InputField
              title='Телефон'
              nameAttr='phone'
              typeAttr='tel'
              idAttr='connectionPhone'
              placeholderAttr='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
              patternAttr='\+7\d{10}'
              maxLengthAttr={12}
            />

            {/* Ввод даты от */}
            <InputField
              nameStyles='itemDate'
              title='Дата от'
              nameAttr='dateFrom'
              typeAttr='date'
              idAttr='connectionDateFrom'
            />

            {/* Ввод даты до */}
            <InputField
              nameStyles='itemDate'
              title='Дата до'
              nameAttr='dateTo'
              typeAttr='date'
              idAttr='connectionDateTo'
            />
          </div>
          {/* Ввод комментария*/}
          <TextareaField
            title='Комментарий'
            nameAttr='comment'
            idAttr='connectionComment'
            maxLengthAttr={300}
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
