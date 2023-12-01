import Image from 'next/image';
// import styles from './page.module.css';

export default function Home() {
  return (
    <>
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
          <h2 className='section-title' id='choose-tour'>
            Выбери свой тур
          </h2>
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
          <h2 className='section-title' id='collect-tour'>
            Собери свой тур
          </h2>
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
          <h2 className='section-title' id='reviews'>
            Отзывы наших путешественников
          </h2>
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
                  формированию позиции позволяет оценить значение модели
                  развития.
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
                  развитие различных форм деятельности обеспечивает широкому
                  кругу (специалистов) участие в формировании новых предложений.
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
          <h2 className='section-title'>Фотографии путешествий</h2>
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
          <h2 className='section-title' id='stories'>
            Истории путешествий
          </h2>
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
      <footer className='footers bgc-1'>
        <div className='footers-card'>
          <div className='footers-card__img bgp-1'></div>
          <div className='footers-card__content'>
            <h3 className='footers-card__title'>
              Пора в путешествие вместе с нами!
            </h3>
            <p className='footers-card__text'>
              Напиши на почту и узнай подробности на
              <a
                className='footers-card__email'
                href='mailto:yourtour@gmail.com'
              >
                yourtour@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className='footers-social-network'>
          <div className='footers-social-network__wrapper'>
            <div className='footers-social-network__title'>
              <span>Наши социальные сети</span>
            </div>
            <div className='footers-social-network__name'>
              <div className='footers-social-network__inner-wrap'>
                <svg
                  className='footers-social-network__icon'
                  width='26'
                  height='26'
                  viewBox='0 0 26 26'
                >
                  <path
                    d='M14.6672 14C14.6672 12.7114 15.7116 11.6665 17.0003 11.6665C18.2889 11.6665 19.3339 12.7114 19.3339 14C19.3339 15.2886 18.2889 16.3335 17.0003 16.3335C15.7116 16.3335 14.6672 15.2886 14.6672 14ZM13.4057 14C13.4057 15.9852 15.015 17.5944 17.0003 17.5944C18.9856 17.5944 20.5949 15.9852 20.5949 14C20.5949 12.0148 18.9856 10.4056 17.0003 10.4056C15.015 10.4056 13.4057 12.0148 13.4057 14ZM19.8971 10.2631C19.8971 10.7267 20.2731 11.1033 20.7373 11.1033C21.201 11.1033 21.5776 10.7267 21.5776 10.2631C21.5776 9.79943 21.2016 9.42342 20.7373 9.42342C20.2731 9.42342 19.8971 9.79943 19.8971 10.2631ZM14.1719 19.6978C13.4894 19.6667 13.1185 19.5531 12.8719 19.4569C12.5451 19.3297 12.3121 19.1782 12.0667 18.9334C11.8219 18.6885 11.6698 18.4556 11.5431 18.1288C11.447 17.8822 11.3333 17.5113 11.3022 16.8288C11.2683 16.091 11.2615 15.8693 11.2615 14C11.2615 12.1307 11.2689 11.9096 11.3022 11.1712C11.3333 10.4887 11.4476 10.1183 11.5431 9.87124C11.6703 9.54443 11.8219 9.31147 12.0667 9.06607C12.3116 8.82124 12.5445 8.66914 12.8719 8.54249C13.1185 8.44636 13.4894 8.33271 14.1719 8.30162C14.9098 8.26769 15.1315 8.2609 17.0003 8.2609C18.8697 8.2609 19.0908 8.26826 19.8292 8.30162C20.5117 8.33271 20.8821 8.44693 21.1292 8.54249C21.456 8.66914 21.689 8.82124 21.9344 9.06607C22.1792 9.3109 22.3308 9.54443 22.458 9.87124C22.5541 10.1178 22.6678 10.4887 22.6989 11.1712C22.7328 11.9096 22.7396 12.1307 22.7396 14C22.7396 15.8687 22.7328 16.0904 22.6989 16.8288C22.6678 17.5113 22.5536 17.8822 22.458 18.1288C22.3308 18.4556 22.1792 18.6885 21.9344 18.9334C21.6896 19.1782 21.456 19.3297 21.1292 19.4569C20.8827 19.5531 20.5117 19.6667 19.8292 19.6978C19.0913 19.7317 18.8697 19.7385 17.0003 19.7385C15.1315 19.7385 14.9098 19.7317 14.1719 19.6978ZM14.1142 7.04241C13.369 7.07633 12.8601 7.19451 12.415 7.36753C11.9548 7.5462 11.5646 7.78595 11.175 8.17496C10.786 8.56397 10.5462 8.95412 10.3675 9.41494C10.1945 9.85994 10.0763 10.3688 10.0424 11.1141C10.0079 11.8604 10 12.099 10 14C10 15.901 10.0079 16.1396 10.0424 16.8859C10.0763 17.6312 10.1945 18.1401 10.3675 18.5851C10.5462 19.0453 10.7854 19.436 11.175 19.825C11.564 20.2141 11.9542 20.4532 12.415 20.6325C12.8606 20.8055 13.369 20.9237 14.1142 20.9576C14.8612 20.9915 15.0992 21 17.0003 21C18.9019 21 19.1399 20.9921 19.8863 20.9576C20.6316 20.9237 21.1405 20.8055 21.5855 20.6325C22.0458 20.4532 22.436 20.2141 22.8256 19.825C23.2146 19.436 23.4538 19.0453 23.633 18.5851C23.8061 18.1401 23.9248 17.6312 23.9582 16.8859C23.9921 16.139 24 15.901 24 14C24 12.099 23.9921 11.8604 23.9582 11.1141C23.9242 10.3688 23.8061 9.85994 23.633 9.41494C23.4538 8.95468 23.2146 8.56454 22.8256 8.17496C22.4365 7.78595 22.0458 7.5462 21.5861 7.36753C21.1405 7.19451 20.6316 7.07577 19.8869 7.04241C19.1405 7.00848 18.9019 7 17.0008 7C15.0992 7 14.8612 7.00792 14.1142 7.04241Z'
                    fill='#A6A6A6'
                  />
                </svg>
                <a className='footers-social-network__link' href='#Instagram'>
                  instagram
                </a>
              </div>

              <div className='footers-social-network__inner-wrap'>
                <svg
                  className='footers-social-network__icon'
                  width='26'
                  height='26'
                  viewBox='0 0 26 26'
                >
                  <path
                    d='M20.9881 5H18.2711C16.6587 5 14.8653 5.67811 14.8653 8.01522C14.8732 8.82956 14.8653 9.60945 14.8653 10.4872H13V13.4553H14.923V22H18.4567V13.3989H20.789L21 10.4788H18.3958C18.3958 10.4788 18.4016 9.17988 18.3958 8.80265C18.3958 7.87908 19.3568 7.93197 19.4146 7.93197C19.8719 7.93197 20.7612 7.9333 20.9894 7.93197V5H20.9881Z'
                    fill='#A6A6A6'
                  />
                </svg>
                <a className='footers-social-network__link' href='#Facebook'>
                  facebook
                </a>
              </div>

              <div className='footers-social-network__inner-wrap'>
                <svg
                  className='footers-social-network__icon'
                  width='26'
                  height='26'
                  viewBox='0 0 26 26'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M23.5395 10.8053C23.6802 10.3316 23.5395 10 22.883 10H20.6946C20.1318 10 19.8817 10.3 19.741 10.6316C19.741 10.6316 18.6312 13.3789 17.0524 15.1474C16.5366 15.6684 16.3177 15.8263 16.0363 15.8263C15.8957 15.8263 15.6924 15.6684 15.6924 15.1947V10.8053C15.6924 10.2368 15.5361 10 15.0672 10H11.6282C11.2843 10 11.0655 10.2684 11.0655 10.5053C11.0655 11.0421 11.8471 11.1684 11.9409 12.6526V15.9053C11.9409 16.6158 11.8158 16.7421 11.5344 16.7421C10.7998 16.7421 8.98648 13.9947 7.92353 10.8368C7.70469 10.2526 7.50148 10 6.93874 10H4.75032C4.12505 10 4 10.3 4 10.6316C4 11.2158 4.73469 14.1211 7.45459 17.9579C9.26785 20.5789 11.8158 22 14.1293 22C15.5205 22 15.6924 21.6842 15.6924 21.1474V19.1579C15.6924 18.5263 15.8175 18.4 16.2708 18.4C16.5991 18.4 17.1462 18.5579 18.4436 19.8211C19.9286 21.3211 20.1787 22 21.0072 22H23.1956C23.8209 22 24.1335 21.6842 23.9459 21.0684C23.7427 20.4526 23.0393 19.5526 22.1014 18.4789C21.5856 17.8632 20.8196 17.2158 20.6008 16.8842C20.2725 16.4579 20.3663 16.2684 20.6008 15.9053C20.6008 15.8895 23.2738 12.1 23.5395 10.8053Z'
                    fill='#A6A6A6'
                  />
                </svg>
                <a className='footers-social-network__link' href='#Vkontakte'>
                  vkontakte
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
