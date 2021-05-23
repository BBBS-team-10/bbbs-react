import React from 'react';
// import PropTypes from 'prop-types';
import StoryForm from './StoryForm';
import PostedStory from './PostedStory';

function Profile() {
  return (
    <section className="personal-area page__section">
      <div className="personal-area__user-info">
        <button
          type="button"
          className="paragraph personal-area__user-link personal-area__user-link_type_city"
        >
          Изменить город
        </button>
        <button
          type="button"
          className="paragraph personal-area__user-link personal-area__user-link_type_exit"
        >
          Выйти
        </button>
      </div>
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
        <PostedStory />
      </div>
    </section>
  );
}
export default Profile;
