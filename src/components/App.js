import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Helmet } from 'react-helmet';
import Modal from 'react-modal';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { IsLoggedInContext } from '../contexts/IsLoggedInContext';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Calendar from './Calendar';
import Profile from './Profile';
import PopupDeleteStory from './PopupDeleteStory';
import PopupCityChoice from './PopupCityChoice';
import About from './About';
import PopupCalendarDescription from './PopupCalendarDescription';
import PopupCalendarConfirm from './PopupCalendarConfirm';
import PopupCalendarDone from './PopupCalendarDone';
import PopupCalendarSignin from './PopupCalendarSignin';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDeleteStoryPopupOpen, setDeleteStoryPopupOpen] = React.useState(false);
  const [isCityChoicePopupOpen, setCityChoicePopupOpen] = React.useState(false);

  const [currentCityId] = useState('1');
  const history = useHistory();

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

  // header
  const [headerClasses, setHeaderClasses] = useState({
    header: '',
    menuBurger: '',
    menuListSWrap: 'menu__lists-wrap_hidden',
    menuListSocial: 'menu__list_hidden',
    headerOuted: '',
  });
  // переключение классов мобильной версии меню
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
  // реализация появления меню при обратном скролле
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
  const [mainPageCalendarCard, setMainPageCalendarCard] = useState({});

  React.useEffect(() => {
    const access = localStorage.getItem('access');
    api
      .getMainPageInfo(access)
      .then((response) => {
        setMainPageData(response.data);
        setMainPageCalendarCard(response.data.event);
      })
      .catch((err) => {
        console.log(`Ошибка при получении данных с сервера: ${err}`);
      });
  }, []);
  // main page

  // calendar===============================================================================
  const [calendarData, setCalendarData] = useState(null);
  const [monthList, setMonthList] = useState([]);

  const [isPopupCalendarSigninOpen, setIsPopupCalendarSigninOpen] = useState(false);
  const [isPopupCalendarDescriptionOpen, setIsPopupCalendarDescriptionOpen] = useState(false);
  const [clickedCalendarCard, setClickedCalendarCard] = useState([]);
  const [isPopupCalendarConfirmOpen, setIsPopupCalendarConfirmOpen] = useState(false);
  const [isPopupCalendarDoneOpen, setIsPopupCalendarDoneOpen] = useState(false);

  // close all popups================================
  function handlePopupCloseClick() {
    setIsPopupCalendarSigninOpen(false);
    setIsPopupCalendarDescriptionOpen(false);
    setIsPopupCalendarConfirmOpen(false);
    setIsPopupCalendarDoneOpen(false);
  }

  function handelCalendarInit() {
    const toGetMonthListShorter = (arr) => {
      const result = [];
      for (let i = 0; i < arr.length; i += 1) {
        const data = format(new Date(arr[i].startAt), 'LLLL', { locale: ru });
        if (!result.includes(data)) {
          result.push(data);
        }
      }
      return result;
    };
    const access = localStorage.getItem('access');
    if (isLoggedIn) {
      // получение карточек для зарегестрированного пользователя
      // setIsPopupCalendarSigninOpen(false);
      api.getCalendarCardsLoggedIn(access).then((res) => {
        const cardsList = res.data.calendarCards;
        setCalendarData(cardsList);
        const newMonthList = toGetMonthListShorter(cardsList);
        setMonthList(newMonthList);
      });
    } else {
      // получение карточек для незарегестрированного пользователя
      // setIsPopupCalendarSigninOpen(true);
      api.getCalendarCardsLoggedOut(access, currentCityId).then((res) => {
        const cardsList = res.data.calendarCards;
        setCalendarData(cardsList);
        const newMonthList = toGetMonthListShorter(cardsList);
        setMonthList(newMonthList);
      });
    }
  }

  // PopupCalendarSignin ===============================
  function handlePopupCalendarSigninLoggedIn(userData) {
    api.login(userData).then((res) => {
      setCurrentUser({ username: res.data.username, password: res.data.password });
      localStorage.setItem('access', JSON.stringify(res.access));
      setIsLoggedIn(true);
      setIsPopupCalendarSigninOpen(false);
    });
  }
  function handlePopupCalendarSigninCloseClick() {
    handlePopupCloseClick();
    history.push('/');
  }

  // PopupCalendarDescription===========================

  function handleOpenCalendarDescriptionPopup(card) {
    setClickedCalendarCard(card);
    setIsPopupCalendarDescriptionOpen(true);
  }

  // записаться/отписаться от события
  function handleChangeAppoitnCalendar(card, bool) {
    if (calendarData) {
      const newCardsArray = calendarData.slice(0);
      const ind = newCardsArray.indexOf(card);
      newCardsArray[ind].booked = bool;
      setCalendarData(newCardsArray);
    } else {
      setMainPageCalendarCard({ ...mainPageCalendarCard, booked: bool });
    }
  }

  // подтверждение или отписка на основной странице
  function handleCalendarAppointBtnClick(card) {
    if (!card.booked) {
      setClickedCalendarCard(card);
      setIsPopupCalendarConfirmOpen(true);
    } else {
      handleChangeAppoitnCalendar(card, false);
    }
  }

  // подтверждение или запись в попапе
  function handleSubmitAppointCalendarClick(card) {
    if (!card.booked) {
      handleChangeAppoitnCalendar(card, true);
      handlePopupCloseClick();
      setIsPopupCalendarDoneOpen(true);
    } else {
      handleChangeAppoitnCalendar(card, false);
      handlePopupCloseClick();
    }
  }

  // signin=================================================================================
  function handelAppInit() {
    if (isLoggedIn) {
      setIsPopupCalendarSigninOpen(false);
    } else {
      setIsPopupCalendarSigninOpen(true);
    }
  }

  React.useEffect(() => {
    handelAppInit();
  }, [currentUser]);

  Modal.setAppElement('#root');

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoggedInContext.Provider value={isLoggedIn}>
        <div className="page">
          <Header headerClasses={headerClasses} handleMenuButton={handleMenuButton} />
          <Switch>
            <Route exact path="/">
              <Main
                mainPageData={mainPageData}
                mainPageCalendarCard={mainPageCalendarCard}
                onOpenCalendarDescriptionPopup={handleOpenCalendarDescriptionPopup}
                onAppointCalendarCardClick={handleCalendarAppointBtnClick}
              />
            </Route>
            <Route exact path="/profile">
              <Profile
                onDeleteStoryClick={handleDeleteStoryPopupClick}
                onCityChoiceClick={handleCityChoicePopupClick}
              />
            </Route>
            <Route exact path="/calendar">
              <Helmet>
                <title>Календарь</title>
              </Helmet>
              <Calendar
                onCalendarInit={handelCalendarInit}
                calendarData={calendarData}
                onOpenCalendarDescriptionPopup={handleOpenCalendarDescriptionPopup}
                onAppointCalendarClick={handleCalendarAppointBtnClick}
                monthList={monthList}
              />
            </Route>

            <Route exact path="/about">
              <Helmet>
                <title>О проекте</title>
              </Helmet>
              <About />
            </Route>
          </Switch>
          <Footer />
          <PopupDeleteStory isOpen={isDeleteStoryPopupOpen} onClose={closeDeleteStoryPopup} />
          <PopupCityChoice isOpen={isCityChoicePopupOpen} onClose={closeCityChoicePopup} />
          <Modal
            isOpen={isPopupCalendarSigninOpen}
            className="popup__modal"
            overlayClassName="popup__overlay"
          >
            <PopupCalendarSignin
              onCloseClick={handlePopupCalendarSigninCloseClick}
              onSubmit={handlePopupCalendarSigninLoggedIn}
            />
          </Modal>
          <Modal
            isOpen={isPopupCalendarDescriptionOpen}
            onRequestClose={() => {
              handlePopupCloseClick();
            }}
            shouldCloseOnOverlayClick
            className="popup__modal"
            overlayClassName="popup__overlay"
          >
            <PopupCalendarDescription
              clickedCalendarCard={clickedCalendarCard}
              onCloseClick={handlePopupCloseClick}
              onSubmitAppointCalendarClick={handleSubmitAppointCalendarClick}
            />
          </Modal>

          <Modal
            isOpen={isPopupCalendarConfirmOpen}
            onRequestClose={() => {
              handlePopupCloseClick();
            }}
            shouldCloseOnOverlayClick
            className="popup__modal"
            overlayClassName="popup__overlay"
          >
            <PopupCalendarConfirm
              clickedCalendarCard={clickedCalendarCard}
              onSubmitAppointCalendarClick={handleSubmitAppointCalendarClick}
              onCloseClick={handlePopupCloseClick}
            />
          </Modal>

          <Modal
            isOpen={isPopupCalendarDoneOpen}
            onRequestClose={() => {
              handlePopupCloseClick();
            }}
            shouldCloseOnOverlayClick
            className="popup__modal"
            overlayClassName="popup__overlay"
          >
            <PopupCalendarDone
              clickedCalendarCard={clickedCalendarCard}
              onCloseClick={handlePopupCloseClick}
            />
          </Modal>
        </div>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
