import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CurrentContext } from '../contexts/CurrentContext';

import whereToGoImg from '../images/where-to-go/img-xl.jpg';

function WhereToGo({ onWhereToGoInit, whereToGoCardsData, whereToGoTagsData }) {
  // перемотка в начало страницы
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    onWhereToGoInit();
  }, []);

  const context = React.useContext(CurrentContext);

  const [tagChecked, setTagChecked] = useState('Все');
  const [whereToGoCardsFitered, setWhereToGoCardsFitered] = useState([]);

  React.useEffect(() => {
    console.log(whereToGoCardsFitered);
  }, [whereToGoCardsFitered]);

  React.useEffect(() => {
    setWhereToGoCardsFitered(whereToGoCardsData);
    setTagChecked('Все');
  }, [whereToGoCardsData]);

  function handleTagClick(e) {
    setTagChecked(e.target.id);
    if (e.target.id === 'Все') {
      setWhereToGoCardsFitered(whereToGoCardsData);
    } else {
      const newArray = whereToGoCardsData.filter((item) =>
        item.tag.toLowerCase().includes(e.target.id.toLowerCase()),
      );
      setWhereToGoCardsFitered(newArray);
    }
  }

  return (
    <div className="main">
      <section className="lead page__section">
        <h1 className="main-title">Куда пойти</h1>
        <div className="tags">
          <ul className="tags__list">
            <li className="tags__list-item">
              <button
                className={`button tags__button ${tagChecked === 'Все' && 'tags__button_active'}`}
                type="button"
                onClick={handleTagClick}
                id="Все"
              >
                Все
              </button>
            </li>
            {whereToGoTagsData.map((item) => (
              <li className="tags__list-item" key={item}>
                <button
                  className={`button tags__button ${item === tagChecked && 'tags__button_active'}`}
                  type="button"
                  onClick={handleTagClick}
                  id={item}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {context.isLoggedIn && (
          <div className="card place-card">
            <h2 className="section-title place-card__text">
              Если вы были в интересном месте и хотите порекомендовать его другим наставникам –
              <button type="button" className="place-card__span-accent">
                заполните форму
              </button>
              , и мы добавим вашу рекомендацию.
            </h2>
          </div>
        )}
      </section>

      <section className="main-card page__section">
        <article className="card-container card-container_type_main-article">
          <div className="card card_type_main card_color_yellow">
            <p className="rubric card__rubric">Выбор наставника</p>
            <div className="card__title-wrap">
              <Link to="/place" className="card__link-wrap">
                <h2 className="section-title card__title">Сплав на байдарках в 2 строки</h2>
              </Link>
              <p className="caption card__title-caption">усадьба Архангельское в две строки</p>
            </div>
            <Link to="/place" className="card__link-wrap card__link-wrap_content_article-img">
              <img src={whereToGoImg} alt="Сплав на байдарках" className="card__img" />
            </Link>
            <Link to="/place" className="link card__link">
              перейти на сайт
            </Link>
          </div>
          <div className="card card_content_annotation card_type_main">
            <div className="card__content">
              <p className="caption card__annotation-caption">Девочка, 10 лет. Активный</p>
              <div className="card__annotation card__annotation_position_main-card">
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить,
                  и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.
                  Вы будете не понимать друг друга, потом понимать чуть лучше и, Аннотация статьи в
                  несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово,
                  а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать
                  друг друга, потом понимать чуть лучше и,
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить,
                  и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.
                  Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="cards-grid page__section">
        <article className="card-container card-container_type_article">
          <div className="card card_color_green">
            <p className="rubric card__rubric">Выбор наставника</p>
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Название места несколько слов</h2>
              <p className="caption card__title-caption">Адрес места в одну строку</p>
            </div>
            <Link to="/place" className="link card__link">
              перейти на сайт
            </Link>
          </div>

          <div className="card card_content_annotation">
            <div className="card__content">
              <p className="caption card__annotation-caption">Девочка, 10 лет. Познавательный</p>
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить,
                  и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.
                  Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов,
                  научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно
                  слово, а задавать бесконечное количество вопросов, жизнь меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_yellow">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Название места</h2>
              <p className="caption card__title-caption">
                Длинный адрес места в несколько строк, длинный адрес места.
              </p>
            </div>
            <Link to="/place" className="link card__link">
              перейти на сайт
            </Link>
          </div>

          <div className="card card_content_annotation">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и,
                  в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился
                  говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь
                  меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card-container card-container_type_article">
          <div className="card card_color_pink">
            <p className="rubric card__rubric">Выбор наставника</p>
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Фотосессия на природе</h2>
              <p className="caption card__title-caption">Адрес места в одну строку</p>
            </div>
          </div>

          <div className="card card_content_annotation">
            <div className="card__content">
              <p className="caption card__annotation-caption">Девочка, 10 лет. Познавательный</p>
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Аннотация книги в несколько абзацев. В тот момент, как ребёнок научился говорить,
                  и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.
                  Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов,
                  научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно
                  слово, а задавать бесконечное количество вопросов, жизнь меняется.
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот
                  момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное
                  количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом
                  понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в
                  несколько абзацев.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

WhereToGo.defaultProps = {
  onWhereToGoInit: undefined,
  whereToGoCardsData: [],
  whereToGoTagsData: [],
};

WhereToGo.propTypes = {
  onWhereToGoInit: PropTypes.func,
  whereToGoCardsData: PropTypes.instanceOf(Array),
  whereToGoTagsData: PropTypes.instanceOf(Array),
};

export default WhereToGo;
