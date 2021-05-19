import React from 'react';
import './App.css';

// import { Helmet } from 'react-helmet';
// import Modal from 'react-modal';
// import lottie from 'lottie-web';
// import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  return (
    <CurrentUserContext.Provider value={[]}>
      <div className="root">
        <div className="page" />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
