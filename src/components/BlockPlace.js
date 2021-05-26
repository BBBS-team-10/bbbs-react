import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function BlockPlace({ place }) {
  const stopEvent = (event) => event.stopPropagation();
  return (
    <section className="main-section page__section">
      <NavLink to="/place" className="card__link-wrap">
        <article className="card-container card-container_type_main-article">
          <div className="card card_type_main card_color_yellow">
            <p className="rubric card__rubric">Выбор наставника</p>
            <div className="card__title-wrap">
              <h2 className="section-title card__title">{place.title}</h2>
              <p className="caption card__title-caption">{place.name}</p>
            </div>
            <div className="card__link-wrap card__link-wrap_content_article-img">
              <img src={place.imageUrl} alt={place.title} className="card__img" />
            </div>
            <a href={place.link} className="link card__link" onClick={stopEvent}>
              перейти на сайт
            </a>
          </div>
          <div className="card card_content_annotation card_type_main">
            <div className="card__content">
              <p className="caption card__annotation-caption">{place.info}</p>
              <div className="card__annotation card__annotation_position_main-card">
                <p className="paragraph card__paragraph">{place.description}</p>
              </div>
            </div>
          </div>
        </article>
      </NavLink>
    </section>
  );
}

BlockPlace.propTypes = {
  place: PropTypes.shape({
    chosen: PropTypes.bool,
    id: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    info: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    link: PropTypes.string,
  }),
};

BlockPlace.defaultProps = {
  place: {
    chosen: true,
    id: 31,
    title: 'Сплав на байдарках в две строки',
    name: 'усадьба Архангельское в две строки',
    info: 'Девока, 10 лет. Активный отдых',
    description:
      'Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и,\nАннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    imageUrl: 'https://picsum.photos/1125/394',
    link: 'https://www.moscowzoo.ru/',
  },
};

export default BlockPlace;
