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
  const [headerClasses, setHeaderClasses] = useState({
    header: '',
    menuBurger: '',
    menuListSWrap: 'menu__lists-wrap_hidden',
    menuListSocial: 'menu__list_hidden',
    headerOuted: '',
  });
  function handleMenuButton() {
    if (headerClasses.header === '') {
      setHeaderClasses({
        ...headerClasses,
        header: 'header_displayed',
        menuBurger: 'menu__burger_active',
        menuListSWrap: '',
        menuListSocial: '',
      });
    } else {
      setHeaderClasses({
        ...headerClasses,
        header: '',
        menuBurger: '',
        menuListSWrap: 'menu__lists-wrap_hidden',
        menuListSocial: 'menu__list_hidden',
      });
    }
  }
  let scrollPrev = 0;
  function handleScroll() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100 && scrolled > scrollPrev) {
      setHeaderClasses({
        ...headerClasses,
        headerOuted: 'header_outed',
      });
    } else {
      setHeaderClasses({
        ...headerClasses,
        headerOuted: '',
      });
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
      <IsLoggedInContext.Provider value={false}>
        <div className="page">
          <Header headerClasses={headerClasses} handleMenuButton={handleMenuButton} />
          <Switch>
            <Route exact path="/">
              <Main mainPageData={mainPageData} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
