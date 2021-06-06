import React from 'react';
import PropTypes from 'prop-types';
import PostedStory from './PostedStory';
import StoryFormOnEdit from './StoryFormOnEdit';

function PostedStoryEditing({ onDeleteClick, card }) {
  const [isEditClicked, setEditClicked] = React.useState(false);

  const onEdit = isEditClicked;

  if (onEdit) {
    return (
      <StoryFormOnEdit
        card={card}
        // mainText={mainText}
        // setMainText={setMainText}
        // place={place}
        // setPlace={setPlace}
      />
    );
  }
  return (
    <PostedStory
      onDeleteClick={onDeleteClick}
      isEditClicked={isEditClicked}
      setEditClicked={setEditClicked}
      card={card}
      // mainText={card}
      // place={place}
    />
  );
}

export default PostedStoryEditing;

PostedStoryEditing.defaultProps = {
  onDeleteClick: undefined,
  card: {},
};

PostedStoryEditing.propTypes = {
  onDeleteClick: PropTypes.func,
  card: PropTypes.instanceOf(Object),
};
