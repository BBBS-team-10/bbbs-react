import React from 'react';
import PropTypes from 'prop-types';
import PostedStory from './PostedStory';
import StoryFormOnEdit from './StoryFormOnEdit';

function PostedStoryEditing({ onDeleteClick }) {
  const [isEditClicked, setEditClicked] = React.useState(false);
  const [place, setPlace] = React.useState('Парк Горького');
  const [mainText, setMainText] = React.useState('Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание.Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.');
  const onEdit = isEditClicked;

  if (onEdit) {
    return (
      <StoryFormOnEdit
        mainText={mainText}
        setMainText={setMainText}
        place={place}
        setPlace={setPlace}
      />
    );
  }
  return (
    <PostedStory
      onDeleteClick={onDeleteClick}
      isEditClicked={isEditClicked}
      setEditClicked={setEditClicked}
      mainText={mainText}
      place={place}
    />
  );
}

export default PostedStoryEditing;

PostedStoryEditing.defaultProps = {
  onDeleteClick: undefined,
};

PostedStoryEditing.propTypes = {
  onDeleteClick: PropTypes.func,
};
