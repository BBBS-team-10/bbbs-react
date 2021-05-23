import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from '../Profile';

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
      <div className="page">
        <Switch>
          <Route>
            <Profile />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
