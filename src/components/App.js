import React, { useState } from 'react';
// import './App.css';

// import { Helmet } from 'react-helmet';
// import Modal from 'react-modal';
// import lottie from 'lottie-web';
// import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { Switch, Route } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { IsLoggedInContext } from '../contexts/IsLoggedInContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/api';

function App() {
  // header
  const [headerClass, setHeaderClass] = useState('');
  let scrollPrev = 0;
  function handleScroll() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100 && scrolled > scrollPrev) {
      setHeaderClass('header_outed');
    } else {
      setHeaderClass('');
    }
    scrollPrev = scrolled;
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // header

  // main page
  const [mainPageData, setMainPageData] = useState({});
  React.useEffect(() => {
    api
      .getMainPageInfo()
      .then((response) => {
        setMainPageData(response.data);
      })
      .catch((err) => {
        console.log(`Ошибка при получении данных с сервера: ${err}`);
      });
  }, []);

  // main page

  return (
    <CurrentUserContext.Provider value={[]}>
      <IsLoggedInContext.Provider value>
        <body className="page">
          <Header headerClass={headerClass} />
          <Switch>
            <Route exact path="/">
              <Main mainPageData={mainPageData} />
            </Route>
          </Switch>
          <Footer />
        </body>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
