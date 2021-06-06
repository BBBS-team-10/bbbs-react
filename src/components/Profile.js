import React from 'react';
import PropTypes from 'prop-types';
import StoryForm from './StoryForm';
import PostedStoryEditing from './PostedStoryEditing';

function Profile({
  onDeleteStoryClick,
  onCityChoiceClick,
  onProfileInit,
  profileNarrativesCards,
  onAddNarrative,
}) {
  // загрузка данных
  React.useEffect(() => {
    onProfileInit();
  }, []);

  return (
    <section className=" page__section personal-area">
      <div className="personal-area__user-info">
        <button
          type="button"
          className="paragraph personal-area__user-link personal-area__user-link_type_city"
          onClick={onCityChoiceClick}
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
        <StoryForm
          profileNarrativesCards={profileNarrativesCards}
          onAddNarrative={onAddNarrative}
        />
        {profileNarrativesCards.map((item) => (
          <PostedStoryEditing key={item.id} onDeleteClick={onDeleteStoryClick} card={item} />
        ))}
        {/* <PostedStoryEditing
          onDeleteClick={onDeleteStoryClick}
          profileNarrativesCards={profileNarrativesCards}
        /> */}
      </div>
    </section>
  );
}
export default Profile;

Profile.defaultProps = {
  onDeleteStoryClick: undefined,
  onCityChoiceClick: undefined,
  onProfileInit: undefined,
  profileNarrativesCards: [],
  onAddNarrative: undefined,
};

Profile.propTypes = {
  onDeleteStoryClick: PropTypes.func,
  onCityChoiceClick: PropTypes.func,
  onProfileInit: PropTypes.func,
  profileNarrativesCards: PropTypes.instanceOf(Array),
  onAddNarrative: PropTypes.func,
};
