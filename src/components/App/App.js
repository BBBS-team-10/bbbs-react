import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from '../Profile';
import PopupDeleteStory from '../PopupDeleteStory';

// import { Helmet } from 'react-helmet';
// import Modal from 'react-modal';
// import lottie from 'lottie-web';
// import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isDeleteStoryPopupOpen, setIsDeleteStoryPopupOpen] = React.useState(false);

  function handleDeleteStoryPopupClick() {
    setIsDeleteStoryPopupOpen(!isDeleteStoryPopupOpen);
  }

  function closeDeleteStoryPopup() {
    setIsDeleteStoryPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={[]}>
      <div className="page">
        <Switch>
          <Route>
            <Profile onMenuClick={handleDeleteStoryPopupClick} />
          </Route>
        </Switch>
        <PopupDeleteStory isOpen={isDeleteStoryPopupOpen} onClose={closeDeleteStoryPopup} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
