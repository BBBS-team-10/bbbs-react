import React from 'react';

function PostedStory() {
  return (
    <article className="card-container card-container_type_personal-area">
      <div className="card card_content_media">
        <img src="./images/personal-area/lk.png" alt="Катя" className="personal-area__photo" />
      </div>
      <div className="card personal-area__card personal-area__date-container">
        <div className="personal-area__text-wrap">
          <h2 className="section-title personal-area__card-title">Парк Горького</h2>
          <p className="paragraph">
            Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы
            испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное
            описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что
            понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите вашу
            встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в
            несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие
            чувства вы испытывали, что понравилось не понравилось. чувства вы испытывали, что
            понравилось не понравилось.
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
              className="caption personal-area__button
        personal-area__button_action_edit-card"
              type="button"
            >
              Редактировать
            </button>
            <button
              className="caption personal-area__button
        personal-area__button_action_delete-card"
              type="button"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
export default PostedStory;
