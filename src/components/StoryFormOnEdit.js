import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import ImageUploader from './ImageUploader';

function StoryFormOnEdit({ mainText, setMainText, place, setPlace }) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: 'onChange' });
  const [goodRateChecked, setGoodRateChecked] = React.useState(false);
  const [neutralRateChecked, setNeutralRateChecked] = React.useState(false);
  const [badRateChecked, setBadRateChecked] = React.useState(false);
  function onChangeGood() {
    setNeutralRateChecked(false);
    setBadRateChecked(false);
    setGoodRateChecked(true);
  }

  function onChangeNeutral() {
    setGoodRateChecked(false);
    setBadRateChecked(false);
    setNeutralRateChecked(true);
  }

  function onChangeBad() {
    setGoodRateChecked(false);
    setNeutralRateChecked(false);
    setBadRateChecked(true);
  }

  function onSubmit(data) {
    setMainText(mainText);
    setPlace(place);
    console.log(data);
  }

  return (
    <form className="card-container card-container_type_personal-area">
      <div className="card personal-area__card personal-area__card_type_add-photo">
        <ImageUploader />
      </div>
      <div className="card personal-area__card personal-area__card_type_content">
        <form
          className="personal-area__form"
          onSubmit={handleSubmit(onSubmit)}
          name="add-story-form"
        >
          <input
            // eslint-disable-next-line
            {...register('place', { required: true, minLength: 2, maxLength: 30 })}
            type="text"
            value={place}
            onChange={setPlace}
            className="personal-area__form-input"
          />
          <input
            // eslint-disable-next-line
            {...register('date', { required: true })}
            type="date"
            placeholder="Дата&emsp;"
            className="personal-area__form-input"
          />
          <textarea
            // type="text"
            // eslint-disable-next-line
            {...register('story', { required: true, minLength: 2 })}
            className="personal-area__form-input personal-area__form-input_type_textarea"
            value={mainText}
            onChange={setMainText}
          />
          <div className="personal-area__rating">
            <div className="personal-area__radio-label">
              <input
                type="radio"
                // eslint-disable-next-line
                {...register('rate', { required: true })}
                name="rate"
                // id="good-rate"
                className="personal-area__rate personal-area__rate_type_good"
                onClick={onChangeGood}
              />
              <img
                className="personal-area__rate-icon"
                alt="good rate"
                src="./images/personal-area/good.svg"
              />
              {/* eslint-disable-next-line */}
              <label
                htmlFor="good-rate"
                className="personal-area__radio-phrase personal-area__radio-phrase_type_good"
              >
                {goodRateChecked && 'Было классно!'}
                {!goodRateChecked &&
                  !badRateChecked &&
                  !neutralRateChecked &&
                  'Оцените проведенное время'}
              </label>
            </div>
            <div className="personal-area__radio-label">
              <input
                type="radio"
                // eslint-disable-next-line
                {...register('rate', { required: true })}
                name="rate"
                // id="neutral-rate"
                onClick={onChangeNeutral}
                className="personal-area__rate personal-area__rate_type_neutral"
              />
              <img
                className="personal-area__rate-icon"
                alt="neutral rate"
                src="./images/personal-area/neutral.svg"
              />
              {/* eslint-disable-next-line */}
              <label
                htmlFor="neutral-rate"
                className="personal-area__radio-phrase personal-area__radio-phrase_type_neutral"
              >
                {neutralRateChecked ? 'Нормально' : ''}
              </label>
            </div>
            <div className="personal-area__radio-label">
              <input
                type="radio"
                // eslint-disable-next-line
                {...register('rate', { required: true })}
                name="rate"
                // id="bad-rate"
                onClick={onChangeBad}
                className="personal-area__rate personal-area__rate_type_bad"
              />
              <img
                className="personal-area__rate-icon"
                alt="neutral rate"
                src="./images/personal-area/bad.svg"
              />
              {/* eslint-disable-next-line */}
              <label
                htmlFor="bad-rate"
                className="personal-area__radio-phrase personal-area__radio-phrase_type_bad"
              >
                {badRateChecked ? 'Что-то пошло не так' : ''}
              </label>
            </div>
          </div>
          <div className="personal-area__buttons">
            <button disabled={!isValid} className="button button__add-story" type="submit">
              Редактировать
            </button>
          </div>
        </form>
      </div>
    </form>
  );
}
export default StoryFormOnEdit;

StoryFormOnEdit.defaultProps = {
  mainText: undefined,
  place: undefined,
  setMainText: undefined,
  setPlace: undefined,
};

StoryFormOnEdit.propTypes = {
  mainText: PropTypes.string,
  place: PropTypes.string,
  setMainText: PropTypes.func,
  setPlace: PropTypes.func,
};
