import React from 'react';
import PropTypes from 'prop-types';

function PostedStory({ onDeleteClick, isEditClicked, setEditClicked, mainText, place }) {
  function handleEdition() {
    setEditClicked(!isEditClicked);
  }
  return (
    <form className="card-container card-container_type_personal-area">
      <div className="card card_content_media">
        <img src="./images/personal-area/lk.png" alt="Катя" className="personal-area__photo" />
      </div>
      <div className="card personal-area__card personal-area__date-container">
        <div className="personal-area__text-wrap">
          <h2 className="section-title personal-area__card-title">{place}</h2>
          <p className="paragraph">{mainText}</p>
        </div>
        <div className="personal-area__card-date">
          <p className="personal-area__card-weekday">декабрь, 2020</p>
          <p className="personal-area__card-day">05</p>
        </div>
        <div className="personal-area__actions">
          <div className="personal-area__rating">
            <div className="personal-area__radio-label">
              <input
                type="radio"
                name="rate"
                id="good-rate"
                className="personal-area__rate personal-area__rate_type_good"
                defaultChecked
              />
              <img
                className="personal-area__rate-icon"
                alt="good rate"
                src="./images/personal-area/good.svg"
              />
              {/* eslint-disable-next-line */}
              <label
                htmlFor="good-rate"
                className="personal-area__radio-phrase personal-area__radio-phrase_type_good personal-area__radio-phrase_type_good_posted"
              >
                Было классно!
              </label>
            </div>
          </div>
          <div className="personal-area__action-elements">
            <p className="caption personal-area__opened-info">Открыто Александре К.</p>
            <button
              className="caption personal-area__button
        personal-area__button_action_edit-card"
              type="button"
              onClick={handleEdition}
            >
              Редактировать
            </button>
            <button
              onClick={onDeleteClick}
              className="caption personal-area__button
        personal-area__button_action_delete-card"
              type="button"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default PostedStory;

PostedStory.defaultProps = {
  onDeleteClick: undefined,
  isEditClicked: undefined,
  setEditClicked: undefined,
  mainText: undefined,
  place: undefined,
};

PostedStory.propTypes = {
  onDeleteClick: PropTypes.func,
  isEditClicked: PropTypes.bool,
  setEditClicked: PropTypes.func,
  mainText: PropTypes.string,
  place: PropTypes.string,
};
