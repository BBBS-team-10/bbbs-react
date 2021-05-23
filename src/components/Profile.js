import React from 'react';
import PropTypes from 'prop-types';
import StoryForm from './StoryForm';
import PostedStory from './PostedStory';

function Profile({ onMenuClick }) {
  return (
    <section className="personal-area page__section">
      <div className="personal-area__sign-up">
        <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
          У вас нет записи на мероприятия
        </h2>
      </div>
      <div className="personal-area__story">
        <h2 className="section-title personal-area__title">
          Составьте историю вашей дружбы с младшим. Эта страница доступна только вам.
        </h2>
        <StoryForm />
        <PostedStory onMenuClick={onMenuClick} />
      </div>
    </section>
  );
}
export default Profile;

Profile.defaultProps = {
  onMenuClick: undefined,
};

Profile.propTypes = {
  onMenuClick: PropTypes.func,
};
