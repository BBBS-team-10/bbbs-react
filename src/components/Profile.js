import React from 'react';
import ImageUploader from './ImageUploader';

function Profile() {
  const [isGoodRated, setGoodRated] = React.useState(false);
  const [isNeutralRated, setNeutralRated] = React.useState(false);
  const [isBadRated, setBadRated] = React.useState(false);
  const [phrase, setPhrase] = React.useState('Оцените проведенное время');

  function changeGoodRate() {
    if (!isBadRated && !isGoodRated && !isNeutralRated) {
      setGoodRated(true);
      setPhrase('Было классно!');
    } else if (!isBadRated && !isNeutralRated) {
      setGoodRated(false);
      setPhrase('Оцените проведенное время');
    } else {
      setGoodRated(false);
    }
  }

  function changeBadRate() {
    if (!isBadRated && !isGoodRated && !isNeutralRated) {
      setBadRated(true);
      setPhrase('Что-пошло не так');
    } else if (!isGoodRated && !isNeutralRated) {
      setBadRated(false);
      setPhrase('Оцените проведенное время');
    } else {
      setBadRated(false);
    }
  }

  function changeNeutralRate() {
    if (!isBadRated && !isGoodRated && !isNeutralRated) {
      setNeutralRated(true);
      setPhrase('Нормально');
    } else if (!isBadRated && !isGoodRated) {
      setNeutralRated(false);
      setPhrase('Оцените проведенное время');
    } else {
      setNeutralRated(false);
    }
  }

  const goodRateButtonClassName = `personal-area__rate ${
    isGoodRated ? 'personal-area__rate_type_active-good' : 'personal-area__rate_type_good'
  }`;
  const neutralRateButtonClassName = `personal-area__rate ${
    isNeutralRated ? 'personal-area__rate_type_active-neutral' : 'personal-area__rate_type_neutral'
  }`;
  const badRateButtonClassName = `personal-area__rate ${
    isBadRated ? 'personal-area__rate_type_active-bad' : 'personal-area__rate_type_bad'
  }`;

  return (
    <section className="personal-area page__section">
      <div className="personal-area__user-info">
        <a
          href="https://github.com/"
          className="paragraph personal-area__user-link personal-area__user-link_type_city"
        >
          Изменить город
        </a>
        <a
          href="https://github.com/"
          className="paragraph personal-area__user-link personal-area__user-link_type_exit"
        >
          Выйти
        </a>
      </div>
      <div className="personal-area__sign-up">
        <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
          У вас нет записи на мероприятия
        </h2>
      </div>
      <div className="personal-area__story">
        <h2 className="section-title personal-area__title">
          Составьте историю вашей дружбы с младшим. Эта страница доступна только вам.
        </h2>
        <article className="card-container card-container_type_personal-area">
          <div className="card personal-area__card personal-area__card_type_add-photo">
            {/* <button */}
            {/*  className="personal-area__add-photo-button" */}
            {/*  type="button" */}
            {/*  aria-label="add photo" */}
            {/* / > */}
            <ImageUploader />
            <p className="caption personal-area__bottom-caption">Загрузить фото</p>
          </div>
          <div className="card personal-area__card personal-area__card_type_content">
            <form action="" name="add-story-form" className="personal-area__form">
              <input
                type="text"
                name="place"
                placeholder="Место встречи"
                required
                className="personal-area__form-input"
              />
              <input
                type="date"
                name="date"
                placeholder="Дата&emsp;"
                required
                className="personal-area__form-input"
                onChange="this.className=(this.value!=''?'has-value':'')"
              />
              <textarea
                type="text"
                name="story"
                className="personal-area__form-input personal-area__form-input_type_textarea"
                placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
                required
              />
              <div className="personal-area__rating">
                <button
                  className={goodRateButtonClassName}
                  onClick={changeGoodRate}
                  type="button"
                  aria-label="good rate"
                />

                <button
                  className={neutralRateButtonClassName}
                  onClick={changeNeutralRate}
                  type="button"
                  aria-label="neutral rate"
                />

                <button
                  className={badRateButtonClassName}
                  onClick={changeBadRate}
                  type="button"
                  aria-label="bad rate"
                />

                <p className="caption personal-area__rating-label">{phrase}</p>
              </div>
              <div className="personal-area__buttons">
                <button className="button personal-area__delete" type="submit">
                  Удалить
                </button>
                <button className="button" type="submit" disabled>
                  Добавить
                </button>
              </div>
            </form>
          </div>
        </article>
        <article className="card-container card-container_type_personal-area">
          <div className="card card_content_media">
            <img src="./images/personal-area/lk.png" alt="Катя" className="personal-area__photo" />
          </div>
          <div className="card personal-area__card personal-area__date-container">
            <div className="personal-area__text-wrap">
              <h2 className="section-title personal-area__card-title">Парк Горького</h2>
              <p className="paragraph">
                Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства
                вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное
                описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что
                понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите
                вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание
                в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу,
                какие чувства вы испытывали, что понравилось не понравилось. чувства вы испытывали,
                что понравилось не понравилось.
              </p>
            </div>
            <div className="personal-area__card-date">
              <p className="personal-area__card-weekday">декабрь, 2020</p>
              <p className="personal-area__card-day">05</p>
            </div>
            <div className="personal-area__actions">
              <div className="personal-area__rating">
                <button
                  className="personal-area__rate personal-area__rate_type_active-good"
                  type="button"
                  aria-label="good rate"
                />
                <p className="caption personal-area__rating-label personal-area__rating-label_type_good">
                  Было классно
                </p>
              </div>

              <div className="personal-area__action-elements">
                <p className="caption personal-area__opened-info">Открыто Александре К.</p>
                <button
                  className="caption personal-area__button personal-area__button_action_edit-card"
                  type="button"
                >
                  Редактировать
                </button>
                <button
                  className="caption personal-area__button personal-area__button_action_delete-card"
                  type="button"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
export default Profile;
