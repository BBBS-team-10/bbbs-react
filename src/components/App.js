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

function App() {
  const [currentUser, setCurrentUser] = useState({});
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
    Modal.setAppElement('.page');
    api
      .getMainPageInfo()
      .then((response) => {
        setMainPageData(response.data);
        setMainPageCalendarCard(response.data.event);
      })
      .catch((err) => {
        console.log(`Ошибка при получении данных с сервера: ${err}`);
      });
  }, []);
  // main page

  // calendar
  const [calendarData, setCalendarData] = useState(null);

  const [monthList, setMonthList] = useState([]);

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

    if (currentUser.login) {
      api.getCalendarCardsLoggedIn().then((res) => {
        const cardsList = res.data.calendarCards;
        setCalendarData(cardsList);
        const newMonthList = toGetMonthListShorter(cardsList);
        setMonthList(newMonthList);
      });
    } else {
      api.getCalendarCardsLoggedOut(currentCityId).then((res) => {
        const cardsList = res.data.calendarCards;
        setCalendarData(cardsList);
        const newMonthList = toGetMonthListShorter(cardsList);
        setMonthList(newMonthList);
      });
    }
  }

  // PopupCalendarSignin ===============================================================
  const [isPopupCalendarSigninOpen, setIsPopupCalendarSigninOpen] = useState(false);

  function handlePopupCalendarSigninLoggedIn(userData) {
    api.login(userData).then(() => {
      setCurrentUser({ login: '111' });
      setIsPopupCalendarSigninOpen(false);
    });
  }
  function handlePopupCalendarSigninCloseClick() {
    history.push('/');
  }

  // PopupCalendarDescription==================================================
  const [isPopupCalendarDescriptionOpen, setIsPopupCalendarDescriptionOpen] = useState(false);
  const [clickedCalendarCard, setClickedCalendarCard] = useState([]);

  const customModalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .5)',
      overflow: 'scroll',
      display: 'flex',
    },
    content: {
      background: 'none',
      border: 'none',
      overflow: 'visible',
      margin: '50px auto 0',
      maxWidth: '770px',
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
    },
  };

  function handleOpenCalendarCardClick(card) {
    setClickedCalendarCard(card);
    setIsPopupCalendarDescriptionOpen(true);
  }

  // PopupCalendarConfirm==========================================================
  const [isPopupCalendarConfirmOpen, setIsPopupCalendarConfirmOpen] = useState(false);

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

  // PopupCalendarDone===============================================================
  const [isPopupCalendarDoneOpen, setIsPopupCalendarDoneOpen] = useState(false);

  // подтверждение на основной странице
  function handleCalendarAppointBtnClick(card) {
    if (!card.booked) {
      setClickedCalendarCard(card);
      setIsPopupCalendarConfirmOpen(true);
    } else {
      handleChangeAppoitnCalendar(card, false);
    }
  }

  // close all popups========================================================================
  function handlePopupCloseClick() {
    setIsPopupCalendarSigninOpen(false);
    setIsPopupCalendarDescriptionOpen(false);
    setIsPopupCalendarConfirmOpen(false);
    setIsPopupCalendarDoneOpen(false);
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoggedInContext.Provider value>
        <div className="page">
          <Header headerClasses={headerClasses} handleMenuButton={handleMenuButton} />
          <Switch>
            <Route exact path="/">
              <Main
                mainPageData={mainPageData}
                mainPageCalendarCard={mainPageCalendarCard}
                onOpenCalendarCardClick={handleOpenCalendarCardClick}
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
                onOpenCalendarCardClick={handleOpenCalendarCardClick}
                clickedCalendarCard={clickedCalendarCard}
                onPopupCloseClick={handlePopupCloseClick}
                onAppointCalendarClick={handleCalendarAppointBtnClick}
                onSubmitAppointCalendarClick={handleSubmitAppointCalendarClick}
                monthList={monthList}
                // popupSignin
                isPopupCalendarSigninOpen={isPopupCalendarSigninOpen}
                onPopupCalendarSigninOpen={setIsPopupCalendarSigninOpen}
                onPopupCalendarSigninClose={handlePopupCalendarSigninCloseClick}
                onPopupCalendarSigninLoogedIn={handlePopupCalendarSigninLoggedIn}
                // popupDescription
                isPopupCalendarDescriptionOpen={isPopupCalendarDescriptionOpen}
                // popupConfirm
                isPopupCalendarConfirmOpen={isPopupCalendarConfirmOpen}
                // popupDone
                isPopupCalendarDoneOpen={isPopupCalendarDoneOpen}
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
            isOpen={isPopupCalendarDescriptionOpen}
            onRequestClose={() => {
              handlePopupCloseClick();
            }}
            shouldCloseOnOverlayClick
            style={customModalStyles}
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
            style={customModalStyles}
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
            style={customModalStyles}
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
