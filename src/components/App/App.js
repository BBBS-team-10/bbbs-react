import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from '../Profile';
import PopupDeleteStory from '../PopupDeleteStory';
import PopupCityChoice from '../PopupCityChoice';

// import { Helmet } from 'react-helmet';
// import Modal from 'react-modal';
// import lottie from 'lottie-web';
// import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isDeleteStoryPopupOpen, setDeleteStoryPopupOpen] = React.useState(false);
  const [isCityChoicePopupOpen, setCityChoicePopupOpen] = React.useState(false);

  function handleDeleteStoryPopupClick() {
    setDeleteStoryPopupOpen(!isDeleteStoryPopupOpen);
  }

  function handleCityChoicePopupClick() {
    setCityChoicePopupOpen(!isCityChoicePopupOpen);
  }

  function closeDeleteStoryPopup() {
    setDeleteStoryPopupOpen(false);
  }

  function closeCityChoicePopup() {
    setCityChoicePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={[]}>
      <div className="page">
        <Switch>
          <Route>
            <Profile
              onDeleteStoryClick={handleDeleteStoryPopupClick}
              onCityChoiceClick={handleCityChoicePopupClick}
            />
          </Route>
        </Switch>
        <PopupDeleteStory isOpen={isDeleteStoryPopupOpen} onClose={closeDeleteStoryPopup} />
        <PopupCityChoice isOpen={isCityChoicePopupOpen} onClose={closeCityChoicePopup} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
