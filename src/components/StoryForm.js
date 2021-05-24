import React from 'react';
import { useForm } from 'react-hook-form';
import ImageUploader from './ImageUploader';

function StoryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: 'onChange' });

  function onSubmit(data) {
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
            <label htmlFor="good-rate" className="personal-area__radio-label">
              <input
                type="radio"
                name="rate"
                id="good-rate"
                className="personal-area__rate personal-area__rate_type_good"
              />
              <img
                className="personal-area__rate-icon"
                alt="good rate"
                src="./images/personal-area/good.svg"
              />
            </label>
            <label htmlFor="neutral-rate" className="personal-area__radio-label">
              <input
                type="radio"
                name="rate"
                id="neutral-rate"
                className="personal-area__rate personal-area__rate_type_neutral"
              />
              <img
                className="personal-area__rate-icon"
                alt="neutral rate"
                src="./images/personal-area/neutral.svg"
              />
            </label>
            <label htmlFor="neutral-rate" className="personal-area__radio-label">
              <input
                type="radio"
                name="rate"
                id="bad-rate"
                className="personal-area__rate personal-area__rate_type_bad"
              />
              <img
                className="personal-area__rate-icon"
                alt="neutral rate"
                src="./images/personal-area/bad.svg"
              />
            </label>
          </div>
          {/* Рефакторинг иконок в радиокнопки в процессе */}
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
