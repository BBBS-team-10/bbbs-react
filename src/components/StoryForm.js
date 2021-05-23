import React from 'react';
import { useForm } from 'react-hook-form';
import ImageUploader from './ImageUploader';

function StoryForm() {
  const [isGoodRated, setGoodRated] = React.useState(false);
  const [isNeutralRated, setNeutralRated] = React.useState(false);
  const [isBadRated, setBadRated] = React.useState(false);
  const [phrase, setPhrase] = React.useState('Оцените проведенное время');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: 'onChange' });

  function onSubmit(data) {
    console.log(data);
  }

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

  const badRatingLabelClassName = `caption personal-area__rating-label ${
    isBadRated ? 'personal-area__rating-label_type_bad' : ''
  }`;

  const goodRatingLabelClassName = `caption personal-area__rating-label ${
    isGoodRated ? 'personal-area__rating-label_type_good' : ''
  }`;

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
            placeholder="Место встречи"
            className="personal-area__form-input"
          />
          <input
            // eslint-disable-next-line
            {...register('date', { required: true })}
            type="date"
            placeholder="Дата&emsp;"
            className="personal-area__form-input"
          />
          <input
            type="text"
            // eslint-disable-next-line
            {...register('story', { required: true, minLength: 2 })}
            className="personal-area__form-input personal-area__form-input_type_textarea"
            placeholder="Опишите вашу встречу, какие чувства вы испытывали,
            что понравилось / не понравилось"
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
            {isBadRated && <p className={badRatingLabelClassName}>{phrase}</p>}
            {isGoodRated && <p className={goodRatingLabelClassName}>{phrase}</p>}
            {isNeutralRated && <p className="caption personal-area__rating-label">{phrase}</p>}
            {!isNeutralRated && !isGoodRated && !isBadRated && (
              <p className="caption personal-area__rating-label">{phrase}</p>
            )}
          </div>
          <div className="personal-area__buttons">
            <button
              type="button"
              className="button personal-area__delete"
              onClick={() => {
                reset({
                  place: '',
                  date: '',
                  story: '',
                });
              }}
            >
              Удалить
            </button>
            <button disabled={!isValid} className="button button__add-story" type="submit">
              Добавить
            </button>
          </div>
        </form>
      </div>
    </form>
  );
}
export default StoryForm;
