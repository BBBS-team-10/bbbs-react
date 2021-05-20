import React from 'react';
// import './App.css';

// import { Helmet } from 'react-helmet';
// import Modal from 'react-modal';
// import lottie from 'lottie-web';
// import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { Switch, Route } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function App() {
  return (
    <CurrentUserContext.Provider value={[]}>
      <IsLoggedInContext.Provider value={false}>
        <body className="page">
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
          <Footer />
        </body>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
