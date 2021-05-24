import React from 'react';
import PropTypes from 'prop-types';

function BlockVideo({ video }) {
  return (
    <section className="main-section page__section">
      <article className="card-container card-container_type_main-video">
        <div className="card card_color_yellow card_content_video-preview">
          <div className="card__title-wrap">
            <a href="./video.html" className="card__link-wrap">
              <h2 className="section-title card__title">{video.title}</h2>
            </a>
            <p className="caption card__title-caption">{video.info}</p>
          </div>
          <a href={video.link} className="link card__link link_action_open-video">смотреть видео</a>
        </div>
        <div className="card card_color_yellow card_content_video video">
          <a href="./video.html" className="card__link-wrap">
            <img src={video.imageUrl} alt={`Превью видео ${video.title}`} className="video__img video__img_position_main-video" />
            <p className="video__duration video__duration_position_main-video paragraph">59:44</p>
          </a>
        </div>
      </article>
    </section>
  );
}

BlockVideo.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    info: PropTypes.string,
    link: PropTypes.string,
    imageUrl: PropTypes.string,
    duration: PropTypes.number,
  }),
};

BlockVideo.defaultProps = {
  video: {
    id: 61,
    title: 'Эфир с выпускником нашей программы',
    info: 'Иван Рустаев, выпускник программы',
    link: 'https://youtu.be/H980rXfjdq4',
    imageUrl: 'https://picsum.photos/1199/675',
    duration: 134,
  },
};

export default BlockVideo;
