import React from 'react';
import PropTypes from 'prop-types';

function BlockStory({ history }) {
  return (
    <article className="card card_content_media">
      <img src={history.imageUrl} alt={history.title} className="card__media-img" />
      <a href="./stories.html" className="card__media-link section-title">
        {history.title}
      </a>
    </article>
  );
}

BlockStory.propTypes = {
  history: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
  }),
};

BlockStory.defaultProps = {
  history: {},
};

export default BlockStory;
