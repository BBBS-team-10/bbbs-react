import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { CurrentContext } from '../contexts/CurrentContext';

function Questions() {
  // перемотка в начало страницы
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const context = React.useContext(CurrentContext);

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
        <article className="question">
          <h2 className="section-title question__title">
            Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?
          </h2>
          <div className="question__wrap">
            <p className="rubric question__rubric">рубрика</p>
            <button
              className="question__show-button"
              type="button"
              aria-label="Показать ответ"
              title="Показать ответ"
            />
          </div>
          <div className="question__answer">
            <p className="paragraph question__paragraph">
              Настоящие дружеские отношения строятся на взаимном интересе, доверии и привязанности.
              Когда наставник для ребенка становится именно другом, а не просто знакомым или
              волонтером, то подопечный начинает быть искренне заинтересован в общении, начинает
              ждать встреч, звонить по телефону. Но тут важно, чтобы наставник оставался именно в
              роли друга, старшего брата или сестры, а не потенциального родителя. Перед включением
              ребенка в программу кураторы обязательно объясняют ребенку, кто такой наставник и
              какую роль он может сыграть в его жизни. Конечно, здесь многое зависит от умения
              самого наставника выстраивать отношения и границы, но, если человек сомневается в
              своих навыках, то в рамках нашей программы проводятся поддерживающие мероприятия,
              которые развивают компетенции наставников и их коммуникативные способности, которые
              помогают в общении с детьми, а также есть всегда возможность обратиться к куратору
              программы.
            </p>
          </div>
        </article>

        <article className="question">
          <h2 className="section-title question__title">
            Возможно ли продлить срок участия в программе, если и я и мой «младший» хотим остаться в
            программе?
          </h2>
          <div className="question__wrap">
            <p className="rubric question__rubric">рубрика</p>
            <button
              className="question__show-button"
              type="button"
              aria-label="Показать ответ"
              title="Показать ответ"
            />
          </div>
          <div className="question__answer">
            <p className="paragraph question__paragraph">
              Настоящие дружеские отношения строятся на взаимном интересе, доверии и привязанности.
              Когда наставник для ребенка становится именно другом, а не просто знакомым или
              волонтером, то подопечный начинает быть искренне заинтересован в общении, начинает
              ждать встреч, звонить по телефону. Но тут важно, чтобы наставник оставался именно в
              роли друга, старшего брата или сестры, а не потенциального родителя.
            </p>
            <p className="paragraph question__paragraph">
              Перед включением ребенка в программу кураторы обязательно объясняют ребенку, кто такой
              наставник и какую роль он может сыграть в его жизни. Конечно, здесь многое зависит от
              умения самого наставника выстраивать отношения и границы, но, если человек сомневается
              в своих навыках, то в рамках нашей программы проводятся поддерживающие мероприятия,
              которые развивают компетенции наставников и их коммуникативные способности, которые
              помогают в общении с детьми, а также есть всегда возможность обратиться к куратору
              программы.
            </p>
          </div>
        </article>

        <article className="question">
          <h2 className="section-title question__title">
            Что делать если Ваш младший решил закрыть пару, т.к. слишком занят с учебой и друзьями?
          </h2>
          <div className="question__wrap">
            <p className="rubric question__rubric">рубрика</p>
            <button
              className="question__show-button"
              type="button"
              aria-label="Показать ответ"
              title="Показать ответ"
            />
          </div>
          <div className="question__answer">
            <p className="paragraph question__paragraph">
              Настоящие дружеские отношения строятся на взаимном интересе, доверии и привязанности.
              Когда наставник для ребенка становится именно другом, а не просто знакомым или
              волонтером, то подопечный начинает быть искренне заинтересован в общении, начинает
              ждать встреч, звонить по телефону. Но тут важно, чтобы наставник оставался именно в
              роли друга, старшего брата или сестры, а не потенциального родителя. Перед включением
              ребенка в программу кураторы обязательно объясняют ребенку, кто такой наставник и
              какую роль он может сыграть в его жизни. Конечно, здесь многое зависит от умения
              самого наставника выстраивать отношения и границы, но, если человек сомневается в
              своих навыках, то в рамках нашей программы проводятся поддерживающие мероприятия,
              которые развивают компетенции наставников и их коммуникативные способности, которые
              помогают в общении с детьми, а также есть всегда возможность обратиться к куратору
              программы.
            </p>
          </div>
        </article>

        <article className="question">
          <h2 className="section-title question__title">
            Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?
          </h2>
          <div className="question__wrap">
            <p className="rubric question__rubric">рубрика</p>
            <button
              className="question__show-button"
              type="button"
              aria-label="Показать ответ"
              title="Показать ответ"
            />
          </div>
          <div className="question__answer">
            <p className="paragraph question__paragraph">
              Настоящие дружеские отношения строятся на взаимном интересе, доверии и привязанности.
              Когда наставник для ребенка становится именно другом, а не просто знакомым или
              волонтером, то подопечный начинает быть искренне заинтересован в общении, начинает
              ждать встреч, звонить по телефону. Но тут важно, чтобы наставник оставался именно в
              роли друга, старшего брата или сестры, а не потенциального родителя. Перед включением
              ребенка в программу кураторы обязательно объясняют ребенку, кто такой наставник и
              какую роль он может сыграть в его жизни. Конечно, здесь многое зависит от умения
              самого наставника выстраивать отношения и границы, но, если человек сомневается в
              своих навыках, то в рамках нашей программы проводятся поддерживающие мероприятия,
              которые развивают компетенции наставников и их коммуникативные способности, которые
              помогают в общении с детьми, а также есть всегда возможность обратиться к куратору
              программы.
            </p>
          </div>
        </article>
      </section>

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
              value=""
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
    </div>
  );
}

Questions.defaultProps = {};

Questions.propTypes = {};

export default Questions;
