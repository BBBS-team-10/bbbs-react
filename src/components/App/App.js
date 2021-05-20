import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import { Helmet } from 'react-helmet';
// import Modal from 'react-modal';
// import lottie from 'lottie-web';
// import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Calendar from '../Calendar/Calendar';

function App() {
  return (
    <CurrentUserContext.Provider value={[]}>
      <div className="root">
        <div className="page">
          <Switch>
            <Route exact path="/calendar">
              <Helmet>
                <title>Календарь</title>
              </Helmet>
              <Calendar />
            </Route>
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
