import React from 'react';
import PropTypes from 'prop-types';

function BlockMovie({ movie }) {
  function showTags(tags) {
    if (!tags) {
      return <></>;
    }
    return tags.map((tag) => (
      <li>
        <p className="rubric video__rubric">{tag.name}</p>
      </li>
    ));
  }

  return (
    <article className="card card_content_video card-pagination_page_main">
      <div className="video">
        <a href="./films.html" className="card__link-wrap">
          <img src={movie.imageUrl} alt={`Превью видео ${movie.title}`} className="video__img" />
          <ul className="video__rubric-list">{showTags(movie.tags)}</ul>
        </a>
      </div>
      <div className="card__video-info">
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{movie.title}</h2>
          <p className="caption card__title-caption">{movie.info}</p>
        </div>
        <a href="./films.html" className="link card__link link_action_open-video">
          смотреть трейлер
        </a>
      </div>
    </article>
  );
}

BlockMovie.propTypes = {
  movie: {
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    link: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string,
      }),
    ),
  },
};

BlockMovie.defaultProps = {
  movie: {
    id: 51,
    imageUrl: 'https://picsum.photos/420/239',
    title: 'Жутко громко и запредельно близко',
    info: 'Василий Сигарев, Борисов-Мусотов (Россия), 2009 год',
    link: 'https://youtu.be/8VzzlhOyOSI',
    tags: [
      {
        id: 551,
        name: 'рубрика',
        slug: 'rubric',
      },
      {
        id: 552,
        name: 'рубрика',
        slug: 'rubric',
      },
    ],
  },
};

export default BlockMovie;
