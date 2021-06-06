import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CurrentContext } from '../contexts/CurrentContext';

import QuestionCard from './QuestionCard';

function Questions({ onQuestionsInit, questionsData }) {
  // перемотка в начало страницы
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // загрузка данных
  React.useEffect(() => {
    onQuestionsInit();
  }, []);

  const context = React.useContext(CurrentContext);

  return (
    <div className="main">
      <section className="lead page__section">
        <h1 className="main-title">Ответы на вопросы</h1>
        <div className="tags tags_content_long-list">
          <ul className="tags__list tags__list_type_long">
            <li className="tags__list-item">
              <button className="button tags__button tags__button_active" type="button">
                Все
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Первая встреча
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Вопросы детей
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Воспитатели / опекуны
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Сомнения
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Сложности
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Подарки
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Влияние на ребенка
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Времяпровождение
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Ответственность
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Завершение отношений
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Первая встреча
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Вопросы детей
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Первая встреча
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Вопросы детей
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Воспитатели / опекуны
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Сомнения
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Сложности
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="questions page__section">
        {questionsData.map((item) => (
          <QuestionCard key={item.id} id={item.id} card={item} />
        ))}
      </section>

      {context.isLoggedIn && (
        <section className="add-question page__section">
          <h2 className="section-title add-question__title">
            Если вы не нашли ответ на свой вопрос — напишите нам, и мы включим его в список
          </h2>
          <form className="question-form" name="add-question">
            <fieldset className="question-form__add-question">
              <input
                className="question-form__input"
                type="text"
                name="question"
                placeholder="Введите вопрос"
                required
              />
              <button
                className="button button_theme_light question-form__button"
                type="submit"
                name="submit"
                disabled
              >
                Отправить
              </button>
            </fieldset>
          </form>
        </section>
      )}
    </div>
  );
}

Questions.defaultProps = {
  onQuestionsInit: undefined,
  questionsData: [],
};

Questions.propTypes = {
  onQuestionsInit: PropTypes.func,
  questionsData: PropTypes.instanceOf(Array),
};

export default Questions;
