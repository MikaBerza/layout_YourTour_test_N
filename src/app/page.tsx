import Image from 'next/image';
import { Title } from '../components/commons/Title';
// import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className='greeting bgp-1'>
        <h1 className='section-title-main' id='YourTour'>
          Идеальные путешествия существуют
        </h1>
        <p className='section-subtitle-main'>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className='buttons'>
          <button className='buttons__small'>Найти тур</button>
        </div>
      </section>

      <section className='choose-tour'>
        <Title title='Выбери свой тур' uniqueName='choose-tour' />
        <nav className='tabs'>
          <a className='tabs__link tabs__link_active' href='#Popular'>
            Популярные
          </a>
          <a className='tabs__link' href='#Copyright'>
            Авторские
          </a>
          <a className='tabs__link' href='#Hiking'>
            Походы
          </a>
          <a className='tabs__link' href='#Alloys'>
            Сплавы
          </a>
          <a className='tabs__link' href='#CyclingTrips'>
            Велопрогулки
          </a>
        </nav>

        <div className='choose-tour__container'>
          <div className='card-tur'>
            <div className='card-tur__img card-tur__img_bgi-1 bgp-1'></div>
            <div className='card-tur__content'>
              <h3 className='card-tur__title'>Путешествие в горы</h3>
              <div className='card-tur__link'>
                <a className='card-tur__link-item' href='#MoreDetailed'>
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className='card-tur'>
            <div className='card-tur__img card-tur__img_bgi-2 bgp-1'></div>
            <div className='card-tur__content'>
              <h3 className='card-tur__title'>Путешествие в горы</h3>
              <div className='card-tur__link'>
                <a className='card-tur__link-item' href='#MoreDetailed'>
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className='card-tur'>
            <div className='card-tur__img card-tur__img_bgi-3 bgp-1'></div>
            <div className='card-tur__content'>
              <h3 className='card-tur__title'>Путешествие в горы</h3>
              <div className='card-tur__link'>
                <a className='card-tur__link-item' href='#MoreDetailed'>
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className='card-tur'>
            <div className='card-tur__img card-tur__img_bgi-4 bgp-1'></div>
            <div className='card-tur__content'>
              <h3 className='card-tur__title'>Путешествие в горы</h3>
              <div className='card-tur__link'>
                <a className='card-tur__link-item' href='#MoreDetailed'>
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className='card-tur'>
            <div className='card-tur__img card-tur__img_bgi-5 bgp-1'></div>
            <div className='card-tur__content'>
              <h3 className='card-tur__title'>Путешествие в горы</h3>
              <div className='card-tur__link'>
                <a className='card-tur__link-item' href='#MoreDetailed'>
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className='card-tur'>
            <div className='card-tur__img card-tur__img_bgi-6 bgp-1'></div>
            <div className='card-tur__content'>
              <h3 className='card-tur__title'>Путешествие в горы</h3>
              <div className='card-tur__link'>
                <a className='card-tur__link-item' href='#MoreDetailed'>
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='collect-tour'>
        <Title title='Собери свой тур' uniqueName='collect-tour' />
        <p className='section-subtitle'>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>

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

      <section className='reviews'>
        <Title title='Отзывы наших путешественников' uniqueName='reviews' />
        <p className='section-subtitle'>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>

        <div className='reviews__container'>
          <div className='card-reviews'>
            <div className='card-reviews__wrapper-text'>
              <p className='card-reviews__text'>
                Идейные соображения высшего порядка, а также рамки и место
                обучения кадров обеспечивает широкому кругу (специалистов)
                участие в формировании новых предложений. Идейные соображения
                высшего порядка, а также начало повседневной работы по
                формированию позиции позволяет оценить значение модели развития.
              </p>
            </div>
            <div className='card-reviews__about-author'>
              <div className='card-reviews__author-data'>
                <span className='card-reviews__author-name'>Мария</span>
                <span className='card-reviews__author-tour-name'>
                  Тур: Вдали от дома{' '}
                </span>
              </div>
              <div className='card-reviews__author-photo'>
                <img src='./images/reviewPhoto1.png' alt='photo' />
              </div>
            </div>
          </div>
          <div className='card-reviews'>
            <div className='card-reviews__wrapper-text'>
              <p className='card-reviews__text'>
                Равным образом постоянный количественный рост и сфера нашей
                активности играет важную роль в формировании системы обучения
                кадров, соответствует насущным потребностям.
              </p>
              <p className='card-reviews__text'>
                Значимость этих проблем настолько очевидна, что дальнейшее
                развитие различных форм деятельности обеспечивает широкому кругу
                (специалистов) участие в формировании новых предложений.
                Повседневная практика показывает, что реализация намеченных
                плановых заданий в значительной степени обуславливает создание
                модели развития.
              </p>
            </div>
            <div className='card-reviews__about-author'>
              <div className='card-reviews__author-data'>
                <span className='card-reviews__author-name'>Павел</span>
                <span className='card-reviews__author-tour-name'>
                  Тур: Путешествие в горы
                </span>
              </div>
              <div className='card-reviews__author-photo'>
                <img src='./images/reviewPhoto2.png' alt='photo' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='travel-photos'>
        <Title title='Фотографии путешествий' uniqueName='travel-photos' />
        <p className='section-subtitle'>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>

        <div className='travel-photos__wrapper'>
          <Image
            src={'/images/travelPhotos/travelPhoto1.png'}
            width={433}
            height={301}
            className='travel-photos__img1'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto2.png'}
            width={433}
            height={301}
            className='travel-photos__img1'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto3.png'}
            width={433}
            height={301}
            className='travel-photos__img1'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto4.png'}
            width={433}
            height={301}
            className='travel-photos__img1'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto5.png'}
            width={433}
            height={301}
            className='travel-photos__img2'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto6.png'}
            width={433}
            height={301}
            className='travel-photos__img2'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto7.png'}
            width={433}
            height={301}
            className='travel-photos__img2'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto8.png'}
            width={433}
            height={301}
            className='travel-photos__img2'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto9.png'}
            width={433}
            height={301}
            className='travel-photos__img2'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto10.png'}
            width={433}
            height={301}
            className='travel-photos__img3'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto11.png'}
            width={433}
            height={301}
            className='travel-photos__img3'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto12.png'}
            width={433}
            height={301}
            className='travel-photos__img3'
            alt='images'
            priority
          />
          <Image
            src={'/images/travelPhotos/travelPhoto13.png'}
            width={433}
            height={301}
            className='travel-photos__img3'
            alt='images'
            priority
          />
        </div>
      </section>

      <section className='stories'>
        <Title title='Истории путешествий' uniqueName='stories' />
        <p className='section-subtitle'>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>

        <div className='stories__container'>
          <div className='card-stories'>
            <div className='card-stories__img card-stories__bgi-1 bgp-1'></div>
            <div className='card-stories__content'>
              <h3 className='card-stories__title'>Автостопом в Стамбул</h3>
              <div className='card-stories__wrapper-text'>
                <p className='card-stories__description'>
                  Идейные соображения высшего порядка, а также рамки и место
                  обучения кадров обеспечивает широкому кругу (специалистов)
                  участие в формировании новых предложений:
                </p>
                <ul className='card-stories__list-advantages'>
                  <li className='card-stories__list-advantages-item'>
                    вкусная еда
                  </li>
                  <li className='card-stories__list-advantages-item'>
                    дешевый транспорт
                  </li>
                  <li className='card-stories__list-advantages-item'>
                    красивый город.
                  </li>
                </ul>
              </div>
              <div className='card-stories__link-group'>
                <div className='card-stories__button-link'>
                  <a
                    className='card-stories__button-link-item'
                    href='#MoreDetailed'
                  >
                    Подробнее
                  </a>
                </div>
                <div className='card-stories__social-network-link'>
                  <a
                    className='card-stories__social-network-link-item'
                    href='#instagram'
                  >
                    instagram
                  </a>
                  <a
                    className='card-stories__social-network-link-item'
                    href='#facebook'
                  >
                    facebook
                  </a>
                  <a
                    className='card-stories__social-network-link-item'
                    href='#YouTube'
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='card-stories'>
            <div className='card-stories__img card-stories__bgi-2 bgp-1'></div>
            <div className='card-stories__content'>
              <h3 className='card-stories__title'>Автостопом в Стамбул</h3>
              <div className='card-stories__wrapper-text pb-1'>
                <p className='card-stories__description'>
                  Идейные соображения высшего порядка, а также рамки и место
                  обучения кадров обеспечивает широкому кругу (специалистов)
                  участие в формировании новых предложений
                </p>
              </div>
              <div className='card-stories__link-group'>
                <div className='card-stories__button-link'>
                  <a
                    className='card-stories__button-link-item'
                    href='#MoreDetailed'
                  >
                    Подробнее
                  </a>
                </div>
                <div className='card-stories__social-network-link'>
                  <a
                    className='card-stories__social-network-link-item'
                    href='#instagram'
                  >
                    instagram
                  </a>
                  <a
                    className='card-stories__social-network-link-item'
                    href='#ВКонтакте'
                  >
                    ВКонтакте
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='card-stories'>
            <div className='card-stories__img card-stories__bgi-3 bgp-1'></div>
            <div className='card-stories__content'>
              <h3 className='card-stories__title'>Автостопом в Стамбул</h3>
              <div className='card-stories__wrapper-text pb-1'>
                <p className='card-stories__description'>
                  Идейные соображения высшего порядка, а также рамки и место
                  обучения кадров обеспечивает широкому кругу (специалистов)
                  участие в формировании новых предложений
                </p>
              </div>
              <div className='card-stories__link-group'>
                <div className='card-stories__button-link'>
                  <a
                    className='card-stories__button-link-item'
                    href='#MoreDetailed'
                  >
                    Подробнее
                  </a>
                </div>
                <div className='card-stories__social-network-link'>
                  <a
                    className='card-stories__social-network-link-item'
                    href='#instagram'
                  >
                    instagram
                  </a>
                  <a
                    className='card-stories__social-network-link-item'
                    href='#facebook'
                  >
                    facebook
                  </a>
                  <a
                    className='card-stories__social-network-link-item'
                    href='#VKontakte'
                  >
                    ВКонтакте
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
